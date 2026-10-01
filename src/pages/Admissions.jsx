import { useState } from 'react';
import { FileText, Download, CheckCircle, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import FormField from '../components/FormField';
import { college, telHref } from '../data/college';

const initialFormData = {
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

const downloads = [
  {
    title: "Formulaire d'inscription",
    description: "Document PDF à remplir",
    href: "/forms/formulaire-inscription-complet.pdf",
    filename: "Formulaire_Inscription_Complet_Sakina.pdf"
  },
  {
    title: "Fiche médicale",
    description: "À faire remplir par le médecin",
    href: "/forms/fiche-medicale-complete.pdf",
    filename: "Fiche_Medicale_Complete_Sakina.pdf"
  }
];

const Admissions = () => {
  const [formData, setFormData] = useState(initialFormData);
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
    // TODO : simulation, aucune donnée n'est transmise. Brancher un service d'envoi avant la mise en ligne.
    setIsSubmitted(true);
    setFormData(initialFormData);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const fieldProps = (id) => ({ id, value: formData[id], onChange: handleInputChange });

  return (
    <div className="min-h-screen">
      <PageHero
        title="Inscriptions"
        subtitle="Rejoignez notre communauté éducative et offrez à votre enfant une formation d'excellence"
      />

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

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <li
                key={step.number}
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
              </li>
            ))}
          </ol>
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

            <div role="status" aria-live="polite">
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Pré-inscription envoyée avec succès !</p>
                    <p className="text-sm">Nous vous contacterons dans les 48h pour la suite du processus.</p>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-6">
              <p className="text-sm text-gray-500">Les champs marqués d'un * sont obligatoires.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField {...fieldProps('studentName')} label="Nom complet de l'élève" required placeholder="Prénom et nom de l'élève" autoComplete="off" />
                <FormField {...fieldProps('birthDate')} label="Date de naissance" type="date" required />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField {...fieldProps('birthPlace')} label="Lieu de naissance" required placeholder="Ville, Pays" />
                <FormField {...fieldProps('level')} as="select" label="Classe demandée" required>
                  <option value="">Sélectionner une classe</option>
                  <option value="6eme">6ème</option>
                  <option value="5eme">5ème</option>
                  <option value="4eme">4ème</option>
                  <option value="3eme">3ème</option>
                </FormField>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField {...fieldProps('parentName')} label="Nom du parent/tuteur" required placeholder="Nom complet du parent" autoComplete="name" />
                <FormField {...fieldProps('parentPhone')} label="Téléphone" type="tel" required placeholder="+221 XX XXX XX XX" autoComplete="tel" />
              </div>

              <FormField {...fieldProps('parentEmail')} label="Email" type="email" required placeholder="email@exemple.com" autoComplete="email" />
              <FormField {...fieldProps('address')} as="textarea" label="Adresse complète" required rows="3" placeholder="Adresse complète de résidence" autoComplete="street-address" />
              <FormField {...fieldProps('previousSchool')} label="École précédente" placeholder="Nom de l'établissement précédent" />
              <FormField {...fieldProps('message')} as="textarea" label="Message (optionnel)" rows="4" placeholder="Informations complémentaires, questions particulières..." />

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
              <ul className="space-y-4">
                {requirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-sakina-blue hover:text-white transition-all duration-300 group"
                  >
                    <CheckCircle className="w-6 h-6 text-sakina-gold flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="font-medium">{requirement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-sakina-gold/10 border border-sakina-gold rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-sakina-gold-dark flex-shrink-0 mt-1" aria-hidden="true" />
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
                {downloads.map((doc) => (
                  <div key={doc.href} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sakina-blue rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{doc.title}</p>
                          <p className="text-sm text-gray-600">{doc.description}</p>
                        </div>
                      </div>
                      <a
                        href={doc.href}
                        download={doc.filename}
                        className="bg-sakina-gold text-sakina-blue px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        <span>Télécharger<span className="sr-only"> : {doc.title} (PDF)</span></span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-sakina-blue text-white p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Besoin d'aide ?</h4>
                <div className="space-y-3">
                  <a href={telHref(college.phones.main)} className="flex items-center space-x-3 hover:text-sakina-gold">
                    <Phone className="w-5 h-5 text-sakina-gold" aria-hidden="true" />
                    <span>{college.phones.main}</span>
                  </a>
                  <a href={`mailto:${college.emails.admissions}`} className="flex items-center space-x-3 hover:text-sakina-gold">
                    <Mail className="w-5 h-5 text-sakina-gold" aria-hidden="true" />
                    <span className="break-all">{college.emails.admissions}</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sakina-gold mt-1" aria-hidden="true" />
                    <span>{college.address.street}<br />{college.address.district}, Dakar</span>
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
            {/* Tableau (tablette et desktop) */}
            <table className="hidden md:table w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <caption className="sr-only">Frais de scolarité par niveau, en FCFA</caption>
              <thead className="bg-sakina-blue text-white">
                <tr>
                  <th scope="col" className="p-6 text-left">Niveau</th>
                  <th scope="col" className="p-6">Inscription</th>
                  <th scope="col" className="p-6">Mensualité</th>
                  <th scope="col" className="p-6">Annuel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees.map((fee) => (
                  <tr key={fee.level} className="hover:bg-gray-50 transition-colors duration-300">
                    <th scope="row" className="p-6 text-left font-semibold text-sakina-blue">{fee.level}</th>
                    <td className="p-6 text-center">{fee.registration} FCFA</td>
                    <td className="p-6 text-center">{fee.monthly} FCFA</td>
                    <td className="p-6 text-center font-semibold text-sakina-gold-dark">{fee.annual} FCFA</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cartes (mobile) */}
            <div className="md:hidden space-y-4">
              {fees.map((fee) => (
                <div key={fee.level} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <h3 className="bg-sakina-blue text-white px-6 py-3 font-semibold">{fee.level}</h3>
                  <dl className="divide-y divide-gray-100 px-6">
                    {[
                      ['Inscription', fee.registration],
                      ['Mensualité', fee.monthly],
                    ].map(([label, amount]) => (
                      <div key={label} className="flex justify-between py-3">
                        <dt className="text-gray-600">{label}</dt>
                        <dd>{amount} FCFA</dd>
                      </div>
                    ))}
                    <div className="flex justify-between py-3 font-semibold">
                      <dt className="text-gray-600">Annuel</dt>
                      <dd className="text-sakina-gold-dark">{fee.annual} FCFA</dd>
                    </div>
                  </dl>
                </div>
              ))}
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

      <CtaSection
        title="Prêt à inscrire votre enfant ?"
        text="Rejoignez notre communauté éducative et offrez à votre enfant les meilleures chances de réussite."
        primary={{ label: 'Prendre rendez-vous', href: '#contact' }}
        secondary={{
          label: 'Appeler maintenant',
          href: telHref(college.phones.main),
          icon: <Phone className="w-5 h-5 mr-2" aria-hidden="true" />,
        }}
      />
    </div>
  );
};

export default Admissions;
