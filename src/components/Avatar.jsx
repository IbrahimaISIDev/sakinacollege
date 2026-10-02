// Initiales d'un nom, sans les civilités : "Mme Awa Diop" -> "AD"
const initials = (name) =>
  name
    .replace(/^(M\.|Mme|Mlle|Dr|Pr|Imam|Oustaz)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

// Photo de la personne, ou ses initiales sur un disque vert si aucune photo n'est fournie
const Avatar = ({ name, photo, size = 'w-24 h-24', textSize = 'text-2xl' }) =>
  photo ? (
    <img src={photo} alt={name} loading="lazy" className={`${size} rounded-full object-cover shadow-md`} />
  ) : (
    <div
      className={`${size} rounded-full bg-sakina-green text-white flex items-center justify-center font-semibold ${textSize} shadow-md`}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );

export default Avatar;
