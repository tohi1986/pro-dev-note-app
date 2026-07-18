import { useEffect, useState } from "react";


export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div className="font-semibold flex flex-col items-center justify-center">
      <h1 className="text-amber-500">FE - working</h1>
      <p className="text-amber-500">{msg}</p>
    </div>
  );
}