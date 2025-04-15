// src/components/LoginForm.tsx
'use client';

import { useState } from 'react';
import { useAuthStore } from '@/stores/authStore';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-grey px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-light p-8 rounded-lg shadow-header"
      >
        <h2 className="text-3xl font-bold text-primary-dark mb-6 text-center">
          Se connecter
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-text font-semibold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-grey-dark rounded bg-grey text-text focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-text font-semibold mb-2"
          >
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-grey-dark rounded bg-grey text-text focus:outline-none focus:border-primary"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-3 bg-primary text-white rounded hover:bg-primary-light transition-colors disabled:bg-grey-dark font-semibold"
        >
          {isLoading ? 'Connexion...' : 'Se connecter'}
        </button>
        <p className="mt-4 text-center text-text">
          Pas de compte ?{' '}
          <Link
            href="/signup"
            className="text-primary hover:text-primary-light font-semibold"
          >
            S'inscrire
          </Link>
        </p>
      </form>
    </section>
  );
}