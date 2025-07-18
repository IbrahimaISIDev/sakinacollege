import React from 'react';
import { ArrowRight, BookOpen, Users, Award, Star, CheckCircle, Phone, Mail } from 'lucide-react';
import heroImage from '../assets/images/hero-image.jpg';
import studentsImage from '../assets/images/students-classroom.jpg';
import islamicEducationImage from '../assets/images/islamic-education.jpg';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-sakina-green" />,
      title: "Excellence Académique",
      description: "Programme conforme au système éducatif sénégalais avec un encadrement de qualité"
    },
    {
      icon: <Users className="w-8 h-8 text-sakina-gold" />,
      title: "Éducation Islamique",
      description: "Formation morale et spirituelle basée sur les valeurs islamiques authentiques"
    },
    {
      icon: <Award className="w-8 h-8 text-sakina-red" />,
      title: "Encadrement Personnalisé",
      description: "Suivi individuel de chaque élève pour garantir sa réussite scolaire"
    }
  ];

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "200+", label: "Élèves formés" },
    { number: "95%", label: "Taux de réussite" },
    { number: "12", label: "Enseignants qualifiés" }
  ];

  const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Parent d'élève",
      content: "Le Collège Sakina a transformé l'éducation de ma fille. L'équilibre entre excellence académique et valeurs islamiques est remarquable.",
      rating: 5
    },
    {
      name: "Moussa Sow",
      role: "Ancien élève",
      content: "Grâce à la formation reçue au Collège Sakina, j'ai pu intégrer le lycée de mon choix avec d'excellents résultats.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-br from-sakina-blue via-blue-800 to-sakina-blue min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Collège Privé Musulman
                  <span className="block text-sakina-gold">Sakina</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Excellence académique et éducation morale fondée sur l'Islam
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-blue-200 leading-relaxed">
                  Situé au cœur de Dakar, le Collège Sakina offre une éducation de qualité 
                  alliant programme national sénégalais et valeurs islamiques authentiques.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#inscriptions"
                    className="bg-sakina-gold text-sakina-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    S'inscrire maintenant
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#apropos"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sakina-blue transition-all duration-300 flex items-center justify-center"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src={studentsImage}
                  alt="Étudiants du Collège Sakina"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sakina-gold rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-sakina-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sakina-blue">95% de réussite</p>
                      <p className="text-sm text-gray-600">Taux de réussite au BFEM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-sakina-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Caractéristiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Pourquoi choisir le Collège Sakina ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre approche unique combine excellence académique et formation spirituelle 
              pour préparer nos élèves à un avenir brillant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-sakina-blue mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À propos rapide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={islamicEducationImage}
                alt="Éducation islamique au Collège Sakina"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-sakina-blue">
                Une éducation complète et équilibrée
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Le Collège Privé Musulman Sakina est un établissement d'excellence qui forme 
                les leaders de demain en alliant rigueur académique et valeurs morales islamiques.
              </p>
              
              <div className="space-y-4">
                {[
                  { text: "Programme conforme au système éducatif sénégalais", color: "text-sakina-green" },
                  { text: "Enseignement de la langue arabe et du Coran", color: "text-sakina-gold" },
                  { text: "Encadrement par des enseignants qualifiés", color: "text-sakina-red" },
                  { text: "Suivi personnalisé de chaque élève", color: "text-sakina-green" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className={`w-6 h-6 ${item.color} flex-shrink-0`} />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="#apropos"
                className="inline-flex items-center text-sakina-blue font-semibold hover:text-sakina-gold transition-colors duration-300 group"
              >
                En savoir plus sur notre histoire
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Ce que disent nos familles
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de parents et d'anciens élèves
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sakina-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-sakina-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-sakina-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à rejoindre notre communauté ?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Offrez à votre enfant une éducation d'excellence dans un environnement 
            respectueux des valeurs islamiques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inscriptions"
              className="bg-sakina-gold text-sakina-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Commencer l'inscription
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sakina-blue transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

