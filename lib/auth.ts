const JWT_KEY = "bp_token"
const EMAIL_KEY = "bp_email"
const LEGACY_EMAIL_KEY = "userEmail"
const ONBOARDING_KEY = "bp_onboarding"

export type OnboardingData = {
  name: string
  goals: string[]
  timezone: string
  device: string
}

// ── JWT ──────────────────────────────────────────────────────────────────────

export function getToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(JWT_KEY)
}

export function setToken(token: string): void {
  localStorage.setItem(JWT_KEY, token)
}

export function clearToken(): void {
  localStorage.removeItem(JWT_KEY)
}

export function isAuthenticated(): boolean {
  const token = getToken()
  if (!token) return false
  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    return payload.exp * 1000 > Date.now()
  } catch {
    return false
  }
}

// ── Email persistence ─────────────────────────────────────────────────────────

export function getPendingEmail(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(EMAIL_KEY) ?? localStorage.getItem(LEGACY_EMAIL_KEY)
}

export function setPendingEmail(email: string): void {
  localStorage.setItem(EMAIL_KEY, email)
}

export function clearPendingEmail(): void {
  localStorage.removeItem(EMAIL_KEY)
  localStorage.removeItem(LEGACY_EMAIL_KEY)
}

// ── Onboarding state ──────────────────────────────────────────────────────────

export function getOnboardingData(): Partial<OnboardingData> {
  if (typeof window === "undefined") return {}
  try {
    const raw = localStorage.getItem(ONBOARDING_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function setOnboardingData(data: Partial<OnboardingData>): void {
  const current = getOnboardingData()
  localStorage.setItem(ONBOARDING_KEY, JSON.stringify({ ...current, ...data }))
}

export function clearOnboardingData(): void {
  localStorage.removeItem(ONBOARDING_KEY)
}
