export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-semibold">Hello and Welcome!</h1> {/* Add class to ensure it's styled */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        This site is under-development. Stay tuned for more.
      </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p> Thank you </p>
      </footer>
    </div>
  );
}
