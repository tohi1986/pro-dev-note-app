import { createContext, useContext } from "react"
import { useSession } from "../hooks/useSession"

import type { Session } from "@supabase/supabase-js"

type AuthContextType = {
  session: Session | null
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const session = useSession()

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}