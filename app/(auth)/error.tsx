"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#fffc00] via-[#fffa00] to-[#fff700]'>
      <h2 className='text-2xl text-center text-red-500 mb-4'>
        Something went wrong! {error.message}
      </h2>
      <button
        className='rounded-md bg-sigSurface px-4 py-2 text-lg text-white transition-colors hover:bg-main'
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
