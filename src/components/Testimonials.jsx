import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-green mb-4">
            Stimmen der Teilnehmer
          </h2>
          <p className="font-sans text-brand-text max-w-2xl mx-auto">
            Erfahrungen aus unseren Workshops und Ausbildungen.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-gold">
              
              {/* Icone */}
              <div className="text-brand-gold text-4xl font-heading mb-4">“</div>
              
              <p className="font-sans text-brand-text italic mb-6">
                "{item.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-heading text-xl text-brand-green">{item.name}</h4>
                <p className="text-sm text-gray-500 font-sans uppercase tracking-wider">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}