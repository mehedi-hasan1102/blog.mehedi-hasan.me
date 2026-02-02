export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-zinc-300">
          Still cooking..
        </h1>
        <a href="https://www.mehedi-hasan.me/" className="px-6 py-2 bg-zinc-200 text-zinc-950 rounded-md hover:bg-zinc-300 transition-colors flex items-center gap-2">
          Go back
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
