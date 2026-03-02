export default function Termos() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e1f2ed] font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-20 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left py-8">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Termos de Uso do <span className="text-[#1a574f] font-bold">Zapfaztudo</span>.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam cum deserunt excepturi, officiis iste eveniet inventore numquam neque quos eum repellendus aspernatur laborum voluptatem! Maxime quae illo molestiae eligendi mollitia.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#1a574f] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://instagram.com/zapfaztudo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#1a574f] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://facebook.com/zapfaztudo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </main>
    </div>
  );
}
