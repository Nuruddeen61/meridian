Gashi ka jaraci 'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 space-y-4 p-8 border rounded-lg">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="w-full bg-black text-white p-2 rounded">
          Login
        </button>
      </form>
    </main>
  );
}
