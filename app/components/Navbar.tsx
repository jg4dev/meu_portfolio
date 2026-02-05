

export default function Navbar() {

  return (
    <nav className="fixed top-0 w-full bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-zinc-100 font-bold">
          João Gabriel
        </span>

        <div className="flex gap-6 text-zinc-300">
          <a href="#" className="hover:text-white">Sobre</a>
          <a href="#" className="hover:text-white">Projetos</a>
          <a href="#" className="hover:text-white">Contato</a>
          
        </div>
      </div>
    </nav>
  );
}
