import PageHero from '../components/PageHero';
import { navItems } from '../data/college';

const NotFound = () => (
  <div className="min-h-[60vh]">
    <PageHero title="Page introuvable" subtitle="Cette page n'existe pas ou a été déplacée." />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg text-gray-600 mb-8">Vous pouvez poursuivre votre visite depuis l'une de ces pages :</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {navItems.map((item) => (
            <li key={item.page}>
              <a
                href={item.path}
                className="inline-block px-5 py-2 rounded-full bg-gray-100 text-sakina-blue font-medium hover:bg-sakina-blue hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default NotFound;
