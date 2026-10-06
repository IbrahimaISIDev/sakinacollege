import { college } from '../data/college';

// Transmission des formulaires sans serveur : le message est rédigé à partir des champs,
// puis ouvert dans WhatsApp ou dans la messagerie du visiteur, qui n'a plus qu'à l'envoyer.
// (À remplacer par un envoi direct — Web3Forms, Formspree… — quand l'école aura créé un compte.)

export const CHANNELS = {
  whatsapp: { label: 'WhatsApp', target: college.phones.main },
  email: { label: 'e-mail', target: college.emails.main },
};

// "2013-03-15" -> "15/03/2013"
export const formatDateFr = (iso) => (iso ? iso.split('-').reverse().join('/') : '');

// Texte du message : un titre, puis des blocs de lignes "Libellé : valeur" (les valeurs vides sont omises)
export function buildMessage(title, blocks) {
  const lines = [title];
  blocks.forEach((block) => {
    const filled = block.filter(([, value]) => value && String(value).trim());
    if (filled.length) {
      lines.push('', ...filled.map(([label, value]) => `${label} : ${String(value).trim()}`));
    }
  });
  return lines.join('\n');
}

// Ouvre le message dans le canal choisi. Doit être appelé directement dans le gestionnaire
// d'envoi du formulaire (geste de l'utilisateur), sans quoi le navigateur peut bloquer l'ouverture.
export function deliver(channel, { subject, body }) {
  if (channel === 'whatsapp') {
    window.open(`${college.social.whatsapp}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
  } else {
    window.location.href = `mailto:${college.emails.main}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
