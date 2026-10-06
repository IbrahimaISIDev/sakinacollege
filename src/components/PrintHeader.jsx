import { college } from '../data/college';
import logo from '../assets/images/logo-sakina.webp';

// En-tête visible uniquement à l'impression : logo et coordonnées du collège
const PrintHeader = () => (
  <div className="hidden print:flex items-center justify-between gap-6 border-b-4 border-sakina-green pb-3 mb-4">
    <img src={logo} alt={college.name} width="320" height="101" className="h-12 w-auto" />
    <p className="text-right text-xs text-gray-700 leading-relaxed">
      <strong className="text-sakina-green text-sm">{college.name}</strong>
      <br />
      {college.address.street} {college.address.landmark}, {college.address.city}
      <br />
      {college.phones.main} · {college.emails.main}
    </p>
  </div>
);

export default PrintHeader;
