import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Search, Filter } from 'lucide-react';
import studentsImage from '../assets/images/students-classroom.jpg';
import islamicEducationImage from '../assets/images/islamic-education.jpg';
import studentsGroupImage from '../assets/images/students-group.jpg';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);

  const categories = [
    { id: 'all', name: 'Toutes les actualités', count: 12 },
    { id: 'academic', name: 'Académique', count: 5 },
    { id: 'events', name: 'Événements', count: 4 },
    { id: 'achievements', name: 'Réussites', count: 3 }
  ];

  const news = [
    {
      id: 1,
      title: "Excellents résultats au BFEM 2024",
      excerpt: "Nos élèves de 3ème ont brillé aux examens du BFEM avec un taux de réussite exceptionnel de 98%.",
      content: "Cette année encore, le Collège Privé Musulman Sakina confirme son excellence pédagogique avec des résultats remarquables au Brevet de Fin d'Études Moyennes. Sur 45 candidats présentés, 44 ont été admis, soit un taux de réussite de 98%. Parmi eux, 15 élèves ont obtenu une mention Très Bien, 20 une mention Bien et 9 une mention Assez Bien.",
      image: studentsImage,
      category: 'achievements',
      author: 'Direction Pédagogique',
      date: '2024-07-15',
      featured: true
    },
    {
      id: 2,
      title: "Concours de récitation coranique 2024",
      excerpt: "Grande finale du concours annuel de mémorisation et récitation du Saint Coran.",
      content: "Le Collège Sakina a organisé son concours annuel de récitation coranique qui s'est déroulé dans une ambiance spirituelle remarquable. Plus de 80 élèves ont participé à cette compétition qui valorise l'apprentissage du Coran. Les lauréats ont été récompensés lors d'une cérémonie en présence des familles.",
      image: islamicEducationImage,
      category: 'events',
      author: 'Département Islamique',
      date: '2024-06-20',
      featured: true
    },
    {
      id: 3,
      title: "Nouvelle année scolaire 2024-2025",
      excerpt: "Préparatifs en cours pour accueillir nos élèves dans les meilleures conditions.",
      content: "L'équipe du Collège Sakina met tout en œuvre pour préparer la rentrée scolaire 2024-2025. Nouveaux équipements pédagogiques, formation continue des enseignants et amélioration des infrastructures sont au programme pour offrir un environnement d'apprentissage optimal.",
      image: studentsGroupImage,
      category: 'academic',
      author: 'Administration',
      date: '2024-08-01',
      featured: false
    },
    {
      id: 4,
      title: "Formation des enseignants en pédagogie moderne",
      excerpt: "Nos enseignants se forment aux dernières méthodes pédagogiques pour améliorer l'apprentissage.",
      content: "Dans le cadre de notre engagement pour l'excellence éducative, l'ensemble du corps enseignant a participé à une formation intensive sur les méthodes pédagogiques modernes. Cette formation vise à intégrer les nouvelles approches d'enseignement tout en préservant nos valeurs islamiques.",
      image: studentsImage,
      category: 'academic',
      author: 'Formation Continue',
      date: '2024-05-10',
      featured: false
    },
    {
      id: 5,
      title: "Journée portes ouvertes - Mars 2024",
      excerpt: "Découvrez notre établissement lors de notre journée portes ouvertes annuelle.",
      content: "Le Collège Sakina ouvre ses portes aux familles intéressées par notre projet éducatif. Au programme : visite des classes, rencontre avec les enseignants, présentation des programmes et témoignages d'anciens élèves. Une occasion unique de découvrir notre approche pédagogique.",
      image: studentsGroupImage,
      category: 'events',
      author: 'Communication',
      date: '2024-03-15',
      featured: false
    },
    {
      id: 6,
      title: "Prix d'excellence en langue arabe",
      excerpt: "Nos élèves remportent le concours régional de langue arabe organisé par l'Institut Islamique.",
      content: "Fierté pour le Collège Sakina ! Trois de nos élèves ont remporté les premières places du concours régional de langue arabe. Cette victoire témoigne de la qualité de notre enseignement en langue arabe et de l'engagement de nos élèves dans l'apprentissage de cette langue sacrée.",
      image: islamicEducationImage,
      category: 'achievements',
      author: 'Département Arabe',
      date: '2024-04-22',
      featured: false
    }
  ];

  const filteredNews = news.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = news.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      academic: 'bg-blue-100 text-blue-800',
      events: 'bg-green-100 text-green-800',
      achievements: 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category) => {
    const names = {
      academic: 'Académique',
      events: 'Événements',
      achievements: 'Réussites'
    };
    return names[category] || category;
  };

  const handleArchiveClick = (year) => {
    setSelectedYear(year);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getArchiveNews = (year) => {
    const archiveData = {
      '2023': [
        {
          id: 101,
          title: "Prix d'excellence académique 2023",
          excerpt: "Le Collège Sakina reçoit le prix régional d'excellence académique pour ses résultats exceptionnels.",
          content: "Une reconnaissance méritée pour notre établissement qui confirme notre engagement pour l'excellence éducative.",
          image: studentsImage,
          category: 'achievements',
          author: 'Direction',
          date: '2023-12-15'
        },
        {
          id: 102,
          title: "Journées culturelles islamiques 2023",
          excerpt: "Semaine dédiée à la culture islamique avec expositions, récitations et conférences.",
          content: "Un événement riche qui a permis aux élèves de découvrir et approfondir leur connaissance de la culture islamique.",
          image: islamicEducationImage,
          category: 'events',
          author: 'Département Culturel',
          date: '2023-11-20'
        },
        {
          id: 103,
          title: "Formation continue des enseignants",
          excerpt: "Session de formation intensive pour l'amélioration des méthodes pédagogiques.",
          content: "Nos enseignants se perfectionnent pour offrir un enseignement toujours plus adapté aux besoins des élèves.",
          image: studentsGroupImage,
          category: 'academic',
          author: 'Formation Continue',
          date: '2023-10-10'
        }
      ],
      '2022': [
        {
          id: 201,
          title: "Inauguration de la nouvelle aile",
          excerpt: "Ouverture d'un nouveau bâtiment avec laboratoires et salles multimédias modernes.",
          content: "Extension de nos infrastructures pour mieux accueillir nos élèves et améliorer les conditions d'apprentissage.",
          image: studentsImage,
          category: 'academic',
          author: 'Administration',
          date: '2022-09-15'
        },
        {
          id: 202,
          title: "Concours de sciences physiques",
          excerpt: "Nos élèves brillent au concours régional de sciences physiques et chimie.",
          content: "Première place remportée par notre équipe lors du concours inter-établissements.",
          image: studentsGroupImage,
          category: 'achievements',
          author: 'Département Sciences',
          date: '2022-05-20'
        }
      ],
      '2021': [
        {
          id: 301,
          title: "Adaptation aux mesures COVID-19",
          excerpt: "Mise en place de protocoles sanitaires et enseignement hybride.",
          content: "Notre établissement s'adapte aux contraintes sanitaires tout en maintenant la qualité de l'enseignement.",
          image: studentsImage,
          category: 'academic',
          author: 'Cellule COVID',
          date: '2021-03-10'
        }
      ],
      '2020': [
        {
          id: 401,
          title: "Continuité pédagogique en ligne",
          excerpt: "Lancement de la plateforme d'enseignement à distance.",
          content: "Innovation pédagogique pour assurer la continuité des cours pendant la pandémie.",
          image: studentsGroupImage,
          category: 'academic',
          author: 'Innovation Pédagogique',
          date: '2020-04-15'
        }
      ],
      '2019': [
        {
          id: 501,
          title: "10 ans du Collège Sakina",
          excerpt: "Célébration du dixième anniversaire de notre établissement.",
          content: "Une décennie d'excellence éducative célébrée avec toute la communauté scolaire.",
          image: islamicEducationImage,
          category: 'events',
          author: 'Comité des Fêtes',
          date: '2019-06-20'
        }
      ]
    };
    return archiveData[year] || [];
  };

  if (selectedYear) {
    const archiveNews = getArchiveNews(selectedYear);
    
    return (
      <div className="min-h-screen">
        {/* Header avec retour */}
        <section className="relative bg-gradient-to-br from-sakina-blue to-blue-800 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white space-y-6">
              <button
                onClick={() => setSelectedYear(null)}
                className="mb-4 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                ← Retour aux archives
              </button>
              <h1 className="text-4xl md:text-6xl font-bold">
                Archives {selectedYear}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
                Revivez les moments forts de l'année {selectedYear}
              </p>
            </div>
          </div>
        </section>

        {/* Articles de l'année */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {archiveNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {getCategoryName(article.category)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-sakina-blue mb-3 group-hover:text-sakina-gold transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <button className="text-sakina-blue font-semibold hover:text-sakina-gold transition-colors duration-300 flex items-center text-sm group">
                      Lire plus
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-br from-sakina-blue to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Actualités
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Suivez la vie de notre établissement et les dernières nouvelles 
              de notre communauté éducative
            </p>
          </div>
        </div>
      </section>

      {/* Section Filtres et Recherche */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans les actualités..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-sakina-blue text-white'
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
      {selectedCategory === 'all' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sakina-blue mb-12 text-center">
              À la Une
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {getCategoryName(article.category)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(article.date)}</span>
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-sakina-blue mb-3 group-hover:text-sakina-gold transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <button className="text-sakina-blue font-semibold hover:text-sakina-gold transition-colors duration-300 flex items-center group">
                      Lire la suite
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Toutes les Actualités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sakina-blue mb-12 text-center">
            {selectedCategory === 'all' ? 'Toutes les Actualités' : `Actualités - ${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Aucune actualité trouvée pour cette recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {getCategoryName(article.category)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-sakina-blue mb-3 group-hover:text-sakina-gold transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <button className="text-sakina-blue font-semibold hover:text-sakina-gold transition-colors duration-300 flex items-center text-sm group">
                      Lire plus
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-20 bg-sakina-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Restez informé
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
              du Collège Sakina directement dans votre boîte mail.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-sakina-gold focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-sakina-gold text-sakina-blue px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors duration-300 whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
            
            <p className="text-sm text-blue-300 mt-4">
              Nous respectons votre vie privée. Désabonnement possible à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* Section Archives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-sakina-blue mb-4">
              Archives des Actualités
            </h3>
            <p className="text-gray-600 mb-8">
              Consultez nos actualités des années précédentes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { year: '2024', count: 12, highlights: ['Excellents résultats BFEM', 'Concours coranique', 'Nouvelle année scolaire'] },
              { year: '2023', count: 18, highlights: ['Prix excellence académique', 'Journées culturelles', 'Formation enseignants'] },
              { year: '2022', count: 15, highlights: ['Inauguration nouvelle aile', 'Concours sciences', 'Ramadan solidaire'] },
              { year: '2021', count: 13, highlights: ['Adaptation COVID', 'Cours en ligne', 'Remise diplômes'] },
              { year: '2020', count: 10, highlights: ['Continuité pédagogique', 'Solidarité communautaire', 'Innovation numérique'] },
              { year: '2019', count: 16, highlights: ['10 ans établissement', 'Partenariats internationaux', 'Olympiades'] }
            ].map((archive) => (
              <div
                key={archive.year}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <h4 className="text-3xl font-bold text-sakina-blue mb-2">
                    {archive.year}
                  </h4>
                  <p className="text-gray-600">
                    {archive.count} actualités publiées
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Temps forts de l'année :
                  </p>
                  {archive.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-sakina-gold rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleArchiveClick(archive.year)}
                  className="w-full bg-sakina-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 group-hover:shadow-md"
                >
                  Consulter {archive.year}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

