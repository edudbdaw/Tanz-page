export default function Services() {
  const services = [
    { title: "Workshops", desc: "Regelmäßige Kurse und Wochenend-Workshops für alle Niveaus.", icon: "🥁" },
    { title: "Tanzreisen", desc: "Kulturelle Begegnungen und Tanz in Senegal, Guinea & Burkina Faso.", icon: "✈️" },
    { title: "Performances", desc: "Live-Musik und Tanz für Veranstaltungen und Festivals.", icon: "🎭" },
    { title: "Ausbildung", desc: "Zertifizierte Weiterbildung in Ritueller Tanzpädagogik.", icon: "🎓" },
  ];

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-brand-ivory transition-colors group cursor-default border border-transparent hover:border-brand-teal/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="font-heading text-2xl text-brand-teal mb-2">{service.title}</h3>
              <p className="font-sans text-brand-text/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}