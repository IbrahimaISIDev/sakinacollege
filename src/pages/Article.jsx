import { useEffect, useState } from 'react';
import { Calendar, User, Facebook, MessageCircle, Link2, Check, ChevronRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { SITE_URL } from '../data/seo';
import { allArticles, articlePath, CATEGORY_COLORS, CATEGORY_NAMES, formatArticleDate } from '../data/news';

// Trois suggestions : même catégorie d'abord, puis les plus récentes
const relatedArticles = (article) =>
  allArticles
    .filter((other) => other.slug !== article.slug)
    .sort((a, b) => (b.category === article.category) - (a.category === article.category) || b.date.localeCompare(a.date))
    .slice(0, 3);

const shareButtonClasses =
  'inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300';

const Article = ({ article }) => {
  const path = articlePath(article);
  // Adresse partagée : connue au pré-rendu si VITE_SITE_URL est défini, sinon complétée dans le navigateur
  const [url, setUrl] = useState(SITE_URL ? `${SITE_URL}${path}` : path);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
    setCopied(false);
  }, [path]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copiez le lien de cet article :', url);
    }
  };

  return (
    <article className="bg-white">
      <header className="bg-gradient-to-br from-sakina-green to-sakina-green-light text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-green-100">
            <ol className="flex flex-wrap items-center gap-1">
              <li><a href="/" className="hover:text-white hover:underline">Accueil</a></li>
              <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
              <li><a href="/actualites" className="hover:text-white hover:underline">Actualités</a></li>
              <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
              <li aria-current="page" className="text-white truncate max-w-[16rem] sm:max-w-md">{article.title}</li>
            </ol>
          </nav>

          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${CATEGORY_COLORS[article.category]}`}>
            {CATEGORY_NAMES[article.category]}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-green-100">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" aria-hidden="true" />
              {article.author}
            </span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        <img
          src={article.image}
          alt=""
          className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg mb-10"
        />

        <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">{article.excerpt}</p>
        <p className="text-lg text-gray-700 leading-relaxed">{article.content}</p>

        {/* Partage */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-sakina-green mb-4">Partager cet article</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${url}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${shareButtonClasses} bg-[#075E54] text-white hover:bg-[#054d44]`}
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              WhatsApp<span className="sr-only"> (nouvel onglet)</span>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${shareButtonClasses} bg-[#1460c4] text-white hover:bg-[#0f4fa3]`}
            >
              <Facebook className="w-4 h-4" aria-hidden="true" />
              Facebook<span className="sr-only"> (nouvel onglet)</span>
            </a>
            <button
              type="button"
              onClick={copyLink}
              className={`${shareButtonClasses} bg-gray-100 text-gray-800 hover:bg-gray-200`}
            >
              {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Link2 className="w-4 h-4" aria-hidden="true" />}
              {copied ? 'Lien copié' : 'Copier le lien'}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? 'Lien copié dans le presse-papiers' : ''}
            </span>
          </div>
        </div>

        <a href="/actualites" className="inline-block mt-10 text-sakina-green font-semibold hover:text-sakina-red">
          ← Toutes les actualités
        </a>
      </div>

      {/* Autres actualités */}
      <section className="bg-gray-50 py-16" aria-labelledby="autres-actualites">
        <div className="container mx-auto px-4">
          <h2 id="autres-actualites" className="text-2xl md:text-3xl font-bold text-sakina-green mb-10 text-center">
            À lire aussi
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles(article).map((other) => (
              <ArticleCard key={other.slug} article={other} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Article;
