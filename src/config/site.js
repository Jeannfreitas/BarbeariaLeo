// ÚNICO arquivo a editar para personalizar o site. Valores marcados como EXEMPLO são provisórios.
export const site={
  name:'Barbearia do Leozão',
  tagline:'Seu estilo começa aqui. Mais que um corte, uma experiência.',
  phone:'(21) 99441-6098',
  whatsapp:'5521994416098', // Atualizado para o formato correto (DDI+DDD+número, apenas dígitos)
  instagram:'Leozão do Corte', instagramUrl:'https://www.instagram.com/leozaodocorte',
  address:{street:'Bergamo, 320 lote 5',district:'benfica',city:'Rio de Janeiro - RJ'},
  hours:[ // days: 0=domingo ... 6=sábado. open/close null = fechado
    {label:'Segunda a sexta',days:[1,2,3,4,5],open:'09:00',close:'20:00'},
    {label:'Sábado',days:[6],open:'09:00',close:'18:00'},
    {label:'Domingo',days:[0],open:null,close:null}],
  services:[ // duration em minutos (EXEMPLO)
    {id:'corte',name:'Corte',description:'Corte na tesoura ou máquina, com acabamento e finalização.',price:40},
    {id:'corte-barba',name:'Corte + barba',description:'Combo completo: corte e barba',price:65},
    {id:'barba',name:'Barba',description:'Modelagem e acabamento da barba com navalha.',price:30},
    {id:'Sombrancelha',name:'Sombrancelha',description:'',price:10},
    {id:'reflexo alinhado',name:'Reflexo alinhado',description:'',price:70},
    {id:'Corte com pigmentacao',name:'Corte com pigmentacao',description:'Corte com pigmentacao',price:55}],
    
  about:{title:'Tradição, técnica e atendimento de verdade',
    paragraphs:[
      'Nascemos com o propósito de elevar o padrão de cuidado masculino, unindo a precisão da barbearia clássica às tendências mais atuais de corte.',
      'Aqui, cada detalhe importa: desde a recepção em um ambiente climatizado e descontraído até o acabamento na navalha, garantindo que você saia com a autoestima renovada.'
    ],
    highlights:[
      'Atendimento direto pelo WhatsApp',
      'Cortes clássicos e modernos',
      'Ambiente climatizado',
      'Produtos selecionados'
    ]},
};
export const addressLine=()=>`${site.address.street}, ${site.address.district}, ${site.address.city}`;
export const brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});