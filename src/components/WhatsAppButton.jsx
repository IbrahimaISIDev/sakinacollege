import { MessageCircle } from 'lucide-react';
import { college } from '../data/college';

const message = `Bonjour, je souhaite avoir des informations sur le ${college.name}.`;

// Bouton flottant : WhatsApp est le canal de contact le plus utilisé par les familles
const WhatsAppButton = () => (
  <a
    href={`${college.social.whatsapp}?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous écrire sur WhatsApp (nouvel onglet)"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#075E54] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#054d44] transition-all duration-300 p-3.5 sm:px-5"
  >
    <MessageCircle className="w-6 h-6" aria-hidden="true" />
    <span className="hidden sm:inline font-semibold">WhatsApp</span>
  </a>
);

export default WhatsAppButton;
