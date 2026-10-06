import { useState } from 'react';
import { FileText, Download, CheckCircle, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import FormField from '../components/FormField';
import { SendButtons, SendStatus } from '../components/SendChoice';
import { buildMessage, deliver, formatDateFr } from '../lib/delivery';
import UsefulDocuments from '../components/UsefulDocuments';
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

const LEVEL_LABELS = { '6eme': '6ème', '5eme': '5ème', '4eme': '4ème', '3eme': '3ème' };

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
  const [sentChannel, setSentChannel] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Le formulaire est validé par le navigateur, puis la demande est ouverte dans le canal choisi.
  // Les champs restent remplis : le parent peut revenir et choisir l'autre canal si besoin.
  const handleSubmit = (e) => {
    e.preventDefault();
    const channel = e.nativeEvent.submitter?.value === 'email' ? 'email' : 'whatsapp';
    const body = buildMessage('Pré-inscription - Collège Sakina', [
      [
        ["Nom de l'élève", formData.studentName],
        ['Date de naissance', formatDateFr(formData.birthDate)],
        ['Lieu de naissance', formData.birthPlace],
        ['Classe demandée', LEVEL_LABELS[formData.level]],
        ['École précédente', formData.previousSchool],
      ],
      [
        ['Parent / tuteur', formData.parentName],
        ['Téléphone', formData.parentPhone],
        ['E-mail', formData.parentEmail],
        ['Adresse', formData.address],
      ],
      [['Message', formData.message]],
    ]);
    deliver(channel, { subject: `Pré-inscription : ${formData.studentName}`, body });
    setSentChannel(channel);
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
            <h2 className="text-4xl font-bold text-sakina-green mb-4">
              Processus d'Inscription
            </h2>
            <p className="text-xl text-gray-600">
              4 étapes simples pour intégrer le Collège Sakina
            </p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 gap-8 print:gap-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="text-center group hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-sakina-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-sakina-green mb-4">
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
      <section className="print:hidden py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-sakina-green mb-4">
                Formulaire de Pré-inscription
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez ce formulaire pour commencer le processus d'inscription
              </p>
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

              <SendButtons />

              <div role="status" aria-live="polite">
                <SendStatus channel={sentChannel} />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section Documents requis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 print:grid-cols-2 gap-12 print:gap-8">
            <div>
              <h2 className="text-4xl font-bold text-sakina-green mb-8">
                Documents Requis
              </h2>
              <ul className="space-y-4">
                {requirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-sakina-green hover:text-white transition-all duration-300 group"
                  >
                    <CheckCircle className="w-6 h-6 text-sakina-red flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="font-medium">{requirement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-sakina-red/5 border border-sakina-red rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-sakina-red flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sakina-green mb-2">Important</p>
                    <p className="text-gray-700 text-sm">
                      Tous les documents doivent être fournis en original et en photocopie.
                      Les documents en langue étrangère doivent être traduits et légalisés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sakina-green mb-6">
                Télécharger les Formulaires
              </h3>
              <div className="space-y-4">
                {downloads.map((doc) => (
                  <div key={doc.href} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sakina-green rounded-xl flex items-center justify-center flex-shrink-0">
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
                        className="print:hidden bg-sakina-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-sakina-red-dark transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        <span>Télécharger<span className="sr-only"> : {doc.title} (PDF)</span></span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-sakina-green text-white p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Besoin d'aide ?</h4>
                <div className="space-y-3">
                  <a href={telHref(college.phones.main)} className="flex items-center space-x-3 hover:text-sakina-red-light">
                    <Phone className="w-5 h-5 text-sakina-red-light" aria-hidden="true" />
                    <span>{college.phones.main}</span>
                  </a>
                  <a href={`mailto:${college.emails.admissions}`} className="flex items-center space-x-3 hover:text-sakina-red-light">
                    <Mail className="w-5 h-5 text-sakina-red-light" aria-hidden="true" />
                    <span className="break-all">{college.emails.admissions}</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sakina-red-light mt-1" aria-hidden="true" />
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
            <h2 className="text-4xl font-bold text-sakina-green mb-4">
              Frais de Scolarité
            </h2>
            <p className="text-xl text-gray-600">
              Tarifs transparents pour l'année scolaire 2025-2026
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tableau (tablette et desktop) */}
            <table className="hidden md:table print:table w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <caption className="sr-only">Frais de scolarité par niveau, en FCFA</caption>
              <thead className="bg-sakina-green text-white">
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
                    <th scope="row" className="p-6 text-left font-semibold text-sakina-green">{fee.level}</th>
                    <td className="p-6 text-center">{fee.registration} FCFA</td>
                    <td className="p-6 text-center">{fee.monthly} FCFA</td>
                    <td className="p-6 text-center font-semibold text-sakina-red">{fee.annual} FCFA</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cartes (mobile) */}
            <div className="md:hidden print:hidden space-y-4">
              {fees.map((fee) => (
                <div key={fee.level} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <h3 className="bg-sakina-green text-white px-6 py-3 font-semibold">{fee.level}</h3>
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
                      <dd className="text-sakina-red">{fee.annual} FCFA</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 print:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-sakina-green mb-3">Facilités de paiement</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Paiement en 3 tranches possibles</li>
                  <li>• Réduction de 5% pour paiement annuel</li>
                  <li>• Bourses d'excellence disponibles</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-sakina-green mb-3">Inclus dans les frais</h3>
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

      <UsefulDocuments />

      <CtaSection
        title="Prêt à inscrire votre enfant ?"
        text="Rejoignez notre communauté éducative et offrez à votre enfant les meilleures chances de réussite."
        primary={{ label: 'Prendre rendez-vous', href: '/contact' }}
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
