import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {

  const auth = useAuth()

  if (!auth?.session) {
    return <Navigate to="/login" />
  }

  return children
}