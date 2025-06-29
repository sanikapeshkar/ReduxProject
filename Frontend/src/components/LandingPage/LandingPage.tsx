"use client";

import Link from "next/link";

export const LandingPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Productivity Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Organize your tasks, set goals, track your habits, and boost your
          productivity – all in one place.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
          >
            Create an Account
          </Link>
        </div>
      </section>
    </main>
  );
};
