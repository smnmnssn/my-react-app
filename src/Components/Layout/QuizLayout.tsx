export default function Layout() {
  return (
    <div className="text-black font-extrabold">
      <header className="flex justify-between p-6 bg-slate-400">
        <h1>BIG TITLE</h1>
        <span>RIGHT</span>
      </header>

      <div className="flex">
        <aside className="bg-slate-500">
          SIDEBAR
        </aside>

        <main className="bg-slate-700 p-4 rounded flex-1">
          MAIN AREA
        </main>
      </div>
    </div>
  );
}