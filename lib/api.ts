import { getToken } from "./auth"

const BASE_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000").replace(/\/$/, "")

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public body?: unknown,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  authenticated = false,
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  }

  if (authenticated) {
    const token = getToken()
    if (token) headers["Authorization"] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers })

  if (!res.ok) {
    let body: unknown
    try {
      body = await res.json()
    } catch {
      body = await res.text()
    }
    const message =
      typeof body === "object" && body !== null && "error" in body
        ? String((body as { error: unknown }).error)
        : `HTTP ${res.status}`
    throw new ApiError(res.status, message, body)
  }

  if (res.status === 204) return undefined as T
  return res.json() as Promise<T>
}

// ── Subscribers ───────────────────────────────────────────────────────────────

export interface SubscribeResponse {
  message: string
  userId: string
  isNew: boolean
}

export function subscribe(email: string): Promise<SubscribeResponse> {
  return request<SubscribeResponse>("/v1/subscribers", {
    method: "POST",
    body: JSON.stringify({ email }),
  })
}

export function unsubscribe(email: string): Promise<void> {
  return request<void>("/v1/subscribers", {
    method: "DELETE",
    body: JSON.stringify({ email }),
  })
}

// ── Auth ──────────────────────────────────────────────────────────────────────

export interface MagicLinkResponse {
  message: string
}

export function requestMagicLink(email: string): Promise<MagicLinkResponse> {
  return request<MagicLinkResponse>("/v1/auth/request-link", {
    method: "POST",
    body: JSON.stringify({ email }),
  })
}

export interface VerifyTokenResponse {
  token: string
  user: { id: string; email: string; name?: string; onboardingDone: boolean }
}

export function verifyMagicLink(token: string): Promise<VerifyTokenResponse> {
  return request<VerifyTokenResponse>(`/v1/auth/verify?token=${encodeURIComponent(token)}`)
}

export interface MeResponse {
  id: string
  email: string
  name?: string
  timezone?: string
  goals: string[]
  newsletterOptIn: boolean
  onboardingDone: boolean
  connections: { provider: string; status: string; connectedAt: string }[]
}

export function getMe(): Promise<MeResponse> {
  return request<MeResponse>("/v1/auth/me", {}, true)
}

// ── Profile ───────────────────────────────────────────────────────────────────

export interface UpdateProfilePayload {
  name?: string
  timezone?: string
  goals?: string[]
  notifyAt?: string
  onboardingDone?: boolean
}

export function updateProfile(payload: UpdateProfilePayload): Promise<MeResponse> {
  return request<MeResponse>("/v1/profile", { method: "PATCH", body: JSON.stringify(payload) }, true)
}

// ── OAuth ─────────────────────────────────────────────────────────────────────

/**
 * Returns the URL to redirect the browser to for OAuth device connection.
 * The backend accepts `?auth_token=` so no popup/CORS issue.
 */
export function getOAuthConnectUrl(provider: "garmin" | "fitbit"): string {
  const token = getToken()
  const params = new URLSearchParams()
  if (token) params.set("auth_token", token)
  return `${BASE_URL}/oauth/${provider}/connect?${params.toString()}`
}
