import { title } from "process";

export const dictionary = {
  es: {
    nav: { home: "Inicio", menu: "Menú", info: "Horarios & Ubicación", contact: "Contacto" },
    hero: { 
      title: "Cortes Premium a la Parrilla", 
      subtitle: "La mejor experiencia gastronómica de carne y hamburguesas artesanales en Pasto.", 
      cta: "Ver Menú Completo" 
    },
    menuTitle: "Nuestra Carta",
    btnOrder: "Agregar al pedido",
    formatPrice: (price: number) => `$${price.toLocaleString('es-CO')} COP`,
    categories: {
      todos: "Todos",
      carnes: "Carnes",
      hamburguesas: "Hamburguesas",
      sandwich: "Sándwiches",
      tostones: "Tostones",
      pastas: "Pastas",
      crepes: "Crepes",
      fruteria: "Frutería",
      bebidas: "Bebidas"
    },
    infoSection: {
      title: "Información & Horarios",
      subtitle: "Visítanos o realiza tu pedido a domicilio",
      locationTitle: "Ubicación",
      address: "Calle 12 #17-3, Av. Boyacá, Pasto, Nariño",
      hoursTitle: "Horario de Atención",
      weekdays: "Lunes a Jueves: 12:00 PM - 10:00 PM",
      weekends: "Viernes a Domingo: 12:00 PM - 11:00 PM"
    },
    footer: {
      rights: "© 2026 Restaurante Carne. Todos los derechos reservados.",
      followUs: "Síguenos en nuestras redes"
    },
    cart: {
      title: "Tu Pedido",
      total: "Total",
      checkout: "Pedir por WhatsApp",
      empty: "Vaciar",
      whatsappPhone: "573167307520",
      whatsappMessage:"Hola, quiero hacer el siguiente pedido para el domicilio:",
      confirmTitle: "Confirma tu pedido",
      confirmAddressReminder: "⚠️ Importante: Por favor, no olvides escribir tu dirección exacta de entrega cuando se abra el chat de WhatsApp.",
      confirmSend: "Confirmar y Enviar",
      confirmCancel: "Volver"
    }
  },
  en: {
    nav: { home: "Home", menu: "Menu", info: "Hours & Location", contact: "Contact" },
    hero: { 
      title: "Premium Grilled Steaks", 
      subtitle: "The finest steakhouse and craft burger experience in Pasto.", 
      cta: "View Full Menu" 
    },
    menuTitle: "Our Menu",
    btnOrder: "Order via WhatsApp",
    formatPrice: (price: number) => `COP ${price.toLocaleString('en-US')}`,
    categories: {
      todos: "All",
      carnes: "Steaks",
      hamburguesas: "Burgers",
      sandwich: "Sandwiches",
      tostones: "Tostones",
      pastas: "Pasta",
      crepes: "Crepes",
      fruteria: "Fruit Bar",
      bebidas: "Drinks"
    },
    infoSection: {
      title: "Info & Business Hours",
      subtitle: "Visit us or place an order for delivery",
      locationTitle: "Location",
      address: "Calle 12 #17-3, Av. Boyacá, Pasto, Nariño",
      hoursTitle: "Opening Hours",
      weekdays: "Monday to Thursday: 12:00 PM - 10:00 PM",
      weekends: "Friday to Sunday: 12:00 PM - 11:00 PM"
    },
    footer: {
      rights: "© 2026 Restaurante Carne. All rights reserved.",
      followUs: "Follow us"
    },
    cart: {
      title: "Your Order",
      total: "Total:",
      checkout: "Procceed to Order",
      empty: "Delate All",
      whatsappPhone: "573000000000",
      whatsappMessage: "Hi, I would like to place the following order for delivery:",
      confirmTitle: "Confirm your order",
      confirmAddressReminder: "⚠️ Important: Please don't forget to type your exact delivery address when the WhatsApp chat opens.",
      confirmSend: "Confirm & Send",
      confirmCancel: "Go back"
    }
  } 
 };

export const products = [
  { 
    id: '1', 
    category: 'carnes', 
    nameEs: 'Bife de Chorizo (350g)', 
    nameEn: 'Sirloin Steak (350g)', 
    price: 48000, 
    descEs: 'Corte magro y jugoso madurado a la perfección, acompañado de papas criollas.', 
    descEn: 'Lean and juicy aged steak served with native potatoes.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: '2', 
    category: 'hamburguesas', 
    nameEs: 'Hamburguesa Artesanal Carne', 
    nameEn: 'Carne Signature Burger', 
    price: 32000, 
    descEs: '200g de carne 100% de res, queso cheddar fundido, tocineta y salsa especial.', 
    descEn: '200g 100% beef patty, melted cheddar, bacon, and house sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: '3', 
    category: 'sandwich', 
    nameEs: 'Sándwich de Lomo Roquefort', 
    nameEn: 'Tenderloin Steak Sandwich', 
    price: 28000, 
    descEs: 'Tiras de lomo fino, cebolla caramelizada y queso derretido en pan artesanal.', 
    descEn: 'Tenderloin strips, caramelized onions, and melted cheese on craft bread.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: '4', 
    category: 'tostones', 
    nameEs: 'Tostón Gratinado con Carne Desmechada', 
    nameEn: 'Gratinated Plantain with Shredded Beef', 
    price: 24000, 
    descEs: 'Plátano verde crocante cubierto de carne desmechada, queso costeño y suero.', 
    descEn: 'Crispy green plantain topped with shredded beef and melted cheese.',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: '5', 
    category: 'pastas', 
    nameEs: 'Fettuccine Alfredo con Pollo a la Parrilla', 
    nameEn: 'Chicken Alfredo Fettuccine', 
    price: 34000, 
    descEs: 'Pasta al dente en cremosa salsa Alfredo con pechuga gratinada al carbón.', 
    descEn: 'Pasta in rich Alfredo sauce topped with grilled chicken breast.',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: '6', 
    category: 'crepes', 
    nameEs: 'Crepe Pollo y Champiñones', 
    nameEn: 'Chicken & Mushroom Crepe', 
    price: 26000, 
    descEs: 'Crepe suave relleno de pechuga en salsa blanca de champiñones portobello.', 
    descEn: 'Soft crepe filled with chicken breast in creamy mushroom sauce.',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: '7', 
    category: 'fruteria', 
    nameEs: 'Ensalada de Frutas Especial', 
    nameEn: 'Special Fruit Bowl', 
    price: 18000, 
    descEs: 'Mezcla de frutas de temporada con helado, queso rallado y crema de leche.', 
    descEn: 'Fresh seasonal fruits served with ice cream, cheese, and cream.',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: '8', 
    category: 'bebidas', 
    nameEs: 'Limonada de Coco', 
    nameEn: 'Coconut Lemonade', 
    price: 12000, 
    descEs: 'Zumo de limón natural batido con cremosa leche de coco granizada.', 
    descEn: 'Fresh lime juice blended with coconut cream and ice.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  }
];