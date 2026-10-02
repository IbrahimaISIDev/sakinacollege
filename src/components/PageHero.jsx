const PageHero = ({ title, subtitle, children }) => (
  <section className="relative bg-gradient-to-br from-sakina-green to-sakina-green-light py-20">
    <div className="container mx-auto px-4">
      <div className="text-center text-white space-y-6">
        {children}
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
