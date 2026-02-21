"use client"

import { create } from "zustand"
import { clearPendingEmail, clearToken, isAuthenticated } from "@/lib/auth"
import { useSessionStore } from "@/lib/session-store"

const AUTH_EVENT = "bp-auth-changed"
const JWT_KEY = "bp_token"

let listenersBound = false

type AuthStore = {
  isAuthed: boolean
  initialized: boolean
  initializeAuth: () => void
  refreshAuth: () => void
  signOut: () => void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthed: false,
  initialized: false,

  refreshAuth: () => {
    set({ isAuthed: isAuthenticated() })
  },

  initializeAuth: () => {
    if (typeof window !== "undefined") {
      set({ isAuthed: isAuthenticated(), initialized: true })

      if (!listenersBound) {
        const onAuthChanged = () => set({ isAuthed: isAuthenticated() })
        const onStorage = (event: StorageEvent) => {
          if (event.key === JWT_KEY) onAuthChanged()
        }

        window.addEventListener(AUTH_EVENT, onAuthChanged)
        window.addEventListener("storage", onStorage)
        listenersBound = true
      }
      return
    }

    set({ initialized: true })
  },

  signOut: () => {
    clearToken()
    clearPendingEmail()
    useSessionStore.getState().clearPendingEmail()
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("onboarding_subscribe_sent")
      sessionStorage.removeItem("onboarding_subscribe_state")
      window.dispatchEvent(new Event(AUTH_EVENT))
    }
    set({ isAuthed: false })
  },
}))
