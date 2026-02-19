// components/Header.tsx
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5">
        {/* Left: name mark */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-zinc-900">Bin Chen</span>
        </Link>

        {/* Right: nav */}
        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="mailto:binnehc@gmail.com"
            className="rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
          >
            Say hello
          </a>
        </nav>
      </div>
    </header>
  );
}
