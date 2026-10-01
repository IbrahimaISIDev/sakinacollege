const PRIMARY_CLASSES =
  'bg-sakina-gold text-sakina-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group';
const SECONDARY_CLASSES =
  'border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sakina-blue transition-all duration-300 flex items-center justify-center';

// primary / secondary : { label, href, icon?, iconAfter? }
const CtaSection = ({ title, text, primary, secondary }) => (
  <section className="py-20 bg-sakina-blue text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{text}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {[
          [primary, PRIMARY_CLASSES],
          [secondary, SECONDARY_CLASSES],
        ].map(([action, classes]) => (
          <a key={action.label} href={action.href} className={classes}>
            {action.icon}
            {action.label}
            {action.iconAfter}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CtaSection;
