import { site } from "@/data/site";

/** WhatsApp deep-link üretici: mesajı URL-encode edip wa.me bağlantısına çevirir. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Tur için hazır rezervasyon mesajı. */
export function waTourMessage(tourTitle: string): string {
  return `Merhaba! ${tourTitle} için rezervasyon yapmak istiyorum. Müsait tarihler ve fiyat hakkında bilgi alabilir miyim?`;
}
