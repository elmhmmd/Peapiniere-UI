export default function Services() {
    return (
      <section className="py-20 px-[5%] bg-light">

<h2 className="text-center mb-12 text-3xl text-primary-dark relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-accent after:mx-auto after:mt-4">
  Nos services
</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-grey rounded-lg p-6 flex flex-col gap-4">
            <div className="text-4xl text-primary">🔐</div>
            <h3 className="text-xl text-primary-dark">Gestion de compte</h3>
            <p className="text-text">
              Inscrivez-vous et connectez-vous pour accéder à vos informations et vos commandes en toute
              sécurité.
            </p>
          </div>
          <div className="bg-grey rounded-lg p-6 flex flex-col gap-4">
            <div className="text-4xl text-primary">🪴</div>
            <h3 className="text-xl text-primary-dark">Catalogue de plantes</h3>
            <p className="text-text">
              Consultez notre catalogue détaillé avec des descriptions, images et informations pour
              chaque plante.
            </p>
          </div>
          <div className="bg-grey rounded-lg p-6 flex flex-col gap-4">
            <div className="text-4xl text-primary">🧺</div>
            <h3 className="text-xl text-primary-dark">Commandes simplifiées</h3>
            <p className="text-text">
              Passez vos commandes facilement et suivez leur état en temps réel jusqu'à la livraison.
            </p>
          </div>
          <div className="bg-grey rounded-lg p-6 flex flex-col gap-4">
            <div className="text-4xl text-primary">📊</div>
            <h3 className="text-xl text-primary-dark">Suivi des ventes</h3>
            <p className="text-text">
              Pour les administrateurs, accédez à des statistiques détaillées sur les ventes et les
              produits populaires.
            </p>
          </div>
        </div>
      </section>
    );
  }