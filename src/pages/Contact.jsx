import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageCircle, Calendar, Users, Facebook } from 'lucide-react';
import PageHero from '../components/PageHero';
import FormField from '../components/FormField';
import { SendButtons, SendStatus } from '../components/SendChoice';
import { buildMessage, deliver } from '../lib/delivery';
import { college, allPhones, telHref } from '../data/college';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  requestType: 'information'
};

const departments = [
  { name: "Direction Générale", email: college.emails.direction, phone: college.phones.main },
  { name: "Admissions & Inscriptions", email: college.emails.admissions, phone: college.phones.landline },
  { name: "Vie Scolaire", email: college.emails.schoolLife, phone: college.phones.secondary },
  { name: "Comptabilité", email: college.emails.accounting, phone: college.phones.accounting }
];

const followUpItems = [
  {
    icon: Users,
    title: "Corps professoral compétent",
    description: "Enseignants qualifiés et expérimentés"
  },
  {
    icon: MessageCircle,
    title: "1 bulletin par programme",
    description: "(sénégalais et religieux)"
  },
  {
    icon: Calendar,
    title: "Prière Zhuhr et 'Asr en groupe",
    description: "Moments spirituels collectifs"
  },
  {
    icon: CheckCircle,
    title: "Prière du vendredi assurée",
    description: "Rassemblement hebdomadaire"
  },
  {
    icon: MessageCircle,
    title: "Rappel après chaque prière de Zhuhr",
    description: "Enseignements spirituels quotidiens"
  }
];

const faqItems = [
  {
    question: "Quels sont les frais de scolarité ?",
    answer: "Les frais varient selon le niveau. Le détail est disponible dans la grille tarifaire de la page Inscriptions."
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

const REQUEST_TYPES = {
  information: "Demande d'information",
  inscription: 'Inscription',
  visite: "Visite de l'établissement",
  autre: 'Autre demande',
};

const linkClasses = 'text-gray-600 hover:text-sakina-green underline-offset-2 hover:underline transition-colors duration-300';

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [sentChannel, setSentChannel] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Le formulaire est validé par le navigateur, puis le message est ouvert dans le canal choisi.
  const handleSubmit = (e) => {
    e.preventDefault();
    const channel = e.nativeEvent.submitter?.value === 'email' ? 'email' : 'whatsapp';
    const body = buildMessage(`${REQUEST_TYPES[formData.requestType]} - Collège Sakina`, [
      [['Sujet', formData.subject]],
      [['Message', formData.message]],
      [
        ['Nom', formData.name],
        ['E-mail', formData.email],
        ['Téléphone', formData.phone],
      ],
    ]);
    deliver(channel, { subject: formData.subject, body });
    setSentChannel(channel);
  };

  const fieldProps = (id) => ({ id, value: formData[id], onChange: handleInputChange });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-sakina-green" aria-hidden="true" />,
      title: "Adresse",
      details: [college.address.street, college.address.landmark, college.address.city].map((line) => ({ text: line }))
    },
    {
      icon: <Phone className="w-6 h-6 text-sakina-red" aria-hidden="true" />,
      title: "Téléphones",
      details: allPhones.map((phone) => ({ text: phone, href: telHref(phone) }))
    },
    {
      icon: <Mail className="w-6 h-6 text-sakina-red" aria-hidden="true" />,
      title: "Emails",
      details: [college.emails.main, college.emails.contact].map((email) => ({ text: email, href: `mailto:${email}` }))
    },
    {
      icon: <Clock className="w-6 h-6 text-sakina-green" aria-hidden="true" />,
      title: "Horaires",
      details: college.hours.map((line) => ({ text: line }))
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Contactez-nous"
        subtitle="Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre démarche d'inscription"
      />

      {/* Informations de Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-green mb-4">
              Nos Coordonnées
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Plusieurs moyens pour nous joindre et obtenir les informations dont vous avez besoin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-sakina-green mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail) => (
                    <p key={detail.text} className="text-gray-600 break-words">
                      {detail.href ? <a href={detail.href} className={linkClasses}>{detail.text}</a> : detail.text}
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
              <h2 className="text-3xl md:text-4xl font-bold text-sakina-green mb-4">
                Envoyez-nous un Message
              </h2>
              <p className="text-gray-600 text-lg">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-sm text-gray-500">Les champs marqués d'un * sont obligatoires.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField {...fieldProps('name')} label="Nom complet" required placeholder="Votre nom complet" autoComplete="name" />
                  <FormField {...fieldProps('email')} label="Email" type="email" required placeholder="votre@email.com" autoComplete="email" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField {...fieldProps('phone')} label="Téléphone" type="tel" placeholder="+221 XX XXX XX XX" autoComplete="tel" />
                  <FormField {...fieldProps('requestType')} as="select" label="Type de demande">
                    {Object.entries(REQUEST_TYPES).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </FormField>
                </div>

                <FormField {...fieldProps('subject')} label="Sujet" required placeholder="Sujet de votre message" />
                <FormField {...fieldProps('message')} as="textarea" label="Message" required rows={6} placeholder="Décrivez votre demande en détail..." />

                <SendButtons />

                <div role="status" aria-live="polite">
                  <SendStatus channel={sentChannel} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Départements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-green mb-4">
              Nos Départements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Contactez directement le département concerné pour une réponse plus rapide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-sakina-green mb-4">
                  {dept.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-sakina-red flex-shrink-0" aria-hidden="true" />
                    <a href={`mailto:${dept.email}`} className={`text-sm break-all ${linkClasses}`}>
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-sakina-red flex-shrink-0" aria-hidden="true" />
                    <a href={telHref(dept.phone)} className={`text-sm ${linkClasses}`}>
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
      <section className="py-20 bg-gradient-to-r from-sakina-green to-sakina-green-light text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Suivi Pédagogique
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour la réussite de nos élèves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {followUpItems.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-green-100 text-sm">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Services Optionnels</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[['🍽️', 'Cantine'], ['🚌', 'Transport']].map(([emoji, label]) => (
                  <div key={label} className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl" aria-hidden="true">{emoji}</span>
                    </div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-green-100">En option</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-green mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trouvez rapidement les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-sakina-green mb-3">
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
            <h2 className="text-3xl md:text-4xl font-bold text-sakina-green mb-4">
              Notre Localisation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Venez nous rendre visite dans nos locaux modernes et accueillants
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-sakina-green mb-6">
                  Adresse Complète
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-sakina-red mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-gray-800">{college.address.street}</p>
                      <p className="text-gray-600">{college.address.landmark}</p>
                      <p className="text-gray-600">{college.address.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-sakina-red flex-shrink-0" aria-hidden="true" />
                    <a href={telHref(college.phones.main)} className={linkClasses}>{college.phones.main}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-sakina-red flex-shrink-0" aria-hidden="true" />
                    <a href={`mailto:${college.emails.main}`} className={`break-all ${linkClasses}`}>{college.emails.main}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-6 h-6 text-sakina-red flex-shrink-0" aria-hidden="true" />
                    <a href={college.social.facebook} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                      facebook.com/sakinacollege
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-80 lg:h-auto lg:min-h-[24rem]">
                <iframe
                  title={`Plan d'accès : ${college.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(college.mapQuery)}&hl=fr&z=16&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
