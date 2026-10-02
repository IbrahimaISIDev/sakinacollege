import Avatar from './Avatar';
import ComingSoon from './ComingSoon';
import { team } from '../data/content';

const TeamSection = () => (
  <section id="equipe" className="py-20 bg-gray-50 scroll-mt-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sakina-green mb-4">Notre équipe pédagogique</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Des enseignants qualifiés qui accompagnent chaque élève au quotidien
        </p>
      </div>

      {team.length > 0 ? (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <li key={member.name} className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
              <Avatar name={member.name} photo={member.photo} />
              <h3 className="mt-4 text-lg font-semibold text-sakina-green">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="max-w-2xl mx-auto">
          <ComingSoon>La présentation de l'équipe pédagogique sera bientôt disponible.</ComingSoon>
        </div>
      )}
    </div>
  </section>
);

export default TeamSection;
