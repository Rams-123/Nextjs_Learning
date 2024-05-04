import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex gap-10">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/footer">Footer</Link>
    </main>
  );
}
