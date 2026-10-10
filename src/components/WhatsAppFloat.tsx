import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(
        "Merhaba! Kapadokya aktiviteleri hakkında bilgi almak istiyorum."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile hızlı rezervasyon"
      className="animate-wa-pulse group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-xl transition-all duration-300 hover:gap-2.5 hover:pr-6"
    >
      <MessageCircle className="h-6 w-6 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[10rem]">
        Hemen Yaz, Kapıyoruz
      </span>
    </a>
  );
}
