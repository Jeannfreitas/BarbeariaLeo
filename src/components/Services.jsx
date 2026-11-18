import {Scissors} from 'lucide-react';import {site,brl} from '../config/site';import Reveal from './Reveal';import SectionTitle from './SectionTitle';
export default function Services({onSelect}){return <section id="servicos" className="py-20 bg-panel/50"><div className="wrap"><SectionTitle kicker="O que fazemos" title="Serviços e preços"/>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{site.services.map((s,i)=><Reveal key={s.id}><article className="h-full rounded-3xl border border-line bg-panel p-6 flex flex-col gap-3 transition hover:-translate-y-1 hover:border-gold">
<div className="flex justify-between items-start"><Scissors className="text-gold"/><span className="font-serif text-3xl text-zinc-700">{String(i+1).padStart(2,'0')}</span></div>
<h3 className="font-serif text-xl font-semibold">{s.name}</h3><p className="text-sm text-zinc-400 flex-1">{s.description}</p>
<div className="flex items-end justify-between mt-2"><div><p className="font-serif text-2xl text-gold">{brl(s.price)}</p><p className="text-xs text-zinc-500">{s.duration} min</p></div>
<a href="#agendamento" onClick={()=>onSelect(s.id)} className="text-xs tracking-widest uppercase font-semibold hover:text-gold">Agendar →</a></div></article></Reveal>)}</div></div></section>}
