import { Clock } from 'lucide-react';

// Encart affiché tant qu'un contenu officiel n'a pas été fourni par l'école
const ComingSoon = ({ children }) => (
  <div className="flex items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white/60 px-6 py-8 text-gray-600">
    <Clock className="w-5 h-5 text-sakina-red flex-shrink-0" aria-hidden="true" />
    <p>{children}</p>
  </div>
);

export default ComingSoon;
