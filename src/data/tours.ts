export type TourCategory = "hava" | "macera" | "kultur";

export interface TourItineraryStop {
  time: string;
  title: string;
  description: string;
}

export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  category: TourCategory;
  categoryLabel: string;
  summary: string;
  description: string[];
  price: number;
  oldPrice?: number;
  priceUnit: string;
  duration: string;
  difficulty: "Çok Kolay" | "Kolay" | "Orta" | "Orta Zor";
  groupSize: string;
  languages: string[];
  pickupIncluded: boolean;
  rating: number;
  reviewCount: number;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: TourItineraryStop[];
  faq: { question: string; answer: string }[];
  badge?: string;
}

export const categoryLabels: Record<TourCategory, string> = {
  hava: "Hava Aktiviteleri",
  macera: "Macera & Adrenalin",
  kultur: "Kültür & Romantizm",
};

export const tours: Tour[] = [
  {
    slug: "kapadokya-balon-turu",
    title: "Kapadokya Sıcak Hava Balonu Turu",
    shortTitle: "Sıcak Hava Balonu",
    category: "hava",
    categoryLabel: "Hava Aktiviteleri",
    summary:
      "Gün doğumunda peri bacalarının üzerinde süzül. Kapadokya'nın efsanevi manzarasını kuşbakışı gör, ömür boyu hatırlayacağın bir deneyim yaşa.",
    description: [
      "Sabahın ilk ışıklarıyla, henüz karanlık çökmemişken otelinden alınıp kalkış alanına geliyorsun. Dev balonlar şişirilirken sıcak çay ve kahve eşliğinde bu büyülü anı izliyorsun.",
      "Kalkış anı... Ayakların yavaş yavaş yerden kesiliyor ve Kapadokya, altında 100'e yakın balonla birlikte gün doğumunun kızıllığında ayaklarının altına seriliyor. Aşk Vadisi, Güvercinlik Vadisi, peri bacaları... Pilotun rotayı rüzgâra göre çiziyor, her uçuş eşsiz oluyor.",
      "İniş sonrası sertifika töreni ve kutlama ikramlarıyla uçuşu taçlandırıyoruz. Profesyonel fotoğrafçımızın çektiği kareler de dahil — sen sadece manzaraya dal.",
    ],
    price: 2450,
    oldPrice: 2900,
    priceUnit: "/ kişi",
    duration: "3-4 saat (60-80 dk uçuş)",
    difficulty: "Çok Kolay",
    groupSize: "Kovan başı 16-24 kişi",
    languages: ["Türkçe", "İngilizce"],
    pickupIncluded: true,
    rating: 4.9,
    reviewCount: 612,
    heroImage: "/images/hero-balon.jpg",
    gallery: [
      "/images/hero-balon.jpg",
      "/images/balon-2.jpg",
      "/images/balon-3.jpg",
      "/images/balon-4.jpg",
    ],
    highlights: [
      "Gün doğumu anında 60-80 dakika uçuş",
      "100+ balonlu efsanevi manzara",
      "Uçuş sonrası sertifikalı kutlama",
      "Telsiz ile anlık pilot anlatımı",
    ],
    included: [
      "Otelden alma ve bırakma (Göreme, Ürgüp, Uçhisar, Avanos, Çavuşin)",
      "60-80 dakika balon uçuşu",
      "Sıcak ikramlar (çay, kahve, simit)",
      "Uçuş sertifikası ve kutlama ikramı",
      "Uçuş ve yolcu sigortası",
      "Profesyonel fotoğraf çekimi",
    ],
    excluded: [
      "Video çekimi (USB ile satın alınabilir)",
      "Baloncuğun bahşişi (isteğe bağlı)",
    ],
    itinerary: [
      {
        time: "04:30 - 05:00",
        title: "Otelinden Alma",
        description:
          "Konaklama bölgenizden araçla alınır, kalkış alanına ulaştırılırsın.",
      },
      {
        time: "05:00 - 05:45",
        title: "Balon Hazırlığı & Kahvaltı",
        description:
          "Balonların şişirilişini izler, sıcak içecekler eşliğinde güvenlik brifingini alırsın.",
      },
      {
        time: "05:45 - 07:00",
        title: "Uçuş",
        description:
          "Gün doğumuyla birlikte 60-80 dakikalık büyülü uçuş. Peri bacaları ve vadiler ayaklarının altında.",
      },
      {
        time: "07:00 - 07:45",
        title: "İniş & Kutlama",
        description:
          "Sertifika töreni, kutlama ikramları ve fotoğraf çekimi sonrası oteline bırakılırsın.",
      },
    ],
    faq: [
      {
        question: "Balon uçuşu iptal olursa ne oluyor?",
        answer:
          "Uçuşlar tamamen hava şartlarına bağlıdır; SHGM (Sivil Havacılık) izin vermezse uçuş yapılmaz. Bu durumda ücretin anında iade edilir ya da tarihin ertelenir — karar tamamen senin.",
      },
      {
        question: "Hamileler balona binebilir mi?",
        answer:
          "Güvenlik gereği hamilelik, ağır kalp-basınç rahatsızlıkları ve son 6 ay içinde yapılan büyük ameliyatlar için uçuş önerilmez.",
      },
      {
        question: "Ne giymeliyim?",
        answer:
          "Sabah serin olur; kat kat giyin. Rahat ayakkabı şart — iniş anında ayakta durursun. Yaz aylarında ince bir hırka, kış aylarında bere ve eldiven ideal.",
      },
      {
        question: "Uçuş saatleri neden bu kadar erken?",
        answer:
          "Balonlar sadece gün doğumu öncesi ve sonrası, hava akımı en sakin olduğunda uçabilir. Bu yüzden uçuşlar şafakta yapılır — manzaranın en kızıllığı da tam o saatte gelir.",
      },
      {
        question: "Çocuklar binebilir mi?",
        answer:
          "6 yaşından büyük çocuklar yetişkinle birlikte binebilir. 6 yaş altı için sepet güvenliği nedeniyle uçuş önerilmez.",
      },
    ],
    badge: "En Çok Tercih Edilen",
  },
  {
    slug: "kapadokya-atv-safari-gun-batimi",
    title: "Kapadokya ATV Safari – Gün Batımı Turu",
    shortTitle: "ATV Safari",
    category: "macera",
    categoryLabel: "Macera & Adrenalin",
    summary:
      "Kendi ATV'ni sür, tozunun içinde gün batımına koş. Aşk Vadisi, Kızılçukur ve Güvercinlik Vadisi'nde toz-bulutlu 2 saatlik macera.",
    description: [
      "Eğitim ve deneme turundan sonra ATV'ni sen sürüyorsun — önde rehberin, arkanda konvoy. İstersen tek kişilik, istersen yanında biriyle (2 kişi tek araç) katılabilirsin.",
      "Rota güzergâhında aşina olmadığın patikalar, nehir yatakları ve vadi içi yollar var. Güneş yavaş yavaş Kızılçukur'un üzerinden kayarken ilk fotoğraf molasını veriyorsun.",
      "Gün batımının tam kızıllığında Sunset Point'e ulaşıyorsun. Peri bacaları turuncuya dönüyor, kamera sana yetişemiyor. Dönüşte hafif kafa lambalarıyla gece vadi yollarından geçip bölgenize bırakılıyorsun.",
    ],
    price: 850,
    oldPrice: 1100,
    priceUnit: "/ araç (2 kişi)",
    duration: "2 saat",
    difficulty: "Orta",
    groupSize: "Maksimum 12 araç",
    languages: ["Türkçe"],
    pickupIncluded: true,
    rating: 4.8,
    reviewCount: 341,
    heroImage: "/images/atv-safari.jpg",
    gallery: [
      "/images/atv-safari.jpg",
      "/images/red-valley.jpg",
      "/images/love-valley-2.jpg",
      "/images/peri-bacalari-pano.jpg",
    ],
    highlights: [
      "Gün batımı anında Sunset Point molası",
      "Ehliyet gerektirmeyen kolay sürüş",
      "Maske ve gözlük dahil ekipman",
      "Aşk Vadisi + Kızılçukur rotası",
    ],
    included: [
      "ATV (quad) kiralama ve yakıt",
      "Yüz maskesi, gözlük ve bandana",
      "Deneyimli rehber eşliğinde konvoy",
      "Otel transferi (Göreme çevresi)",
      "Kask ve sigorta",
    ],
    excluded: ["Bebek koltuğu", "Kişisel harcamalar", "Video kaydı"],
    itinerary: [
      {
        time: "1 saat önce",
        title: "Otelinden Alma",
        description:
          "Sunset saatine göre 60-90 dakika önce otelinden alınırsın.",
      },
      {
        time: "0 - 20. dakika",
        title: "Eğitim & Deneme",
        description:
          "ATV tanıtımı, sürüş eğitimi ve kısa deneme turu. İlk kez sürseler de rahat ederler.",
      },
      {
        time: "20 - 70. dakika",
        title: "Vadi Rotaları",
        description:
          "Aşk Vadisi, Güvercinlik Vadisi ve nehir yatağı patikalarında konvoy sürüşü.",
      },
      {
        time: "70 - 120. dakika",
        title: "Sunset Point & Dönüş",
        description:
          "Gün batımı molası, fotoğraf çekimi ve ışıklı dönüş turu. Sonrasında oteline bırakılırsın.",
      },
    ],
    faq: [
      {
        question: "Ehliyet gerekiyor mu?",
        answer:
          "ATV'ler özel ruhsatla yoldan değil, vadi patikalarından gider; ehliyet gerekmez. Yine de en az 17 yaşında olman sürüş için gerekli, küçükler yetişkin yanında arkada oturabilir.",
      },
      {
        question: "Çok toz oluyor mu?",
        answer:
          "Evet, macera bundan ibaret 🙂 Ama endişelenme: yüz maskesi, gözlük ve bandana dahildir. Yanına bir gömlek al, tur sonunda değiştirirsin.",
      },
      {
        question: "İki kişi tek ATV'ye binebilir mi?",
        answer:
          "Binebilir. Fiyat araç içindir; istersen iki kişi paylaşıp sırayla sürersün, istersen tek başına sürersin.",
      },
      {
        question: "Yağmurda tur yapılıyor mu?",
        answer:
          "Hafif yağmurda tur genellikle yapılır (çamurlu ama eğlenceli); sağanakta güvenlik için iptal olur ve ücret iade ya da erteleme yapılır.",
      },
    ],
    badge: "Macera Severlere",
  },
  {
    slug: "kapadokya-at-turu-vadiler",
    title: "Kapadokya At Turu – Vadilerde Süvari",
    shortTitle: "At Turu",
    category: "macera",
    categoryLabel: "Macera & Adrenalin",
    summary:
      "Kapadokya'yı 'Yapraklı At Bölgesi' denir ama asıl at diyarıdır burası. Vadilerde 2 saatlik sakin at gezisi — ilk kez bile olsa rahatça bin.",
    description: [
      "Kapadokya adının Persça karşılığı 'Güzel Atlar Diyarı'. Bu turda vadinin atlarına binip yüzlerce yıl öncesinden kalan patikaları izliyorsun.",
      "Atlar sakin ve eğitimli; ilk kez binsen bile 10 dakikalık alışma sonrası rahat ediyorsun. Yanında yürüyen eğitmenimiz her adımda yanında oluyor.",
      "Güvercinlik Vadisi'nin kayalıkları arasında, zeytin ağaçlarının altından geçerek Aşk Vadisi'ne ulaşıyorsun. Rotanın ortasında kısa mola ve fotoğraf çekimi var.",
    ],
    price: 750,
    priceUnit: "/ kişi",
    duration: "2 saat",
    difficulty: "Kolay",
    groupSize: "Maksimum 8 kişi",
    languages: ["Türkçe"],
    pickupIncluded: true,
    rating: 4.7,
    reviewCount: 189,
    heroImage: "/images/at-turu.jpg",
    gallery: [
      "/images/at-turu.jpg",
      "/images/at-turu-2.jpg",
      "/images/at-turu-3.jpg",
      "/images/love-valley.jpg",
    ],
    highlights: [
      "Eğitimli, sakin atlarla güvenli sürüş",
      "İlk kez binenler için uygun",
      "Güvercinlik ve Aşk Vadisi rotası",
      "Küçük grup, kişisel ilgi",
    ],
    included: [
      "2 saat at sürüşü (eğitimli atlar)",
      "Kask ve ekipman",
      "Deneyimli eğitmen eşliğinde",
      "Otel transferi (Göreme merkez)",
      "Sigorta",
    ],
    excluded: ["Yemek ve içecek", "Bahşiş (isteğe bağlı)"],
    itinerary: [
      {
        time: "0 - 15. dakika",
        title: "Karşılama & Eğitim",
        description:
          "Çiftlikte karşılanma, at tanıma ve temel sürüş eğitimi.",
      },
      {
        time: "15 - 30. dakika",
        title: "Deneme Sürüşü",
        description:
          "Padok içinde kısa deneme, rahat edene kadar eşlik.",
      },
      {
        time: "30 - 105. dakika",
        title: "Vadi Turu",
        description:
          "Güvercinlik Vadisi patikalarından Aşk Vadisi'ne, mola ve fotoğraf çekimiyle.",
      },
      {
        time: "105 - 120. dakika",
        title: "Dönüş",
        description:
          "Çiftliğe dönüş, atlarla vedalaşma ve oteline transfer.",
      },
    ],
    faq: [
      {
        question: "Hiç at bınmadım, sorun olur mu?",
        answer:
          "Hiç sorun olmaz. Atlarımızın hepsi turistlerle çalışan, sakin ve eğitimli atlardır. Eğitmenimiz tüm tur boyunca yanında yürür.",
      },
      {
        question: "Ağırlık sınırı var mı?",
        answer:
          "At sağlığı için 95 kg üstü misafirlerimizi kabul edemiyoruz. Bu, tüm dünya at çiftlikleri için standart bir kurallardır.",
      },
      {
        question: "Çocuklar binebilir mi?",
        answer:
          "6 yaş üstü çocuklar aile büyüğüyle birlikte binebilir. 6-12 yaş arası çocuklar eğitmen yönlendirmesiyle biner.",
      },
      {
        question: "Hangi saatlerde yapılıyor?",
        answer:
          "Sabah 09:00, öğlen 13:00 ve gün batımı öncesi 16:30 (yazın 17:30) turları var. Gün batımı turu en çok tercih edilenidir.",
      },
    ],
  },
  {
    slug: "kapadokya-klasik-arac-safari",
    title: "Kapadokya Klasik Araç Safari",
    shortTitle: "Klasik Araç Turu",
    category: "kultur",
    categoryLabel: "Kültür & Romantizm",
    summary:
      "Restore edilmiş klasik araçlarla vadilerde nostaljik yolculuk. Şoförü bizden, manzarayı sen seç — evlilik teklifleri ve özel günler için de kiralanır.",
    description: [
      "1960-70'lerden kalma restore edilmiş klasik araçlarımızla vadi yolculuğu. Kendi aracını sürmüyorsun — arkan yaslanmış koltukta, manzara akıp gidiyor.",
      "Rota: Güvercinlik Vadisi, Göreme Panorama, Aşk Vadisi ve istersen Uçhisar Kalesi. Arzu ettiğin noktada mola veriyor, fotoğraf çekimlerine ayırıyoruz.",
      "Özel günler için süsleme ve fotoğrafçı ekleyebiliyoruz. Dönemsel olarak gün batımı saatlerinde yoğunluk olur, erken ayırtmanı öneririz.",
    ],
    price: 3200,
    priceUnit: "/ araç (maks. 3 kişi)",
    duration: "2 saat",
    difficulty: "Çok Kolay",
    groupSize: "Araç başı 3 kişi",
    languages: ["Türkçe", "İngilizce"],
    pickupIncluded: true,
    rating: 4.9,
    reviewCount: 156,
    heroImage: "/images/klasik-arac.jpg",
    gallery: [
      "/images/klasik-arac.jpg",
      "/images/goreme-teras-pano.jpg",
      "/images/red-valley-2.jpg",
      "/images/love-valley.jpg",
    ],
    highlights: [
      "Restore klasik araç + özel şoför",
      "İstediğin noktada fotoğraf molası",
      "Evlilik teklifi paketi eklenebilir",
      "Özel gün süslemesi opsiyonu",
    ],
    included: [
      "2 saat klasik araç kullanımı (şoförlü)",
      "Otel alma-bırakma",
      "Su ve ferahlatıcı ikram",
      "Fotoğraf molası noktaları",
      "Sigorta",
    ],
    excluded: [
      "Fotoğrafçı hizmeti (ek paket)",
      "Süsleme ve özel gün paketleri (ek ücret)",
    ],
    itinerary: [
      {
        time: "0. dakika",
        title: "Otelinden Alma",
        description:
          "Klasik araç otelin önüne gelir, yolculuk burada başlar.",
      },
      {
        time: "0 - 30. dakika",
        title: "Güvercinlik Vadisi",
        description:
          "İlk rota noktası: güvercinlik oyuklarıyla kaplı kayalıklar ve vadi panoraması.",
      },
      {
        time: "30 - 60. dakika",
        title: "Göreme Panorama & Aşk Vadisi",
        description:
          "Şehrin en iyi manzara noktalarında molalar, fotoğraf çekimi.",
      },
      {
        time: "60 - 120. dakika",
        title: "Uçhisar & Dönüş",
        description:
          "İstersen Uçhisar Kalesi eteklerinde son mola, ardından oteline bırakma.",
      },
    ],
    faq: [
      {
        question: "Kendim sürebilir miyim?",
        answer:
          "Hayır, klasik araçlarımız turist amaçlı şoförlü hizmet verir. Ama şoförümüz istersen koltuğu değiştirip kısa mesafe 'anonim şoför' fotoğrafı için seni direksiyona geçirebilir 🙂",
      },
      {
        question: "Evlilik teklifi için nasıl bir paket var?",
        answer:
          "Teklif noktası rezervasyonu, çiçek süslemesi, fotoğrafçı ve Video klipleri içeren paketlerimiz var. WhatsApp'tan yazın, detayları birlikte planlayalım.",
      },
      {
        question: "3 kişiden fazlası binebilir mi?",
        answer:
          "Araçların yapısı gereği en fazla 3 yolcu alınabiliyor. Kalabalık gruplar için 2 araç ayarlayabiliriz.",
      },
    ],
    badge: "Romantik Kaçamak",
  },
  {
    slug: "kapadokya-semazen-turk-gecesi",
    title: "Kapadokya Semazen & Türk Gecesi",
    shortTitle: "Türk Gecesi",
    category: "kultur",
    categoryLabel: "Kültür & Romantizm",
    summary:
      "Sema töreninin huzuruna var, ardından Anadolu folkloru, halay ve canlı müzikle dolu bir gece. Yemek, sınırsız yerel içecek ve gösteri dahil.",
    description: [
      "Gecenin ilk yarısında 700 yıllık Mevlevi Sema töreni: semazenlerin dönmesi sadece bir gösteri değil, bir ibadet ritüeli. Sessizlik ve huzur içinde izliyorsun.",
      "Ardından sahne renkleniyor: yöresel kostümler içinde halk oyunları, halay, Çiftetelli ve Anadolu'nun dört bir yanından danslar. Canlı müzik, davul-zurna enerjisi.",
      "Akşam yemeği ve sınırsız yerel içecek dahil. Tur sonunda oteline bırakılıyorsun — geç saatte güvenli transfer garanti.",
    ],
    price: 650,
    priceUnit: "/ kişi",
    duration: "3,5 saat (20:00 - 23:30)",
    difficulty: "Çok Kolay",
    groupSize: "Sınırsız, masalar halinde",
    languages: ["Türkçe"],
    pickupIncluded: true,
    rating: 4.8,
    reviewCount: 267,
    heroImage: "/images/sema.jpg",
    gallery: [
      "/images/sema.jpg",
      "/images/turk-gecesi.jpg",
      "/images/turk-gecesi-2.jpg",
      "/images/sema-2.jpg",
    ],
    highlights: [
      "Orijinal Mevlevi Sema töreni gösterimi",
      "Anadolu halk dansları ve halay",
      "Akşam yemeği + sınırsız yerel içecek",
      "Gece boyu canlı müzik",
    ],
    included: [
      "Akşam yemeği (açık büfe veya servis menü)",
      "Sınırsız yerel içecek (alkollü/alkolsüz)",
      "Sema töreni ve folklor gösterileri",
      "Otel alma-bırakma (Göreme, Ürgüp, Avanos)",
      "Tüm gösteriler ve etkinlikler",
    ],
    excluded: ["İçeaktarma (shisha) servisleri", "Kişisel harcamalar"],
    itinerary: [
      {
        time: "20:00",
        title: "Otelinden Alma",
        description: "Konaklamanızdan araçla alınır, mekâna getirilirsin.",
      },
      {
        time: "20:30 - 21:00",
        title: "Hoş Geldiniz & Yemek",
        description:
          "İçecek eşliğinde akşam yemeği, lokal müzik ile karşılama.",
      },
      {
        time: "21:00 - 21:30",
        title: "Sema Töreni",
        description:
          "Mevlevi semazenlerin tören gösterimi — sessiz ve huzurlu bir bölüm.",
      },
      {
        time: "21:30 - 23:00",
        title: "Halk Oyunları & Canlı Müzik",
        description:
          "Anadolu dansları, halay, Çiftetelli ve davul-zurna enerjisi.",
      },
      {
        time: "23:00 - 23:30",
        title: "Transfer",
        description: "Oteline güvenli bırakma.",
      },
    ],
    faq: [
      {
        question: "Sema töreni sadece gösteri mi?",
        answer:
          "Tören, Mevlevi kültüründe bir ibadet ritüelidir. Gösterim sırasında alkış, fotoğraf flaşı ve konuşma yapılmaz — bu saygı çerçevesindedir.",
      },
      {
        question: "Vejetaryen menü var mı?",
        answer:
          "Evet, rezervasyonda belirtmen yeterli. Vejetaryen ve (talep üzerine) glutensiz seçenek sunulur.",
      },
      {
        question: "Çocuklarla uygun mu?",
        answer:
          "Uygun. Aileler sıkça gelir; 0-6 yaş çocuklar ücretsiz, 7-12 yaş %50 indirimlidir.",
      },
      {
        question: "Fotoğraf çekilebiliyor mu?",
        answer:
          "Sema töreni sırasında flaşsız çekim serbest, folklor bölümünde her şey serbest. Kendi kamera ekibimiz de çekim yapar, sonrasında satın alma opsiyonu olur.",
      },
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
