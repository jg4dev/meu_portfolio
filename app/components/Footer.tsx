export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Texto */}
        <div className="text-center md:text-left">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} João Gabriel
          </p>
          <p className="text-zinc-500 text-xs mt-1">
            Desenvolvedor Front-end
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/jg4dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-santos-da-silva-579335352/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:jg447081@email.com"
            className="text-zinc-400 hover:text-zinc-100 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}