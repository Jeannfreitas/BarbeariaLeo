import {Clock} from 'lucide-react';import {site} from '../config/site';

export default function Hours(){return <div className="rounded-3xl border border-line bg-panel p-6"><h3 className="font-serif text-xl flex items-center gap-2 mb-4"><Clock className="text-gold" size={20}/>Horário de funcionamento</h3>
<ul className="divide-y divide-line">{site.hours.map(h=><li key={h.label} className="flex justify-between py-3"><span>{h.label}</span><span className={h.open?'text-zinc-300':'text-zinc-500'}>{h.open?`${h.open} às ${h.close}`:'Fechado'}</span></li>)}</ul></div>}