import { useState } from 'react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', email);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-96 space-y-4 p-8 border rounded-lg bg-white">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-black text-white p-2 rounded">
          Login
        </button>
      </form>
    </main>
  );
}
