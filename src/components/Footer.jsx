import {AtSign,MapPin,Phone} from 'lucide-react';import {site,addressLine} from '../config/site';
export default function Footer(){return <footer className="border-t border-line py-10 text-sm text-zinc-400"><div className="wrap grid gap-6 sm:grid-cols-3">
<div><p className="font-serif text-xl text-gold mb-2">{site.name}</p><p>{site.tagline}</p></div>
<ul className="flex flex-col gap-2"><li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0"/>{site.phone}</li><li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0"/>{addressLine()}</li></ul>
<a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center hover:text-gold w-fit"><AtSign size={16}/>{site.instagram}</a></div>
<p className="wrap mt-8">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p></footer>}
