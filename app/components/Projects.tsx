const projects = [
  {
    title: "Portfólio pessoal",
    description: "Meu site pessoal feito com Next.js e Tailwind CSS.",
    github: "https://github.com/jg4dev",
  },
  {
    title: "Sistema de login",
    description: "Tela de autenticação com validação de formulário.",
    github: "https://github.com/jg4dev",
  },
  {
    title: "Landing page",
    description: "Landing page moderna e responsiva.",
    github: "https://github.com/jg4dev",
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="w-full bg-zinc-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-100 mb-12">
          Projetos
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-6 flex flex-col justify-between hover:bg-zinc-800 transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {project.description}
                </p>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-zinc-300 hover:text-white transition"
              >
                Ver no GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
