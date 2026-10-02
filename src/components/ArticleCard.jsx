import { Calendar, User, ArrowRight } from 'lucide-react';
import { CATEGORY_COLORS, CATEGORY_NAMES, articlePath, formatArticleDate } from '../data/news';

// Carte d'actualité : toute la carte mène à la page de l'article (lien étendu sur le titre)
const ArticleCard = ({ article, featured = false, headingLevel = 'h3' }) => {
  const Heading = headingLevel;
  return (
    <article
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 group focus-within:ring-2 focus-within:ring-sakina-green ${
        featured ? 'shadow-lg hover:shadow-xl' : 'border border-gray-200 hover:shadow-lg'
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${CATEGORY_COLORS[article.category]}`}>
            {CATEGORY_NAMES[article.category]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-x-2">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          {featured && (
            <>
              <span aria-hidden="true">•</span>
              <User className="w-4 h-4" aria-hidden="true" />
              <span>{article.author}</span>
            </>
          )}
        </div>

        <Heading className={`font-bold text-sakina-green mb-3 ${featured ? 'text-xl' : 'text-lg'}`}>
          <a
            href={articlePath(article)}
            className="focus:outline-none after:absolute after:inset-0 group-hover:text-sakina-red transition-colors duration-300"
          >
            {article.title}
          </a>
        </Heading>

        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>

        <span className="text-sakina-green font-semibold flex items-center" aria-hidden="true">
          Lire la suite
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
};

export default ArticleCard;
