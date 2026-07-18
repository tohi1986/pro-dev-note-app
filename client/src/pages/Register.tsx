import { useState } from "react"
import { useRegister } from "../features/auth/hooks/useRegister"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerMutation = useRegister()

  async function handleRegister() {
    try {
      const data = await registerMutation.mutateAsync({
        email,
        password,
      })

      console.log("REGISTER SUCCESS:", data)

    } catch (error) {
      console.error("REGISTER ERROR:", error)
    }
  }

  return (
    <div>
      <h1 className="bg-amber-600 pb-7">Register</h1>

      <input
      className="text-amber-600 bg-black"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
      className="text-amber-600 bg-black "
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
      className="bg-amber-600" onClick={handleRegister}>
        Register
      </button>
    </div>
  )
}