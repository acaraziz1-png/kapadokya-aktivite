export interface Review {
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
  activity: string;
  platform: "Google" | "Trustpilot" | "Tripadvisor";
}

export const reviews: Review[] = [
  {
    name: "Elif Y.",
    city: "İstanbul",
    rating: 5,
    date: "Ekim 2026",
    text: "Balon turu için WhatsApp'tan yazdım, 10 dakikada döndüler. Sabah transfer tam zamanında geldi. Uçuş ömrümün en güzel anıydı — fiyat da söyledikleri gibiydi, üstüne bir kuruş istemediler.",
    activity: "Sıcak Hava Balonu",
    platform: "Google",
  },
  {
    name: "Mert K.",
    city: "Ankara",
    rating: 5,
    date: "Eylül 2026",
    text: "ATV turunda ilk kez sürmüştüm, rehber abimiz çok yardımcı oldu. Gün batımı molası efsane. Maskeleri kendileri verdiler, dönünce çamur içinde güldük durduk. Kesinlikle tavsiye.",
    activity: "ATV Safari",
    platform: "Google",
  },
  {
    name: "Zeynep A.",
    city: "İzmir",
    rating: 5,
    date: "Eylül 2026",
    text: "Klasik araçla gün batımı turunu yıldönümümüz için ayırtık. Şoför amcamız bizi manzara noktalarında indirdi, fotoğraflarımızı kendisi çekti. Sürpriz maliyet çıkmadı, her şey dahildi.",
    activity: "Klasik Araç Turu",
    platform: "Trustpilot",
  },
  {
    name: "Burak T.",
    city: "Bursa",
    rating: 4,
    date: "Ağustos 2026",
    text: "At turu güzeldi, atlar çok sakin. Tek eksik mola biraz uzundu ama manzara telafi etti. İlk kez binseniz korkmayın, eğitmenler çok dikkatli.",
    activity: "At Turu",
    platform: "Google",
  },
  {
    name: "Selin D.",
    city: "İstanbul",
    rating: 5,
    date: "Ağustos 2026",
    text: "Türk Gecesi'ni ailemle gittik. Sema töreninde herkes tüyleri ürpererek izledi. Sonrası tam bir şölen — yemek, müzik, halay... Annem 60 yaşında halayda zirve yaptı.",
    activity: "Semazen & Türk Gecesi",
    platform: "Tripadvisor",
  },
  {
    name: "Onur & Deniz",
    city: "Eskişehir",
    rating: 5,
    date: "Temmuz 2026",
    text: "Evlilik teklifi için klasik araç paketi aldık. Her şeyi onlar planladı, ben sadece 'evet' dedim. Fotoğrafçıları da harikaydı. Allah bereket versin, bu kadar özenli bir ekip görmedim.",
    activity: "Klasik Araç Turu",
    platform: "Google",
  },
  {
    name: "Gizem S.",
    city: "Antalya",
    rating: 5,
    date: "Temmuz 2026",
    text: "Balon hava yüzünden iptal oldu, para aynı gün kartıma geçti. Erteleme de teklif ettiler ama yolculuğumuz kısıtlıydı. Bu güven için bile 5 yıldız.",
    activity: "Sıcak Hava Balonu",
    platform: "Trustpilot",
  },
  {
    name: "Kerem Ö.",
    city: "Adana",
    rating: 5,
    date: "Haziran 2026",
    text: "3 günlük rota için rehber sayfalarını okuyup geldim, her dedikleri gibi çıktı. ATV + Türk Gecesi + balon kombinasyonunu önerdiler, bayıldık. Yerli acente olmasının rahatlığı burada belli.",
    activity: "ATV Safari",
    platform: "Google",
  },
];

export const platformSummary = [
  { platform: "Google", rating: "4,9", count: "812 değerlendirme" },
  { platform: "Trustpilot", rating: "4,8", count: "268 değerlendirme" },
  { platform: "Tripadvisor", rating: "5,0", count: "160 değerlendirme" },
];
