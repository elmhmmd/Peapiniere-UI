'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/stores/authStore';

export default function Header() {
  const { token, logout } = useAuthStore();

  return (
    <header className="fixed w-full bg-light py-4 px-[5%] flex justify-between items-center shadow-header z-[1000]">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
        <Image src="/logo.png" alt="PéAPInière Logo" width={24} height={24} priority />
        PéAPInière
      </Link>
      <div className="flex gap-4">
        {token ? (
          <>
            <Link
              href="/admin/categories"
              className="px-6 py-2 border border-primary text-primary rounded bg-transparent hover:bg-grey transition-colors font-semibold"
            >
              Admin
            </Link>
            <button
              onClick={logout}
              className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors font-semibold"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="px-6 py-2 border border-primary text-primary rounded bg-transparent hover:bg-grey transition-colors font-semibold"
            >
              Se connecter
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors font-semibold"
            >
              S'inscrire
            </Link>
          </>
        )}
      </div>
    </header>
  );
}