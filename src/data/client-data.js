/**
 * ============================================
 * ARCHIVO DE CONFIGURACIÓN DEL CLIENTE
 * ============================================
 *
 * Edita SOLO este archivo para personalizar toda la landing.
 * Todos los textos, colores, enlaces e imágenes se actualizan automáticamente.
 *
 * INSTRUCCIONES:
 * 1. Cambia los textos entre comillas
 * 2. Actualiza las URLs de imágenes
 * 3. Modifica colores, números de contacto, etc.
 * 4. ¡Listo! Tu landing está personalizada
 */

export const clientData = {
  // ===================================
  // INFORMACIÓN GENERAL DE LA EMPRESA
  // ===================================
  companyName: "TechVision Solutions",

  // ===================================
  // SECCIÓN HERO (Primera impresión)
  // ===================================
  hero: {
    title: "Automatiza tu negocio con inteligencia artificial",
    subtitle: "Soluciones IA de última generación para empresas que quieren escalar rápido. Análisis de datos, automatización y predicción en tiempo real.",
    backgroundImage: "/assets/hero-ai.jpg",
    ctaText: "Solicitar demo gratuita",
    ctaHref: "#contacto",
    secondaryCtaText: "Explorar casos de éxito",
    secondaryCtaHref: "#servicios"
  },

  // ===================================
  // SECCIÓN DE SERVICIOS
  // ===================================
  services: {
    title: "Tecnología IA al alcance de tu empresa",
    subtitle: "Transformamos datos en decisiones inteligentes con nuestras soluciones personalizadas.",
    items: [
      {
        title: "Chatbots Inteligentes IA",
        description: "Asistentes virtuales 24/7 que entienden contexto y resuelven problemas. Aumenta satisfacción de clientes en 80%.",
        icon: "design"
      },
      {
        title: "Análisis Predictivo de Datos",
        description: "Modelos de machine learning que predicen tendencias de mercado y comportamiento de usuarios.",
        icon: "analytics"
      },
      {
        title: "Automatización de Procesos RPA",
        description: "Reduce costos operacionales en 60% automatizando tareas repetitivas y procesos manuales.",
        icon: "development"
      },
      {
        title: "Visión Artificial Avanzada",
        description: "Reconocimiento de imágenes, detección de anomalías y control de calidad automático para manufactura.",
        icon: "strategy"
      },
      {
        title: "Procesamiento de Lenguaje Natural",
        description: "Análisis de sentimientos, clasificación de textos y extracción de información automática.",
        icon: "marketing"
      },
      {
        title: "Integración de Sistemas IA",
        description: "Conectamos IA con tu infraestructura existente. Deployment seguro y escalable en la nube.",
        icon: "seo"
      }
    ]
  },

  // ===================================
  // SECCIÓN SOBRE NOSOTROS
  // ===================================
  about: {
    title: "Pioneros en Inteligencia Artificial Empresarial",
    paragraphs: [
      "Somos un equipo de ingenieros, data scientists y especialistas en IA con más de 8 años transformando empresas. Hemos trabajado con Fortune 500 y startups innovadoras en 15 países.",
      "Nuestra filosofía es simple: la IA debe ser accesible, rentable y segura. No vendemos software genérico, creamos soluciones a medida que generan ROI verificable en 90 días.",
      "Desde bancos hasta retailers, nuestros clientes reducen costos, aumentan ingresos y toman decisiones más inteligentes. Somos tu socio en la revolución digital."
    ],
    imageUrl: "/assets/ia-team.jpg",
    imageAlt: "Equipo de especialistas en IA trabajando en data center"
  },

  // ===================================
  // SECCIÓN DE TESTIMONIOS
  // ===================================
  testimonials: {
    title: "Resultados reales de empresas como la tuya",
    subtitle: "Descubre cómo hemos transformado negocios con inteligencia artificial.",
    items: [
      {
        quote: "Implementamos su chatbot IA y redujimos tickets de soporte en 65%. El equipo pasó a estrategia en lugar de soporte manual. Inversión recuperada en 4 meses.",
        author: "Roberto Méndez",
        role: "VP de Operaciones, FinServe Bank",
        avatar: "/assets/test-1.jpg"
      },
      {
        quote: "Su sistema de predicción de demanda nos ahorró $2M en inventario innecesario el primer año. La precisión es de 94%. Game changer para nuestro negocio.",
        author: "Sofia Fernández",
        role: "CTO, RetailPro Inc",
        avatar: "/assets/test-2.jpg"
      },
      {
        quote: "Implementación limpia, soporte excepcional y resultados que superaron expectativas. Pasamos de tener problemas a tener soluciones IA en 8 semanas.",
        author: "Miguel Torres",
        role: "Founder, LogisticaTech",
        avatar: "/assets/test-3.jpg"
      }
    ]
  },

  // ===================================
  // SECCIÓN DE NÚMEROS/ESTADÍSTICAS
  // ===================================
  stats: {
    enabled: true,
    title: "Impacto medible de nuestras soluciones",
    items: [
      { number: "47", label: "Empresas transformadas" },
      { number: "2.3B", label: "Datos procesados mensualmente" },
      { number: "94%", label: "Precisión promedio en modelos" },
      { number: "8.5M", label: "Ahorro generado para clientes" }
    ]
  },

  // ===================================
  // CTA FINAL (Llamada a la acción)
  // ===================================
  cta: {
    title: "¿Tu empresa está lista para IA?",
    subtitle: "Programamos una sesión de diagnóstico gratuita donde analizamos tu negocio y te mostramos oportunidades específicas de automatización con IA.",
    ctaText: "Reservar sesión de diagnóstico",
    ctaHref: "#contacto",
    urgency: "⚡ Próxima cohorte cierra en 5 días - 20% descuento"
  },

  // ===================================
  // FORMULARIO DE CONTACTO
  // ===================================
  contact: {
    title: "Cuéntanos sobre tu proyecto IA",
    subtitle: "Nos pondremos en contacto dentro de 24 horas con un análisis preliminar.",
    successMessage: "¡Excelente! Un especialista se comunicará contigo muy pronto.",
    errorMessage: "Error al enviar. Por favor intenta de nuevo.",
    recipientEmail: "sales@techvisionsol.com",
    fields: {
      name: { label: "Nombre completo", placeholder: "Roberto García", required: true },
      email: { label: "Email corporativo", placeholder: "roberto@empresa.com", required: true },
      phone: { label: "Teléfono", placeholder: "+34 600 000 000", required: false },
      company: { label: "Empresa", placeholder: "Mi Empresa S.A.", required: false },
      message: { label: "¿Qué proceso quieres automatizar?", placeholder: "Necesitamos...", required: true }
    }
  },

  // ===================================
  // FOOTER
  // ===================================
  footer: {
    companyName: "TechVision Solutions",
    tagline: "Inteligencia Artificial que genera resultados reales",
    navLinks: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Casos de éxito", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" }
    ],
    legalLinks: [
      { label: "Privacidad de datos", href: "/privacidad" },
      { label: "Términos legales", href: "/terminos" },
      { label: "Política de cookies", href: "/cookies" }
    ],
    socialLinks: [
      { platform: "facebook", url: "https://facebook.com/techvisionsol", label: "Facebook" },
      { platform: "instagram", url: "https://instagram.com/techvisionsol", label: "Instagram" },
      { platform: "linkedin", url: "https://linkedin.com/company/techvisionsol", label: "LinkedIn" },
      { platform: "twitter", url: "https://twitter.com/techvisionsol", label: "Twitter" }
    ],
    contactInfo: {
      address: "Av. Tecnológica 456, Torre B, 28028 Madrid",
      phone: "+34 911 234 567",
      email: "info@techvisionsol.com"
    }
  },

  // ===================================
  // BOTONES FLOTANTES
  // ===================================
  floatingButtons: {
    whatsapp: {
      enabled: true,
      number: "+34630000000",
      message: "Hola, quisiera conocer más sobre sus soluciones de IA"
    },
    email: {
      enabled: true,
      address: "sales@techvisionsol.com"
    }
  },

  // ===================================
  // SEO Y METADATOS
  // ===================================
  seo: {
    title: "TechVision Solutions | Soluciones IA para Empresas",
    description: "Automatiza y escala tu negocio con soluciones de Inteligencia Artificial. Chatbots IA, análisis predictivo, RPA y visión artificial para empresas.",
    keywords: "inteligencia artificial, IA empresarial, machine learning, automatización RPA, chatbots IA, análisis de datos",
    ogImage: "/assets/og-ia.jpg",
    twitterHandle: "@techvisionsol"
  },

  // ===================================
  // CONFIGURACIÓN DE COLORES
  // ===================================
  customColors: {
    enabled: true,
    primary: "#0f766e",
    primaryDark: "#134e4a",
    secondary: "#7c3aed",
    accent: "#ec4899",
    background: "#ffffff",
    text: "#111827"
  }
};

export const config = {
  sections: {
    hero: true,
    services: true,
    about: true,
    stats: true,
    testimonials: true,
    cta: true,
    contact: true
  },

  animations: {
    enabled: true,
    fadeIn: true,
    slideIn: true
  },

  analytics: {
    googleAnalyticsId: "G-ABCD1234XY",
    facebookPixelId: ""
  }
};

export default clientData;
