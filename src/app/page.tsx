'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { dictionary, products } from '@/data/content';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // NUEVO: Guardamos la imagen para mostrarla en el carrito
  desc: string;  // NUEVO: Guardamos la descripción corta
}

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); 
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  
  const dict = dictionary[lang];

  // Modificado para recibir también la imagen y la descripción
  const addToCart = (product: any, name: string) => {
    const desc = lang === 'es' ? product.descEs : product.descEn;
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: product.id, name, price: product.price, quantity: 1, image: product.image, desc }];
    });
  };

  // Funciones para aumentar, disminuir o eliminar ítems individuales del carrito
  const increaseQuantity = (id: string) => {
    setCart(prevCart => prevCart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id: string) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0)); // Si llega a 0, se elimina solo
  };

  const removeItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const sendToWhatsApp = () => {
    const dictCart = dict.cart;
    let message = `${dictCart.whatsappMessage}\n\n`;
    cart.forEach(item => {
      message += `✅ ${item.quantity}x ${item.name} - $${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\n*${dictCart.total} ${dict.formatPrice(cartTotal)}*`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${dictCart.whatsappPhone}?text=${encodedMessage}`, '_blank');
    setShowConfirmModal(false);
    setCart([]);
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory;
    const name = lang === 'es' ? p.nameEs : p.nameEn;
    const desc = lang === 'es' ? p.descEs : p.descEn;
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryKeys = ['todos', 'carnes', 'hamburguesas', 'sandwich', 'tostones', 'pastas', 'crepes', 'fruteria', 'bebidas'];

  return (
    <main className={`min-h-screen font-sans pb-32 transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-zinc-900 text-white' 
        : 'bg-[#fafafa] bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:24px_24px] text-gray-900'
    }`}>
      
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        dict={dict} 
        theme={theme} 
        toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
      />
      
      {/* HERO SECTION */}
      <section id="inicio" className={`relative border-b py-16 px-4 overflow-hidden transition-colors ${
        theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white/80 border-gray-200 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left z-10">
            <h2 className={`font-serif italic text-2xl md:text-3xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              
            </h2>
       <img 
    src="/logoo.png" 
    alt="Logo Restaurante" 
    className="w-full max-w-[400px] md:max-w-[700px] mb-8 object-contain mr-auto ml-0" 
  />
            <p className={`text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#menu" className={`font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg ${
                theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-zinc-800'
              }`}>
                {dict.hero.cta} <span>→</span>
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img src="/local.webp" alt="Instalaciones del restaurante" className="w-full h-full object-cover absolute inset-0 opacity-90" />
          </div>
        </div>
      </section>

      {/* FRANJA DE CATEGORÍAS */}
      <section className="py-6 px-4 rounded-3xl max-w-6xl mx-auto -mt-8 relative z-20 shadow-xl border bg-white border-gray-200">
        <div className="flex flex-wrap justify-center gap-3">
          {categoryKeys.map((catKey) => {
            const isActive = selectedCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all cursor-pointer ${
                  isActive ? 'bg-black text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {(dict.categories as any)[catKey]}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN DEL MENÚ */}
      <section id="menu" className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className={`font-serif italic text-2xl mb-1 ${theme === 'dark' ? 'text-zinc-500' : 'text-red-700'}`}>Populares</h2>
          <h3 className={`text-4xl md:text-5xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {dict.menuTitle}
          </h3>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => {
              const productName = lang === 'es' ? item.nameEs : item.nameEn;
              return (
                <ProductCard
                  key={item.id}
                  name={productName}
                  desc={lang === 'es' ? item.descEs : item.descEn}
                  priceFormatted={dict.formatPrice(item.price)}
                  btnText={dict.btnOrder}
                  image={item.image}
                  theme={theme}
                  onAdd={() => addToCart(item, productName)}
                />
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-500">
            <p className="text-lg">{lang === 'es' ? 'No se encontraron opciones.' : 'No options found.'}</p>
          </div>
        )}
      </section>

      {/* ACERCA DE NOSOTROS */}
      <section id="info" className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl border border-gray-200 text-black">
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
            <img src="/local.webp" alt="Instalaciones Restaurante" className="w-full h-full object-cover absolute inset-0" />
          </div>
          <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
            <h2 className="text-red-700 font-serif italic text-xl mb-2">Conócenos</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-none">
              Acerca de <br/> <span className="text-zinc-800">Nosotros</span>
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8 font-medium">
              Estamos ubicados en la ciudad de Pasto, en la Avenida Boyacá. Danos el gusto de atenderte, ven y descubre tu propio placer con nuestra gran variedad de platos preparados con los mejores estándares de calidad.
            </p>
            <a 
              href="https://maps.app.goo.gl/JEfPBuiRHs93CTBZ8" 
              target="_blank" 
              rel="noreferrer"
              className="self-start bg-zinc-900 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-zinc-700 transition-colors shadow-lg"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      <Footer dict={dict} />

      {/* DISEÑO DE CARRITO FLOTANTE ESTILO TARJETAS (Inspirado en la referencia) */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 w-96 max-h-[85vh] overflow-y-auto bg-white text-black rounded-3xl shadow-2xl p-6 z-40 border border-gray-200 animate-bounce-in">
          
          {/* Encabezado del Carrito */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
            <h3 className="text-lg font-black uppercase tracking-wider">{dict.cart.title}</h3>
            <button 
              onClick={() => setCart([])} 
              className="bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              {lang === 'es' ? 'Eliminar todo' : 'Delete All'}
            </button>
          </div>

          {/* Lista de Productos Estilo Tarjeta con Imagen */}
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-gray-50 border border-gray-100 rounded-2xl p-3 flex items-center gap-4 relative">
                
                {/* Imagen del Plato */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-gray-200">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Información */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-gray-900 truncate">{item.name}</h4>
                  <p className="text-xs text-gray-500 truncate mb-1">{item.desc}</p>
                  <span className="text-xs font-black text-red-700">
                    Total ${ (item.price * item.quantity).toLocaleString() }
                  </span>
                </div>

                {/* Botón de Basura individual */}
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                  title="Eliminar"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>

                {/* Controles de Cantidad (+ y -) */}
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm mt-auto">
                  <button 
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-5 h-5 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => increaseQuantity(item.id)}
                    className="w-5 h-5 flex items-center justify-center text-black bg-gray-100 hover:bg-gray-200 rounded-full font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Resumen de Pago Total */}
          <div className="border-t border-gray-100 pt-4 mb-5 space-y-2">
            <div className="flex justify-between text-sm font-medium text-gray-600">
              <span>Total Product Price</span>
              <span className="font-bold text-black">${cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg font-black text-black pt-2 border-t border-gray-100">
              <span>Total Payment</span>
              <span className="text-red-700">{dict.formatPrice(cartTotal)}</span>
            </div>
          </div>

          {/* Botón de Proceder al Pedido (WhatsApp) */}
          <button 
            onClick={() => setShowConfirmModal(true)}
            className="w-full bg-black hover:bg-zinc-800 text-white font-black uppercase tracking-widest py-3.5 rounded-2xl transition-all shadow-lg flex justify-center items-center gap-2 cursor-pointer"
          >
            {dict.cart.checkout}
          </button>
        </div>
      )}

      {/* AVISO DE CONFIRMACIÓN (MODAL) */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-white text-black rounded-3xl shadow-2xl p-6 max-w-sm w-full">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-center">{dict.cart.confirmTitle}</h3>
            
            <div className="max-h-48 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-xl">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm mb-2 font-medium">
                  <span><span className="font-black text-black">{item.quantity}x</span> {item.name}</span>
                </div>
              ))}
              <div className="border-t border-gray-300 mt-3 pt-3 text-right font-black text-lg">
                {dict.cart.total} {dict.formatPrice(cartTotal)}
              </div>
            </div>

            <div className="bg-black text-white text-sm p-4 rounded-xl mb-6 font-bold text-center leading-relaxed">
              {dict.cart.confirmAddressReminder}
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-black font-black uppercase text-sm py-3 rounded-xl transition-colors cursor-pointer"
              >
                {dict.cart.confirmCancel}
              </button>
              <button 
                onClick={sendToWhatsApp}
                className="flex-1 bg-[#25D366] hover:bg-[#1ebe57] text-white font-black uppercase text-sm py-3 rounded-xl transition-colors shadow-md cursor-pointer"
              >
                {dict.cart.confirmSend}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}