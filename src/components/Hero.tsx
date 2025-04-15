export default function Hero() {
    return (
      <section className="pt-40 pb-20 px-[5%] bg-grey min-h-[80vh] flex items-center">
        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="text-5xl leading-tight text-primary-dark">
            Gérez votre pépinière digitale
          </h1>
          <p className="text-xl leading-relaxed text-text">
            PéAPInière vous permet de suivre, visualiser et gérer vos plantes préférées avec une
            interface intuitive et des outils puissants.
          </p>
          <a
            href="/login"
            className="px-8 py-4 text-lg bg-primary text-white rounded hover:bg-primary-light transition-colors inline-block w-fit"
          >
            Commencer maintenant
          </a>
        </div>
      </section>
    );
  }