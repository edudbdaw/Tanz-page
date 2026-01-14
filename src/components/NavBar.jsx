import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // nav links
    const navLinks = [
        { name: 'Workshops', href: '#workshops' },
        { name: 'Tanzreisen', href: '#travels' },
        { name: 'Performances', href: '#performances' },
        { name: 'Ausbildung', href: '#training' }, 
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="font-heading text-3xl font-bold text-brand-green tracking-tighter">
                            TANZ <span className="text-brand-gold font-light">der</span> KULTUREN
                        </a>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-sans text-brand-text hover:text-brand-gold font-medium transition-colors uppercase text-sm tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        {/* contact */}
                        <a
                            href="#contact"
                            className="px-5 py-2 bg-brand-green text-white font-sans rounded-full hover:bg-brand-green/90 transition-colors shadow-md"
                        >
                            Kontakt
                        </a>
                    </div>

                    {/* mobile hamburger button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-green hover:text-brand-gold focus:outline-none p-2"
                        >
                            {/* is open ? icon */}
                            {isOpen ? (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}>
                <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 rounded-md text-base font-medium text-brand-text hover:text-brand-gold hover:bg-brand-beige/50"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 mt-4 text-center rounded-md text-base font-bold bg-brand-green text-white hover:bg-brand-green/90"
                    >
                        Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </nav>
    );
}