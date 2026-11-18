import {useState} from 'react';import {Menu,X} from 'lucide-react';import {site} from '../config/site';

const links=[['Início','#inicio'],['Sobre nós','#sobre'],['Serviços e preços','#servicos'],['Localização','#localizacao']];
const whatsappUrl = `https://wa.me/${site.whatsapp || '5500000000000'}?text=Olá! Gostaria de agendar um horário.`;

export default function Navbar(){const [open,setOpen]=useState(false);
return <header className="fixed top-0 inset-x-0 z-50 bg-ink/85 backdrop-blur border-b border-line"><div className="wrap h-16 flex items-center justify-between gap-3">
<a href="#inicio" className="font-serif text-lg sm:text-xl tracking-wider text-gold truncate">{site.name}</a>
<nav className="hidden lg:flex gap-7 text-sm" aria-label="Principal">{links.map(([l,h])=><a key={h} href={h} className="hover:text-gold transition">{l}</a>)}</nav>
<div className="flex items-center gap-1"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-gold !min-h-10 !px-4 text-sm">Agendar horário</a>
<button className="lg:hidden size-11 grid place-items-center cursor-pointer" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} onClick={()=>setOpen(o=>!o)}>{open?<X/>:<Menu/>}</button></div></div>
{open&&<nav className="lg:hidden border-t border-line bg-ink px-4 py-2 flex flex-col" aria-label="Menu mobile">{links.map(([l,h])=><a key={h} href={h} onClick={()=>setOpen(false)} className="min-h-12 flex items-center border-b border-line/60 last:border-0">{l}</a>)}<a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)} className="min-h-12 flex items-center text-gold font-medium">Agendar pelo WhatsApp</a></nav>}</header>}