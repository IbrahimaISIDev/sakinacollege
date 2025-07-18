import React from 'react';
import { Heart, Target, Users, BookOpen, Award, Star, CheckCircle } from 'lucide-react';
import studentsGroupImage from '../assets/images/students-group.jpg';
import islamicEducationImage from '../assets/images/islamic-education.jpg';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-sakina-gold" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous les aspects de l'éducation, académique et morale."
    },
    {
      icon: <Target className="w-8 h-8 text-sakina-gold" />,
      title: "Intégrité",
      description: "Nous cultivons l'honnêteté, la sincérité et la droiture selon les enseignements islamiques."
    },
    {
      icon: <Users className="w-8 h-8 text-sakina-gold" />,
      title: "Communauté",
      description: "Nous créons un environnement familial où chaque élève se sent valorisé et soutenu."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-sakina-gold" />,
      title: "Savoir",
      description: "Nous encourageons la quête du savoir comme un devoir religieux et civique."
    }
  ];

  const objectives = [
    "Former des citoyens responsables et engagés",
    "Développer l'excellence académique et spirituelle",
    "Cultiver les valeurs islamiques authentiques",
    "Préparer les élèves aux défis du monde moderne",
    "Favoriser l'épanouissement personnel de chaque élève",
    "Créer des leaders éthiques pour la société"
  ];

  const timeline = [
    {
      year: "2010",
      title: "Fondation du Collège",
      description: "Création du Collège Privé Musulman Sakina avec une vision claire d'excellence éducative."
    },
    {
      year: "2015",
      title: "Expansion des programmes",
      description: "Développement de programmes enrichis en langue arabe et éducation islamique."
    },
    {
      year: "2020",
      title: "Modernisation",
      description: "Intégration des technologies modernes et amélioration des infrastructures."
    },
    {
      year: "2025",
      title: "Excellence reconnue",
      description: "Reconnaissance comme établissement de référence avec 95% de taux de réussite."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-br from-sakina-blue to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              À propos du Collège Sakina
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Une institution dédiée à l'excellence académique et à l'éducation morale 
              fondée sur les valeurs islamiques authentiques
            </p>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-sakina-blue">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Le Collège Privé Musulman Sakina a été fondé en 2010 avec une mission claire : 
                offrir une éducation d'excellence qui allie rigueur académique et formation 
                spirituelle islamique. Situé dans le quartier HLM de Dakar, notre établissement 
                s'est rapidement imposé comme une référence en matière d'éducation privée au Sénégal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis notre création, nous avons formé plus de 200 élèves qui excellent 
                aujourd'hui dans leurs parcours scolaires et professionnels. Notre approche 
                pédagogique unique combine le programme national sénégalais avec un enseignement 
                approfondi de la langue arabe et des sciences islamiques.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-sakina-gold rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-sakina-blue" />
                </div>
                <div>
                  <p className="font-semibold text-sakina-blue text-lg">15 années d'excellence</p>
                  <p className="text-gray-600">Au service de l'éducation islamique</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={studentsGroupImage}
                alt="Groupe d'étudiants du Collège Sakina"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission et Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-sakina-blue rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-sakina-gold" />
              </div>
              <h3 className="text-2xl font-bold text-sakina-blue mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Sakina Collège est né à l'initiative d'hommes et de femmes voulant participer 
                activement au développement de leur pays par le biais de la formation de jeunes 
                citoyens responsables, équilibrés et ambitieux devant intervenir dans les plus 
                hautes sphères de décision.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-sakina-gold rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-sakina-blue" />
              </div>
              <h3 className="text-2xl font-bold text-sakina-blue mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Être l'établissement de référence en matière d'éducation islamique au Sénégal, 
                reconnu pour son excellence pédagogique, ses valeurs morales et sa contribution 
                à la formation de citoyens responsables et engagés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action éducative et façonnent 
              l'identité de notre établissement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-sakina-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={islamicEducationImage}
                alt="Éducation islamique"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-sakina-blue">
                Nos Objectifs Pédagogiques
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous nous engageons à atteindre des objectifs ambitieux pour garantir 
                une formation complète et équilibrée de nos élèves.
              </p>
              
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de notre développement
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sakina-gold"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-sakina-gold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-sakina-blue mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-sakina-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-sakina-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez notre famille éducative
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons accompagner votre enfant vers l'excellence 
            académique et spirituelle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#programmes"
              className="bg-sakina-gold text-sakina-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Découvrir nos programmes
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sakina-blue transition-all duration-300"
            >
              Nous rencontrer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

