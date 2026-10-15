import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronDown,
  CircleCheck,
  CircleX,
  Clock3,
  Image as ImageIcon,
  Menu,
  MessageCircle,
  QrCode,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";
import logoAsset from "../assets/gastroqode-logo-v2.png.asset.json";
import menuMockup from "../assets/qresto-menu-mockup.jpg";
import qrImage from "../assets/qresto-qr.png";
import video1Mailo from "../assets/video-1-mailo.mp4.asset.json";
import video2Kaiyo from "../assets/video-2-kaiyo.mp4.asset.json";
import video3CoffeeHouse from "../assets/video-3-coffee-house.mp4.asset.json";
import video4SmashedBabies from "../assets/video-4-smashed-babies.mp4.asset.json";
import mailoBg from "../assets/mailo.jpg.asset.json";
import kaiyoBg from "../assets/kaiyo.jpg.asset.json";
import coffeeHouseBg from "../assets/coffee-house.jpg.asset.json";
import smashedBabiesBg from "../assets/smashed-babies.jpg.asset.json";
import mailoQr from "../assets/mailo-qr.png.asset.json";
import kaiyoQr from "../assets/kaiyo-qr.png.asset.json";
import coffeeHouseQr from "../assets/coffee-house-qr.png.asset.json";
import smashedBabiesQr from "../assets/smashed-babies-qr.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GastroQode | Menús digitales visuales para restaurantes" },
      { name: "description", content: "Transformá la carta de tu restaurante en un menú digital visual, ágil y siempre actualizado con GastroQode." },
      { property: "og:title", content: "GastroQode | Tu menú, más visual que nunca" },
      { property: "og:description", content: "Menús QR con fotos reales, actualización ágil y activación de cartas especiales." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Zap, number: "01", title: "Rápido y ágil", text: "Tus clientes escanean, exploran y eligen en segundos. Sin descargas ni registros." },
  { icon: ImageIcon, number: "02", title: "Cada plato entra por los ojos", text: "Fotos reales y protagonistas para que cada elección empiece antes del primer bocado." },
  { icon: CalendarClock, number: "03", title: "Siempre actualizado", text: "Cambios al instante o programados: platos, precios y disponibilidad bajo control." },
  { icon: Sparkles, number: "04", title: "Cartas para cada ocasión", text: "Activá propuestas especiales para fechas, eventos o temporadas justo cuando las necesitás." },
];

const faqs = [
  ["¿Necesito instalar algo en el restaurante?", "Solo se instala un QR plastificado con un diseño único para cada local."],
  ["¿Puedo cambiar precios y platos?", "Sí. Podés solicitar actualizaciones de contenido, disponibilidad y precios cuando tu carta lo necesite."],
  ["¿Funciona en cualquier celular?", "Sí. El menú se adapta a celulares, tablets y computadoras sin instalar aplicaciones."],
  ["¿Puedo tener una carta especial por un día?", "Claro. Podemos programar y activar cartas para eventos, fechas especiales o propuestas de temporada."],
  ["¿Cómo se define el precio?", "Coordinamos una breve conversación para conocer el tamaño y las necesidades de tu carta, y prepararte una propuesta adecuada."],
];

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 20 });
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  return <motion.div className={className} onMouseMove={handleMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>{children}</motion.div>;
}

function Brand() {
  return <a href="#inicio" className="brand" aria-label="GastroQode, ir al inicio"><img src={logoAsset.url} alt="GastroQode" className="brand-logo" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Ofrecemos", "#servicios"], ["Casos", "#casos"], ["Comparativa", "#comparativa"], ["Planes", "#planes"], ["Preguntas", "#preguntas"]];
  return <header className="site-header"><div className="nav-shell"><Brand /><nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Navegación principal">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="https://wa.me/5491133393228?text=Hola%20GastroQode%2C%20quiero%20conocer%20m%C3%A1s" target="_blank" rel="noreferrer">Hablemos <ArrowRight size={16} /></a></nav><button className="menu-button" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}

function QrTile({ className = "" }: { className?: string }) {
  return <div className={`qr-tile ${className}`}><img src={qrImage} alt="Código QR de GastroQode, escanealo para escribirnos por WhatsApp" /><span>ESCANEÁ</span></div>;
}

function Hero() {
  return <section id="inicio" className="hero"><div className="hero-copy"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}><p className="eyebrow"><span /> Menús que dan ganas</p><h1>Tu menú,<br /><em>más visual</em><br />que nunca.</h1><p className="hero-lead">Convertí cada plato en una experiencia irresistible con una carta digital que se ve increíble y se actualiza al instante.</p><div className="hero-actions"><a className="button-primary" href="https://wa.me/5491133393228?text=Hola%20GastroQode%2C%20quiero%20digitalizar%20mi%20men%C3%BA" target="_blank" rel="noreferrer">Quiero mi menú digital <ArrowRight size={18} /></a><a className="text-link" href="#casos">Ver cómo funciona <span>↓</span></a></div><div className="hero-proof"><div className="avatar-stack"><span>LM</span><span>BA</span><span>RF</span></div><p><strong>Restaurantes que ya evolucionaron</strong><br />con una experiencia más visual</p></div></motion.div></div><div className="hero-visual"><motion.div className="hero-image-wrap" initial={{ opacity: 0, scale: .95, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .7, delay: .15 }}><img src={menuMockup} alt="Menú digital GastroQode en un restaurante" width={1024} height={1280} /></motion.div><motion.div className="floating-card floating-qr" animate={{ y: [0, -14, 0], rotateY: [-7, 7, -7], rotateX: [4, -3, 4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><QrTile /></motion.div><motion.div className="floating-card floating-update" animate={{ y: [0, 10, 0], rotateY: [4, -5, 4] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}><span className="update-icon"><Clock3 size={18} /></span><div><strong>Actualizado</strong><small>Hace un instante</small></div><CircleCheck size={20} /></motion.div></div></section>;
}

function SectionTitle({ kicker, title, text }: { kicker: string; title: ReactNode; text?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span /> {kicker}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div>;
}

function Services() {
  return <section id="servicios" className="section services"><SectionTitle kicker="Lo que ofrecemos" title={<>Todo lo que tu carta necesita.<br /><em>Nada que no.</em></>} text="Una experiencia digital pensada para que tu negocio venda mejor y trabaje más simple." /><div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <TiltCard className="service-card" key={title}><span className="service-number">{number}</span><span className="service-icon"><Icon size={25} /></span><h3>{title}</h3><p>{text}</p></TiltCard>)}</div></section>;
}

// Videos de cada teléfono, en orden de izquierda a derecha.
// Para reemplazar un video, cambiá el import correspondiente:
// UPLOAD YOUR VIDEO HERE: video-1-mailo.mp4 / video-2-kaiyo.mp4 / video-3-coffee-house.mp4 / video-4-smashed-babies.mp4
const caseStudies = [
  { video: video1Mailo.url /* video-1-mailo.mp4 */, poster: mailoBg.url, tag: "Bodegón", name: "Mailo", menu: "https://lucasfelice10.github.io/Menu-Bodegon-/", qr: mailoQr.url, quote: "¡Las ventas de Mailo subieron un 30% en un mes!", author: "Juan, dueño" },
  { video: video2Kaiyo.url /* video-2-kaiyo.mp4 */, poster: kaiyoBg.url, tag: "Sushi", name: "Kaiyo", menu: "https://lucasfelice10.github.io/Sushi-Kaiyo/", qr: kaiyoQr.url, quote: "A los clientes les encanta ver el menú digital y sus fotos.", author: "Kenji, dueño" },
  { video: video3CoffeeHouse.url /* video-3-coffee-house.mp4 */, poster: coffeeHouseBg.url, tag: "Cafetería", name: "Coffee House", menu: "https://lucasfelice10.github.io/Coffee-House-Menu/", qr: coffeeHouseQr.url, quote: "Es súper ágil y dinámico para el café de todos los días.", author: "Laura, dueña" },
  { video: video4SmashedBabies.url /* video-4-smashed-babies.mp4 */, poster: smashedBabiesBg.url, tag: "Hamburguesería", name: "Smashed Babies", menu: "https://lucasfelice10.github.io/Hamburgueseria-Menu/", qr: smashedBabiesQr.url, quote: "¡Un antes y un después en nuestro servicio al cliente!", author: "Tomás, dueño" },
];

function Stars() {
  return <div className="stars" aria-label="5 de 5 estrellas">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>;
}

function Cases() {
  return <section id="casos" className="cases"><div className="cases-inner"><SectionTitle kicker="Casos de éxito" title={<>Menús que se miran.<br /><em>Platos que se eligen.</em></>} /><div className="phone-grid">{caseStudies.map(c => <div className="phone-col" key={c.name}><article className="phone"><div className="phone-screen"><video className="phone-video" src={c.video} poster={c.poster} autoPlay loop muted playsInline preload="metadata" aria-label={`Video de la carta digital de ${c.name}`} /><span className="phone-notch" /><a className="glass-badge" href={c.menu} target="_blank" rel="noreferrer" aria-label={`Abrir la carta digital de ${c.name}`}><img src={c.qr} alt={`Código QR de la carta digital de ${c.name}`} /><span>ESCANEÁ</span></a><div className="phone-review"><p className="review-tag">{c.tag} · <strong>{c.name}</strong></p><Stars /><p className="review-quote">“{c.quote}”</p><p className="review-author">— {c.author}</p></div></div></article></div>)}</div></div></section>;
}

function Comparison() {
  const digital = ["Fotos reales que despiertan el apetito", "Cambios de precio en minutos", "Sin reimpresiones ni costos extra", "Cartas especiales cuando quieras"];
  const paper = ["El cliente imagina cada plato", "Precios desactualizados", "Se mancha, rompe y desgasta", "Reimprimir por cada cambio"];
  return <section id="comparativa" className="section comparison"><SectionTitle kicker="Ventajas y desventajas" title={<>La diferencia se ve.<br /><em>Y se nota en la mesa.</em></>} /><div className="compare-grid"><article className="compare-card digital"><span className="compare-badge"><QrCode size={18} /> MENÚ GastroQode</span><h3>Una carta que<br />trabaja para vos.</h3><ul>{digital.map(item => <li key={item}><CircleCheck size={21} />{item}</li>)}</ul><div className="compare-stat"><strong>100%</strong><span>visual, actualizable<br />y siempre disponible</span></div></article><article className="compare-card paper"><span className="compare-badge">MENÚ DE PAPEL</span><h3>Una carta que<br />quedó en el pasado.</h3><ul>{paper.map(item => <li key={item}><CircleX size={21} />{item}</li>)}</ul><div className="paper-lines"><span /><span /><span /></div></article></div></section>;
}

const baseFeatures = ["Diseño visual adaptado a tu marca", "Código QR personalizado listo para usar", "Cambios de contenido programados desde el inicio", "Soporte personalizado online"];
const plans = [
  { name: "Base", tier: "Inicial", text: "Ideal para cartas estables con pocos cambios.", featured: false, items: [...baseFeatures.map(t => [t, true] as const), ["Cantidad mínima de cambios mensuales en la carta", true] as const, ["Sin auditoría presencial, solo online", false] as const] },
  { name: "Medio", tier: "Intermedio", text: "Para restaurantes que renuevan platos y precios seguido.", featured: true, items: [...baseFeatures.map(t => [t, true] as const), ["Cantidad media de cambios mensuales en la carta", true] as const, ["Auditoría presencial incluida", true] as const] },
  { name: "Alto", tier: "Completo", text: "Para cartas dinámicas, eventos y propuestas de temporada.", featured: false, items: [...baseFeatures.map(t => [t, true] as const), ["Cantidad alta de cambios mensuales en la carta", true] as const, ["Auditoría presencial y online incluida", true] as const] },
];

function Pricing() {
  return <section id="planes" className="pricing"><div className="pricing-inner tiers"><div className="pricing-head"><p className="eyebrow light"><span /> Planes</p><h2>Elegí tu ritmo.<br /><em>A tu medida.</em></h2><p className="pricing-copy">Tres planes pensados para el ritmo de cambios de tu carta. El precio lo conversamos según tu restaurante.</p></div><div className="plan-grid">{plans.map(p => <motion.article key={p.name} className={p.featured ? "price-card featured" : "price-card"} whileHover={{ y: -6, rotateX: 1.5 }}>{p.featured && <span className="plan-badge">Más elegido</span>}<p className="plan-label">PLAN {p.name.toUpperCase()}</p><div className="price"><strong>{p.name}</strong><span>plan<br />{p.tier.toLowerCase()}</span></div><p className="plan-text">{p.text}</p><div className="divider" /><ul>{p.items.map(([item, ok]) => <li key={item} className={ok ? "feat-yes" : "feat-no"}>{ok ? <Check size={17} /> : <X size={17} />}{item}</li>)}</ul><a className="button-primary full" href={`https://wa.me/5491133393228?text=${encodeURIComponent(`Hola GastroQode, me interesa el plan ${p.name}`)}`} target="_blank" rel="noreferrer">Quiero este plan <ArrowRight size={18} /></a></motion.article>)}</div></div></section>;
}

function FAQ() {
  const [active, setActive] = useState(0);
  return <section id="preguntas" className="section faq"><SectionTitle kicker="Preguntas frecuentes" title={<>Todo claro,<br /><em>desde el principio.</em></>} /><div className="faq-list">{faqs.map(([question, answer], index) => <div className={active === index ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><ChevronDown size={22} /></button><motion.div initial={false} animate={{ height: active === index ? "auto" : 0, opacity: active === index ? 1 : 0 }} className="faq-answer"><p>{answer}</p></motion.div></div>)}</div></section>;
}

function Contact() {
  return <><section id="contacto" className="contact"><div className="contact-deco"><QrTile /></div><p className="eyebrow centered"><span /> Empecemos</p><h2>Tu próxima carta<br />puede ser <em>extraordinaria.</em></h2><p>Contanos sobre tu restaurante. Nosotros te mostramos cómo llevarlo al siguiente nivel.</p><a className="whatsapp-button" href="https://wa.me/5491133393228?text=Hola%20GastroQode%2C%20quiero%20mejorar%20la%20carta%20de%20mi%20restaurante" target="_blank" rel="noreferrer"><MessageCircle size={22} /> Escribinos por WhatsApp <ArrowRight size={18} /></a></section><section id="seguridad" className="security"><h3>Políticas de seguridad</h3><div className="security-grid"><div><h4>Protección de datos</h4><p>Tratamos la información de tu restaurante y de tus clientes con estricta confidencialidad. Solo recopilamos los datos necesarios para prestar el servicio y nunca los vendemos ni compartimos con terceros sin tu autorización.</p></div><div><h4>Seguridad de la información</h4><p>Tus cartas se alojan en servidores seguros con conexiones cifradas (HTTPS). El acceso a la gestión del contenido está restringido al equipo autorizado y se registra cada modificación.</p></div><div><h4>Privacidad de los comensales</h4><p>Escanear el QR no requiere registro, descargas ni datos personales. No usamos el menú para rastrear ni identificar a las personas que lo consultan.</p></div><div><h4>Tus derechos</h4><p>Podés solicitar en cualquier momento el acceso, la corrección o la eliminación de tu información escribiéndonos por WhatsApp. Respondemos cada pedido a la brevedad.</p></div></div></section><footer><Brand /><p>Menús digitales que dan ganas.</p><span>© 2026 GastroQode. Todos los derechos reservados.</span><p className="dvl-credit">Desarrollado por <a href="https://lucasfeliceportfolio.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>DVL Developer</strong></a></p></footer></>;
}

function Index() {
  return <div className="page"><Header /><main><Hero /><Services /><Cases /><Comparison /><Pricing /><FAQ /><Contact /></main></div>;
}