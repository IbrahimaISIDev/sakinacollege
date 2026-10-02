import { useState } from 'react';
import { Search, Facebook, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import ArticleCard from '../components/ArticleCard';
import Article from './Article';
import NotFound from './NotFound';
import { college } from '../data/college';
import { news, archiveData, archiveYears, CATEGORY_NAMES, findArticle, isArchiveYear } from '../data/news';

const categories = [
  { id: 'all', name: 'Toutes les actualités', count: news.length },
  ...Object.entries(CATEGORY_NAMES).map(([id, name]) => ({
    id,
    name,
    count: news.filter((article) => article.category === id).length
  }))
];

// Recherche insensible à la casse et aux accents
const normalize = (text) => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const ArchiveYear = ({ year }) => {
  const articles = archiveData[year] || [];

  return (
    <div className="min-h-screen">
      <PageHero
        title={`Archives ${year}`}
        subtitle={articles.length > 0 ? `Revivez les moments forts de l'année ${year}` : `Aucune archive disponible pour ${year}`}
      >
        <a
          href="/actualites"
          className="inline-block mb-4 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300"
        >
          ← Retour aux actualités
        </a>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// param : année d'archive (/actualites/2023) ou adresse d'un article (/actualites/<titre-de-l-article>)
const News = ({ param }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (param) {
    if (isArchiveYear(param)) {
      return <ArchiveYear year={param} />;
    }
    const article = findArticle(param);
    return article ? <Article article={article} /> : <NotFound />;
  }

  const query = normalize(searchTerm.trim());
  const filteredNews = news.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = !query || normalize(`${article.title} ${article.excerpt}`).includes(query);
    return matchesCategory && matchesSearch;
  });

  // La section "À la une" n'apparaît que sans filtre ni recherche ; sinon tous les résultats sont dans la grille
  const showFeatured = selectedCategory === 'all' && !query;
  const featuredNews = showFeatured ? news.filter((article) => article.featured) : [];
  const gridNews = showFeatured ? filteredNews.filter((article) => !article.featured) : filteredNews;

  return (
    <div className="min-h-screen">
      <PageHero
        title="Actualités"
        subtitle="Suivez la vie de notre établissement et les dernières nouvelles de notre communauté éducative"
      />

      {/* Section Filtres et Recherche */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Recherche */}
            <div className="relative flex-1 w-full max-w-md">
              <label htmlFor="recherche-actualites" className="sr-only">Rechercher dans les actualités</label>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
              <input
                id="recherche-actualites"
                type="search"
                placeholder="Rechercher dans les actualités..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-green focus:border-transparent focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrer par catégorie">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={selectedCategory === category.id}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-sakina-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles à la Une */}
      {featuredNews.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sakina-green mb-12 text-center">
              À la Une
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Toutes les Actualités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sakina-green mb-12 text-center">
            {selectedCategory === 'all' ? 'Toutes les Actualités' : `Actualités - ${CATEGORY_NAMES[selectedCategory]}`}
          </h2>

          <div aria-live="polite">
            {gridNews.length === 0 ? (
              <p className="text-center py-12 text-xl text-gray-500">
                Aucune actualité trouvée pour cette recherche.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridNews.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Restez informé (pas de newsletter tant qu'aucun service d'envoi n'est branché) */}
      <section className="py-20 bg-sakina-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Restez informé
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Suivez la vie du Collège Sakina au quotidien sur nos réseaux.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={college.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sakina-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-sakina-red-dark transition-colors duration-300 flex items-center justify-center"
              >
                <Facebook className="w-5 h-5 mr-2" aria-hidden="true" />
                Facebook
              </a>
              <a
                href={college.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-sakina-green transition-colors duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Archives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-sakina-green mb-4">
              Archives des Actualités
            </h2>
            <p className="text-gray-600 mb-8">
              Consultez nos actualités des années précédentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveYears.map((year) => {
              const articles = archiveData[year];
              return (
                <div
                  key={year}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-3xl font-bold text-sakina-green mb-2">{year}</h3>
                    <p className="text-gray-600">
                      {articles.length} actualité{articles.length > 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Temps forts de l'année :</p>
                    <ul className="space-y-2">
                      {articles.map((article) => (
                        <li key={article.id} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-sakina-red rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                          {article.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`/actualites/${year}`}
                    className="block w-full text-center bg-sakina-green text-white py-3 rounded-lg font-semibold hover:bg-sakina-green-light transition-colors duration-300 group-hover:shadow-md"
                  >
                    Consulter {year}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
