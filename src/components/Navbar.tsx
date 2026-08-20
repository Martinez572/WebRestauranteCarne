'use client';

interface NavbarProps {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  dict: any;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ lang, setLang, dict, theme, toggleTheme }: NavbarProps) {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-zinc-900/95 border-zinc-800 text-white' : 'bg-white/90 border-gray-200 text-black shadow-sm'
    }`}>
      <div className="flex items-center gap-3">
        <a href="#inicio">
          <img 
            src="/logo.png" 
            alt="Restaurante Carne Logo" 
            className="h-25 w-auto object-contain bg-white rounded p-1"
          />
        </a>
      </div>

      {/* Aquí están los enlaces de navegación con Contacto de vuelta */}
      <div className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wider uppercase">
        <a href="#inicio" className={`transition-colors ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>
          {dict.nav.home}
        </a>
        <a href="#menu" className={`transition-colors ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>
          {dict.nav.menu}
        </a>
        <a href="#info" className={`transition-colors ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>
          Información
        </a>
        <a href="#contacto" className={`transition-colors ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-500'}`}>
          {dict.nav.contact}
        </a>
      </div>
        
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all cursor-pointer ${
            theme === 'dark' ? 'border-zinc-700 bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'border-gray-200 bg-gray-100 text-indigo-600 hover:bg-gray-200'
          }`}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>

        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className={`border px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer uppercase tracking-widest ${
            theme === 'dark' ? 'border-zinc-700 bg-zinc-900 text-white hover:bg-white hover:text-black' : 'border-gray-300 bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  );
}