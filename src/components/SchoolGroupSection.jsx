import { GraduationCap, Blocks } from 'lucide-react';
import { schoolGroup } from '../data/college';

const ICONS = [GraduationCap, Blocks];

// Présentation du groupe scolaire : le collège et l'école Boushra School
const SchoolGroupSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-sakina-green mb-6">{schoolGroup.name}</h2>
        <p className="text-xl text-gray-600 leading-relaxed">{schoolGroup.intro}</p>
      </div>

      <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {schoolGroup.schools.map((school, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <li key={school.name} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex items-start gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-full bg-sakina-red flex items-center justify-center flex-shrink-0">
                <Icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sakina-green">{school.name}</h3>
                <p className="text-gray-600 mb-3">{school.description}</p>
                <p className="inline-block bg-sakina-green/10 text-sakina-green font-semibold rounded-lg px-3 py-1">
                  {school.levels}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default SchoolGroupSection;
