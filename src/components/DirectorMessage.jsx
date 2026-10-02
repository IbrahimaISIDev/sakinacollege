import { Quote } from 'lucide-react';
import Avatar from './Avatar';
import ComingSoon from './ComingSoon';
import { director } from '../data/content';
import { college } from '../data/college';
import logo from '../assets/images/logo-sakina.webp';

const DirectorMessage = () => (
  <section id="mot-de-la-directrice" className="py-20 bg-white scroll-mt-24">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-sakina-green mb-12 text-center">Le mot de la directrice</h2>

      {director.message.length > 0 ? (
        <figure className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          <div className="flex flex-col items-center text-center">
            {director.name || director.photo ? (
              <Avatar name={director.name} photo={director.photo} size="w-40 h-40" textSize="text-4xl" />
            ) : (
              // Ni nom ni photo encore fournis : logo du collège à la place
              <div className="w-40 h-40 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center p-5">
                <img src={logo} alt="" width="320" height="101" className="w-full h-auto" />
              </div>
            )}
          </div>
          <div>
            <Quote className="w-10 h-10 text-sakina-red mb-4" aria-hidden="true" />
            <blockquote className="space-y-4 text-lg text-gray-700 leading-relaxed">
              {director.message.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </blockquote>
            <figcaption className="mt-6 border-l-4 border-sakina-red pl-4">
              {director.name ? (
                <>
                  <span className="block font-semibold text-sakina-green text-lg">{director.name}</span>
                  <span className="block text-gray-600">{director.title}</span>
                </>
              ) : (
                <span className="block font-semibold text-sakina-green text-lg">
                  {director.title} du {college.shortName}
                </span>
              )}
            </figcaption>
          </div>
        </figure>
      ) : (
        <div className="max-w-2xl mx-auto">
          <ComingSoon>Le mot de la directrice sera bientôt disponible.</ComingSoon>
        </div>
      )}
    </div>
  </section>
);

export default DirectorMessage;
