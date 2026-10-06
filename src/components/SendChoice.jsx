import { MessageCircle, Mail, Info } from 'lucide-react';
import { CHANNELS } from '../lib/delivery';

// Boutons d'envoi d'un formulaire : WhatsApp (recommandé) ou e-mail.
// Le canal choisi est lu dans le gestionnaire d'envoi via event.nativeEvent.submitter.value.
export const SendButtons = () => (
  <div className="space-y-4">
    <p className="flex items-start gap-2 text-sm text-gray-600 bg-sakina-green/5 rounded-lg p-3">
      <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-sakina-green" aria-hidden="true" />
      <span>
        Votre demande sera préparée dans WhatsApp ou dans votre messagerie : il vous suffira de vérifier le message
        puis d'appuyer sur « Envoyer ». Le site ne conserve aucune donnée.
      </span>
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button
        type="submit"
        name="canal"
        value="whatsapp"
        className="inline-flex items-center justify-center gap-2 bg-[#075E54] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#054d44] transition-colors duration-300 shadow-lg"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        Envoyer par WhatsApp
      </button>
      <button
        type="submit"
        name="canal"
        value="email"
        className="inline-flex items-center justify-center gap-2 bg-white text-sakina-green border-2 border-sakina-green px-6 py-3 rounded-full font-semibold hover:bg-sakina-green hover:text-white transition-colors duration-300"
      >
        <Mail className="w-5 h-5" aria-hidden="true" />
        Envoyer par e-mail
      </button>
    </div>
  </div>
);

// Message affiché après l'ouverture de WhatsApp ou de la messagerie
export const SendStatus = ({ channel }) => {
  if (!channel) return null;
  const { label, target } = CHANNELS[channel];
  return (
    <div className="bg-sakina-green/5 border border-sakina-green/30 text-gray-800 px-6 py-4 rounded-xl">
      <p className="font-semibold text-sakina-green">Votre message est prêt dans {channel === 'whatsapp' ? 'WhatsApp' : 'votre messagerie'}.</p>
      <p className="text-sm mt-1">
        Appuyez sur « Envoyer » pour nous le transmettre ({label} : {target}). Si rien ne s'est ouvert, vous pouvez
        nous écrire directement {channel === 'whatsapp' ? 'à ce numéro' : 'à cette adresse'} ou utiliser l'autre bouton.
      </p>
    </div>
  );
};
