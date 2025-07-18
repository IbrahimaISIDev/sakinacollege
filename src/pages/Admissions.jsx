import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Calendar, Users, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    birthDate: '',
    birthPlace: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    previousSchool: '',
    level: '',
    message: ''
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
    // Simulation de soumission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const requirements = [
    "Acte de naissance de l'élève",
    "Certificat de scolarité ou bulletin de notes",
    "Certificat médical",
    "4 photos d'identité de l'élève",
    "Photocopie de la carte d'identité du parent/tuteur",
    "Justificatif de domicile",
    "Certificat de vaccination à jour"
  ];

  const steps = [
    {
      number: "01",
      title: "Pré-inscription en ligne",
      description: "Remplissez le formulaire de pré-inscription ci-dessous"
    },
    {
      number: "02",
      title: "Entretien pédagogique",
      description: "Rendez-vous avec l'équipe pédagogique pour évaluer le niveau"
    },
    {
      number: "03",
      title: "Constitution du dossier",
      description: "Remise des documents requis et finalisation de l'inscription"
    },
    {
      number: "04",
      title: "Confirmation",
      description: "Validation définitive et intégration dans la classe"
    }
  ];

  const fees = [
    { level: "6ème", registration: "50 000", monthly: "45 000", annual: "540 000" },
    { level: "5ème", registration: "50 000", monthly: "45 000", annual: "540 000" },
    { level: "4ème", registration: "55 000", monthly: "50 000", annual: "600 000" },
    { level: "3ème", registration: "55 000", monthly: "50 000", annual: "600 000" }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-br from-sakina-blue to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Inscriptions
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Rejoignez notre communauté éducative et offrez à votre enfant 
              une formation d'excellence
            </p>
          </div>
        </div>
      </section>

      {/* Section Processus d'inscription */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Processus d'Inscription
            </h2>
            <p className="text-xl text-gray-600">
              4 étapes simples pour intégrer le Collège Sakina
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-sakina-gold text-sakina-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-sakina-blue mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formulaire de pré-inscription */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-sakina-blue mb-4">
                Formulaire de Pré-inscription
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez ce formulaire pour commencer le processus d'inscription
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">Pré-inscription envoyée avec succès !</p>
                  <p className="text-sm">Nous vous contacterons dans les 48h pour la suite du processus.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet de l'élève *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                    placeholder="Prénom et nom de l'élève"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date de naissance *
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lieu de naissance *
                  </label>
                  <input
                    type="text"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                    placeholder="Ville, Pays"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Classe demandée *
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionner une classe</option>
                    <option value="6eme">6ème</option>
                    <option value="5eme">5ème</option>
                    <option value="4eme">4ème</option>
                    <option value="3eme">3ème</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom du parent/tuteur *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                    placeholder="Nom complet du parent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                  placeholder="email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                  placeholder="Adresse complète de résidence"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  École précédente
                </label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                  placeholder="Nom de l'établissement précédent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sakina-blue focus:border-transparent transition-all duration-300"
                  placeholder="Informations complémentaires, questions particulières..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-sakina-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Envoyer la pré-inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section Documents requis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-sakina-blue mb-8">
                Documents Requis
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-sakina-blue hover:text-white transition-all duration-300 group"
                  >
                    <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" />
                    <span className="font-medium">{requirement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-sakina-gold/10 border border-sakina-gold rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sakina-blue mb-2">Important</p>
                    <p className="text-gray-700 text-sm">
                      Tous les documents doivent être fournis en original et en photocopie. 
                      Les documents en langue étrangère doivent être traduits et légalisés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sakina-blue mb-6">
                Télécharger les Formulaires
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-sakina-blue rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Formulaire d'inscription</p>
                        <p className="text-sm text-gray-600">Document PDF à remplir</p>
                      </div>
                    </div>
                    <button className="bg-sakina-gold text-sakina-blue px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Télécharger</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-sakina-blue rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Fiche médicale</p>
                        <p className="text-sm text-gray-600">À faire remplir par le médecin</p>
                      </div>
                    </div>
                    <button className="bg-sakina-gold text-sakina-blue px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Télécharger</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-sakina-blue text-white p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Besoin d'aide ?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-sakina-gold" />
                    <span>+221 77 532 29 28</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-sakina-gold" />
                    <span>inscriptions@sakinacollege.sn</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sakina-gold mt-1" />
                    <span>HLM2, Villa n°664<br />Quartier HLM, Dakar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Frais de scolarité */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sakina-blue mb-4">
              Frais de Scolarité
            </h2>
            <p className="text-xl text-gray-600">
              Tarifs transparents pour l'année scolaire 2025-2026
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-sakina-blue text-white p-6">
                <div className="grid grid-cols-4 gap-4 font-semibold">
                  <div>Niveau</div>
                  <div className="text-center">Inscription</div>
                  <div className="text-center">Mensualité</div>
                  <div className="text-center">Annuel</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {fees.map((fee, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-300">
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div className="font-semibold text-sakina-blue">{fee.level}</div>
                      <div className="text-center">{fee.registration} FCFA</div>
                      <div className="text-center">{fee.monthly} FCFA</div>
                      <div className="text-center font-semibold text-sakina-gold">{fee.annual} FCFA</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-sakina-blue mb-3">Facilités de paiement</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Paiement en 3 tranches possibles</li>
                  <li>• Réduction de 5% pour paiement annuel</li>
                  <li>• Bourses d'excellence disponibles</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-sakina-blue mb-3">Inclus dans les frais</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manuels scolaires et fournitures</li>
                  <li>• Activités parascolaires</li>
                  <li>• Assurance scolaire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-sakina-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à inscrire votre enfant ?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté éducative et offrez à votre enfant 
            les meilleures chances de réussite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-sakina-gold text-sakina-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Prendre rendez-vous
            </a>
            <a
              href="tel:+221775322928"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sakina-blue transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

