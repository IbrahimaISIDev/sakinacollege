import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Calendar, Users, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestType: 'information'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        requestType: 'information'
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-sakina-green" />,
      title: "Adresse",
      details: [
        "HLM2, Villa n°664",
        "(à côté de Auchan HLM)",
        "Dakar, Sénégal"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-sakina-red" />,
      title: "Téléphones",
      details: [
        "+221 77 532 29 28",
        "+221 33 848 98 33",
        "+221 77 681 30 88",
        "+221 77 328 04 11"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-sakina-gold" />,
      title: "Emails",
      details: [
        "collegesakina@gmail.com",
        "contact@sakinacollege.sn"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-sakina-green" />,
      title: "Horaires",
      details: [
        "Lundi - Vendredi: 7h30 - 16h30",
        "Samedi: 8h00 - 12h00",
        "Dimanche: Fermé"
      ]
    }
  ];

  const departments = [
    {
      name: "Direction Générale",
      email: "direction@sakinacollege.sn",
      phone: "+221 77 532 29 28"
    },
    {
      name: "Admissions & Inscriptions",
      email: "admissions@sakinacollege.sn",
      phone: "+221 33 848 98 33"
    },
    {
      name: "Vie Scolaire",
      email: "viesco@sakinacollege.sn",
      phone: "+221 77 681 30 88"
    },
    {
      name: "Comptabilité",
      email: "comptabilite@sakinacollege.sn",
      phone: "+221 77 328 04 11"
    }
  ];

  const followUpItems = [
    {
      icon: <Users className="w-8 h-8 text-sakina-blue" />,
      title: "Corps professoral compétent",
      description: "Enseignants qualifiés et expérimentés"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-sakina-blue" />,
      title: "1 bulletin par programme",
      description: "(sénégalais et religieux)"
    },
    {
      icon: <Calendar className="w-8 h-8 text-sakina-blue" />,
      title: "Prière Zhuhr et 'Asr en groupe",
      description: "Moments spirituels collectifs"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-sakina-blue" />,
      title: "Prière du vendredi assurée",
      description: "Rassemblement hebdomadaire"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-sakina-blue" />,
      title: "Rappel après chaque prière de Zhuhr",
      description: "Enseignements spirituels quotidiens"
    }
  ];

  const faqItems = [
    {
      question: "Quels sont les frais de scolarité ?",
      answer: "Les frais varient selon le niveau. Contactez-nous pour obtenir le détail des tarifs pour chaque classe."
    },
    {
      question: "Y a-t-il un service de transport ?",
      answer: "Oui, nous proposons un service de transport en option pour faciliter les déplacements des élèves."
    },
    {
      question: "La cantine est-elle disponible ?",
      answer: "Oui, nous proposons un service de cantine en option avec des repas équilibrés et halal."
    },
    {
      question: "Quand ont lieu les inscriptions ?",
      answer: "Les inscriptions sont ouvertes de mai à septembre. Nous recommandons de s'inscrire tôt pour garantir une place."
    }
  ];

  return (
    <div id="contact" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sakina-blue to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre démarche d'inscription
          </p>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-blue mb-4">
              Nos Coordonnées
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Plusieurs moyens pour nous joindre et obtenir les informations dont vous avez besoin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-sakina-blue mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sakina-blue mb-4">
                Envoyez-nous un Message
              </h2>
              <p className="text-gray-600 text-lg">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sakina-blue focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sakina-blue focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sakina-blue focus:border-transparent"
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de demande
                      </label>
                      <select
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sakina-blue focus:border-transparent"
                      >
                        <option value="information">Demande d'information</option>
                        <option value="inscription">Inscription</option>
                        <option value="visite">Visite de l'établissement</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sakina-blue focus:border-transparent"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sakina-blue focus:border-transparent"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-sakina-gold text-sakina-blue px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
                    >
                      <Send size={20} />
                      <span>Envoyer le message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Départements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-blue mb-4">
              Nos Départements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Contactez directement le département concerné pour une réponse plus rapide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-sakina-blue mb-4">
                  {dept.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-sakina-gold" />
                    <a href={`mailto:${dept.email}`} className="text-sm text-gray-600 hover:text-sakina-gold transition-colors duration-300">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-sakina-gold" />
                    <a href={`tel:${dept.phone}`} className="text-sm text-gray-600 hover:text-sakina-gold transition-colors duration-300">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suivi Pédagogique */}
      <section className="py-20 bg-gradient-to-r from-sakina-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Suivi Pédagogique
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour la réussite de nos élèves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {followUpItems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 rounded-full p-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Services Optionnels</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <p className="font-semibold">Cantine</p>
                  <p className="text-sm text-blue-100">En option</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🚌</span>
                  </div>
                  <p className="font-semibold">Transport</p>
                  <p className="text-sm text-blue-100">En option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-blue mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trouvez rapidement les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-sakina-blue mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-blue mb-4">
              Notre Localisation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Venez nous rendre visite dans nos locaux modernes et accueillants
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-sakina-blue mb-6">
                  Adresse Complète
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-sakina-gold mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">HLM2, Villa n°664</p>
                      <p className="text-gray-600">(à côté de Auchan HLM)</p>
                      <p className="text-gray-600">Dakar, Sénégal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-sakina-gold" />
                    <p className="text-gray-600">+221 77 532 29 28</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-sakina-gold" />
                    <p className="text-gray-600">collegesakina@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-6 h-6 text-sakina-gold" />
                    <a href="https://facebook.com/sakinacollege" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sakina-gold transition-colors duration-300">
                      facebook.com/sakinacollege
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-64 lg:h-auto flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Carte Interactive</p>
                  <p className="text-sm">Intégration Google Maps à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

