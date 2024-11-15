import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between p-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-grow flex-col items-center justify-center">
        <div className="mt-4"></div>
        <Link
          href="/svg-to-png"
          className="text-blue-500 hover:underline font-bold text-2xl"
        >
          SVG to PNG converter
        </Link>
        <Link
          href="/rounded-border"
          className="text-blue-500 hover:underline font-bold text-2xl mt-4"
        >
          Corner Rounder
        </Link>
      </main>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <a
          href="https://github.com/AkramRamoul/png_to_svg"
          target="_blank"
          className="hover:underline font-semibold"
        >
          View on GitHub
        </a>
      </footer>
    </div>
  );
}
