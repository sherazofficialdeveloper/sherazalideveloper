import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-4xl font-extrabold text-[#18191c] mb-2 font-['Lexend']">
        404 - Page Not Found
      </h2>
      <p className="text-[#6f7174] mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded bg-[#2563EB] text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
