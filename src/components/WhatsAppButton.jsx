import { MessageCircle } from "lucide-react";
import { site } from "../config/site";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Olá! Gostaria de tirar dúvidas ou agendar um horário.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full grid place-items-center shadow-lg transition hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  );
}