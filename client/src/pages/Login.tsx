import { useState } from "react"
import { useLogin } from "../features/auth/hooks/useLogin"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginMutation = useLogin()

  async function handleLogin() {
    try {
      const data = await loginMutation.mutateAsync({
        email: email.trim(),
        password,
      })

      console.log("LOGIN SUCCESS:", data)

    } catch (error) {
      console.error("LOGIN ERROR:", error)
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        className="bg-amber-500"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
      className="bg-amber-500"
      placeholder="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <button 
      className="bg-amber-800"
      onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}