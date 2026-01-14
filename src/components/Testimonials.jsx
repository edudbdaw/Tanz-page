import { testimonials } from '../data/testimonials';

export default function Testimonials() {
    return (
        <section className="py-24 bg-brand-beige">
            <div className="container mx-auto px-4">

                {/* Titles */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-heading text-4xl md:text-5xl text-brand-green">
                        Was unsere Teilnehmer sagen
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto rounded"></div>
                    <p className="font-sans text-lg text-brand-text/80 max-w-2xl mx-auto">
                        Echte Geschichten von Menschen, die durch Tanz und Gemeinschaft gewachsen sind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="flex flex-col h-full bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-brand-gold">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-beige flex-shrink-0 bg-brand-beige">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                                        />
                                    ) : null}
                                    <div className="hidden w-full h-full text-brand-green items-center justify-center font-heading text-xl">
                                        {item.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-heading text-lg text-brand-text leading-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-brand-gold font-bold uppercase tracking-wider mt-1">
                                        {item.role.split(',')[0]}
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex-grow">
                                <span className="absolute -top-4 -left-2 text-6xl text-brand-beige font-heading opacity-50 select-none">“</span>
                                
                                <p className="font-sans text-brand-text/80 leading-relaxed relative z-10 italic">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}