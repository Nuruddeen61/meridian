"use client";
import { useState } from "react";
import { readVaultAdmin } from "@/sdk/coordinator";
import { useRouter } from "next/navigation";

export default function AdminGate() {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const adminSecret = await readVaultAdmin();
    if (secret === adminSecret) {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid admin secret");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onPoolSubmit={handleSubmit} className="w-96 space-y-4 p-8 border rounded-lg">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input type="password" value={secret} onChange={(e) => setSecret(e.target.value)} placeholder="Enter admin secret" className="w-full p-2 border rounded"/>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full p-2 bg-black text-white rounded">Access Dashboard</button>
      </form>
    </div>
  );
}
