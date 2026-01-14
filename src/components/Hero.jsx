export default function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

            {/* soft paralax*/}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero/capa_youtube.png"
                    alt="Tanz der Kulturen"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">

                <div className="mb-6 animate-fade-in-down">
                    <span className="inline-block py-1 px-3 border border-brand-gold/50 rounded-full bg-brand-dark/30 backdrop-blur-sm text-brand-gold font-sans uppercase tracking-widest text-xs md:text-sm">
                        Rituelle Tanzpädagogik
                    </span>
                </div>

                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight drop-shadow-lg">
                    Tanz <span className="text-brand-gold mx-2">•</span> Ritual <span className="text-brand-gold mx-2">•</span> Musik
                </h1>

                <p className="font-sans text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
                    Die Kunst, Gemeinschaft zu tanzen. <br />
                    <span className="text-brand-beige opacity-90 text-lg mt-2 block">
                        Begleitet von Live-Musik aus Burkina Faso, Guinea und Senegal.
                    </span>
                </p>

                {/* accion buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#workshops"
                        className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]"
                    >
                        Aktuelle Workshops
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-brand-green transition-all w-full sm:w-auto min-w-[200px]"
                    >
                        Kontakt aufnehmen
                    </a>
                </div>

            </div>

            {/* scroll down animation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hidden md:block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}