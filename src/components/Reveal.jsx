import {useEffect,useRef,useState} from 'react';
export default function Reveal({children,className=''}){const r=useRef(null);const [v,setV]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[]);
return <div ref={r} className={`transition duration-700 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${v?'opacity-100 translate-y-0':'opacity-0 translate-y-6'} ${className}`}>{children}</div>}
