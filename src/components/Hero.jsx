import {site} from '../config/site';
import img from '../assets/hero.jsx.png';

const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Olá! Gostaria de agendar um horário.`;

export default function Hero(){return <section id="inicio" className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden">
<img src={img} alt="Barbeiro finalizando um corte degradê" className="absolute inset-0 size-full object-cover object-[78%_center] opacity-40"/><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30"/>
<div className="wrap relative"><p className="text-gold tracking-[.4em] text-xs mb-4">BARBEARIA</p><h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold max-w-3xl leading-tight">{site.name}</h1>
<p className="mt-5 max-w-xl text-lg text-zinc-300">{site.tagline}</p><div className="mt-8 flex flex-wrap gap-3"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-gold">Agendar agora</a><a href="#servicos" className="btn btn-line">Conheça nossos serviços</a></div></div></section>}