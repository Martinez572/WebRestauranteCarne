interface ProductCardProps {
  name: string;
  desc: string;
  priceFormatted: string;
  btnText?: string;
  image: string;
  onAdd: () => void;
  theme: 'light' | 'dark'; // <-- Recibe el tema

}

export default function ProductCard({ name, desc, priceFormatted, image, onAdd, theme }: ProductCardProps) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all flex flex-col p-4 group shadow-sm hover:shadow-xl ${
      theme === 'dark' ? 'bg-[#111] border-zinc-800 hover:border-zinc-500' : 'bg-white border-gray-200 hover:border-gray-400'
    }`}>
      {/* Imagen */}
      <div className={`h-56 w-full overflow-hidden rounded-xl relative ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-100'}`}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100" 
        />
      </div>
      
      {/* Textos */}
      <div className="mt-5 flex-1">
        <h3 className={`text-lg font-black uppercase tracking-wide mb-2 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>
          {desc}
        </p>
      </div>
      
      {/* Precio y Botón circular */}
      <div className={`flex items-center justify-between mt-2 pt-4 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-100'}`}>
        <span className={`text-2xl font-black ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {priceFormatted}
        </span>
        
        <button 
          onClick={onAdd}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-md ${
            theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-zinc-800'
          }`}
          title="Agregar al pedido"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}