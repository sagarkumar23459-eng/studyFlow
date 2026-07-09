"use client";

import { useAuth } from "@clerk/nextjs";

export default function TestPage() {
  const auth = useAuth();

  return (
    <div className="p-10">
      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </div>
  );
}