import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import studentsImage from '../assets/images/students-classroom.jpg';
import arabicCalligraphyImage from '../assets/images/arabic-calligraphy.jpg';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('6eme');

  const programs = {
    '6eme': {
      title: 'Classe de 6ème',
      description: 'Première année du collège, transition en douceur du primaire vers le secondaire',
      subjects: [
        'Français', 'Mathématiques', 'Histoire-Géographie', 'Sciences de la Vie et de la Terre',
        'Anglais', 'Éducation Physique et Sportive', 'Arts Plastiques', 'Musique',
        'Langue Arabe', 'Éducation Islamique', 'Mémorisation du Coran'
      ],
      schedule: '7h30 - 16h30',
      students: '25 élèves max',
      objectives: [
        'Maîtriser les fondamentaux académiques',
        'Développer l\'autonomie et la méthode de travail',
        'Renforcer les bases en langue arabe',
        'Mémoriser les sourates courtes du Coran'
      ]
    },
    '5eme': {
      title: 'Classe de 5ème',
      description: 'Approfondissement des connaissances et développement de l\'esprit critique',
      subjects: [
        'Français', 'Mathématiques', 'Histoire-Géographie', 'Sciences de la Vie et de la Terre',
        'Physique-Chimie', 'Anglais', 'Éducation Physique et Sportive', 'Technologie',
        'Langue Arabe', 'Éducation Islamique', 'Mémorisation du Coran', 'Fiqh'
      ],
      schedule: '7h30 - 16h30',
      students: '25 élèves max',
      objectives: [
        'Consolider les acquis fondamentaux',
        'Développer l\'expression écrite et orale',
        'Approfondir la grammaire arabe',
        'Étudier la biographie du Prophète (PSL)'
      ]
    },
    '4eme': {
      title: 'Classe de 4ème',
      description: 'Préparation progressive aux examens et spécialisation des apprentissages',
      subjects: [
        'Français', 'Mathématiques', 'Histoire-Géographie', 'Sciences de la Vie et de la Terre',
        'Physique-Chimie', 'Anglais', 'Éducation Physique et Sportive', 'Technologie',
        'Langue Arabe', 'Éducation Islamique', 'Mémorisation du Coran', 'Hadith'
      ],
      schedule: '7h30 - 17h00',
      students: '25 élèves max',
      objectives: [
        'Préparer aux épreuves du BFEM',
        'Maîtriser les méthodes de dissertation',
        'Perfectionner la lecture du Coran',
        'Étudier les hadiths authentiques'
      ]
    },
    '3eme': {
      title: 'Classe de 3ème',
      description: 'Année d\'examen et de préparation à l\'orientation post-collège',
      subjects: [
        'Français', 'Mathématiques', 'Histoire-Géographie', 'Sciences de la Vie et de la Terre',
        'Physique-Chimie', 'Anglais', 'Éducation Physique et Sportive', 'Technologie',
        'Langue Arabe', 'Éducation Islamique', 'Mémorisation du Coran', 'Tafsir'
      ],
      schedule: '7h30 - 17h00',
      students: '20 élèves max',
      objectives: [
        'Réussir l\'examen du BFEM',
        'Préparer l\'orientation au lycée',
        'Maîtriser la récitation coranique',
        'Comprendre les bases du Tafsir'
      ]
    }
  };

  const islamicPrograms = [
    {
      title: 'Mémorisation du Coran',
      description: 'Programme progressif de mémorisation du Saint Coran avec Tajwid',
      icon: <BookOpen className="w-8 h-8 text-sakina-green" />,
      details: [
        'Mémorisation progressive par sourates',
        'Apprentissage des règles de Tajwid',
        'Révision quotidienne encadrée',
        'Concours annuel de récitation'
      ]
    },
    {
      title: 'Tawhid & Éducation Islamique',
      description: 'Enseignement des fondements de la foi et des valeurs islamiques',
      icon: <Award className="w-8 h-8 text-sakina-red" />,
      details: [
        'Étude des piliers de l\'Islam',
        'Bon comportement (Akhlaq)',
        'Invocations quotidiennes (Adhkar)',
        'Respect de l\'autre et de l\'environnement'
      ]
    },
    {
      title: 'Études de Versets',
      description: 'Analyse approfondie des versets coraniques et leur interprétation',
      icon: <Users className="w-8 h-8 text-sakina-gold" />,
      details: [
        'Tafsir des versets sélectionnés',
        'Contexte de révélation',
        'Enseignements pratiques',
        'Application dans la vie quotidienne'
      ]
    }
  ];

  const schedule = [
    { time: '7h30 - 8h00', activity: 'Accueil et préparation' },
    { time: '8h00 - 8h30', activity: 'Récitation coranique matinale' },
    { time: '8h30 - 12h00', activity: 'Cours académiques (4 séances)' },
    { time: '12h00 - 13h00', activity: 'Pause déjeuner et prière Dhuhr' },
    { time: '13h00 - 15h30', activity: 'Cours académiques (3 séances)' },
    { time: '15h30 - 16h00', activity: 'Pause et goûter' },
    { time: '16h00 - 16h30', activity: 'Cours d\'arabe ou éducation islamique' },
    { time: '16h30 - 17h00', activity: 'Étude dirigée et révisions' }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-br from-sakina-blue to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Nos Programmes Éducatifs
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Un cursus complet alliant excellence académique et formation spirituelle 
              de la 6ème à la 3ème
            </p>
          </div>
        </div>
      </section>

      {/* Section Programmes par niveau */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Programmes par Niveau
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez le contenu détaillé de chaque classe
            </p>
          </div>

          {/* Onglets */}
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2">
            {Object.keys(programs).map((level) => (
              <button
                key={level}
                onClick={() => setActiveTab(level)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === level
                    ? 'bg-sakina-blue text-white shadow-lg'
                    : 'text-gray-600 hover:text-sakina-blue'
                }`}
              >
                {programs[level].title}
              </button>
            ))}
          </div>

          {/* Contenu de l'onglet actif */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-sakina-blue mb-4">
                  {programs[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {programs[activeTab].description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Clock className="w-8 h-8 text-sakina-gold mx-auto mb-3" />
                  <p className="font-semibold text-sakina-blue">Horaires</p>
                  <p className="text-gray-600">{programs[activeTab].schedule}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-sakina-gold mx-auto mb-3" />
                  <p className="font-semibold text-sakina-blue">Effectif</p>
                  <p className="text-gray-600">{programs[activeTab].students}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <BookOpen className="w-8 h-8 text-sakina-gold mx-auto mb-3" />
                  <p className="font-semibold text-sakina-blue">Matières</p>
                  <p className="text-gray-600">{programs[activeTab].subjects.length} matières</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sakina-blue mb-4">
                  Objectifs pédagogiques
                </h4>
                <div className="space-y-3">
                  {programs[activeTab].objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-sakina-blue mb-4">
                  Matières enseignées
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {programs[activeTab].subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 rounded-lg text-center text-sm font-medium text-gray-700 hover:bg-sakina-blue hover:text-white transition-all duration-300"
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sakina-blue text-white p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-4">
                  Taux de réussite
                </h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-sakina-gold mb-2">95%</div>
                  <p className="text-blue-200">de nos élèves réussissent le BFEM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Programmes Islamiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Formation Islamique
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Un programme complet d'éducation spirituelle et morale
            </p>
            <div className="inline-block bg-sakina-blue text-white px-6 py-2 rounded-full">
              <span className="text-sm font-medium">"Un enseignement de qualité dans le respect des valeurs islamiques"</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {islamicPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-sakina-blue mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-sakina-gold flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={arabicCalligraphyImage}
                alt="Calligraphie arabe"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-sakina-blue">
                L'excellence dans la tradition islamique
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre programme d'éducation islamique s'appuie sur les sources authentiques 
                de l'Islam : le Coran et la Sunna. Nous formons nos élèves à devenir des 
                musulmans équilibrés, capables de concilier foi et raison, tradition et modernité.
              </p>
              <div className="space-y-4">
                {[
                  "Mémorisation progressive du Saint Coran",
                  "Apprentissage de la langue arabe classique",
                  "Étude des sciences islamiques fondamentales",
                  "Formation aux valeurs morales et éthiques"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section Programme Spécial - Intégrée harmonieusement */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-sakina-blue mb-4">
                Activités Complémentaires
              </h3>
              <p className="text-gray-600">
                Pour un développement équilibré de nos élèves
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🥋</div>
                <h4 className="font-semibold text-sakina-blue mb-2">Taekwondo</h4>
                <p className="text-sm text-gray-600">Discipline et développement physique</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">⚽</div>
                <h4 className="font-semibold text-sakina-blue mb-2">Football</h4>
                <p className="text-sm text-gray-600">Esprit d'équipe et fair-play</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-semibold text-sakina-blue mb-2">Informatique</h4>
                <p className="text-sm text-gray-600">Maîtrise des nouvelles technologies</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🌟</div>
                <h4 className="font-semibold text-sakina-blue mb-2">Développement Personnel</h4>
                <p className="text-sm text-gray-600">Épanouissement selon l'Islam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Emploi du temps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Emploi du Temps Type
            </h2>
            <p className="text-xl text-gray-600">
              Une journée équilibrée entre apprentissages académiques et formation spirituelle
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-sakina-blue hover:text-white transition-all duration-300 group"
                >
                  <div className="w-24 text-center">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-sakina-gold" />
                    <span className="text-sm font-semibold">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-sakina-blue text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Points forts de notre pédagogie</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Classes à effectif réduit</p>
                      <p className="text-blue-200 text-sm">Maximum 25 élèves par classe pour un suivi personnalisé</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Pédagogie différenciée</p>
                      <p className="text-blue-200 text-sm">Adaptation aux rythmes et besoins de chaque élève</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Évaluation continue</p>
                      <p className="text-blue-200 text-sm">Suivi régulier des progrès et accompagnement personnalisé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-sakina-blue mb-4">
                  Activités complémentaires
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Club de lecture',
                    'Concours coranique',
                    'Théâtre en arabe',
                    'Sport et santé',
                    'Sorties éducatives',
                    'Projets solidaires'
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 rounded-lg text-center text-sm font-medium text-gray-700"
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-sakina-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Intéressé par nos programmes ?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons accompagner votre enfant vers la réussite 
            académique et spirituelle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inscriptions"
              className="bg-sakina-gold text-sakina-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Commencer l'inscription
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sakina-blue transition-all duration-300"
            >
              Demander plus d'informations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

