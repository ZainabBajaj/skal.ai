export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Hello and Welcome! </h3>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          This site is developed to collect donations for a mentally ill small girl, named Zaaj, who hails from a small town of Poland named War Burton. She's 44 years old physically, owns a brain of a 7 year old kid, and needs to get cured immediately. 
        </div>
        <a>Click here to donate</a>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p> Thank you </p>
      </footer>
    </div>
  );
}
