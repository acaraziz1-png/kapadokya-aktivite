import type { Tour } from "./tours";
import { tours } from "./tours";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  readingMinutes: number;
  tag: string;
  cover: string;
  coverAlt: string;
  content: { heading?: string; paragraphs: string[] }[];
  faq?: { question: string; answer: string }[];
  relatedTour?: { slug: string; title: string };
}

export const posts: BlogPost[] = [
  {
    slug: "kapadokya-balon-turu-fiyatlari-2026",
    title: "Kapadokya Balon Turu Fiyatları 2026: Güncel Rehber",
    description:
      "2026 yılı Kapadokya sıcak hava balonu turu fiyatları, neyin dahil olduğunu, ucuz paketlerin tuzaklarını ve doğru balon firmasını seçme ipuçları.",
    date: "2026-09-18",
    updatedAt: "2026-10-05",
    author: "Kapadokya Aktivite Ekibi",
    readingMinutes: 7,
    tag: "Fiyat Rehberi",
    cover: "/images/balon-genis.jpg",
    coverAlt:
      "Gün doğumunda Kapadokya vadilerinde uçuşa hazır balonlar ve peri bacaları",
    content: [
      {
        paragraphs: [
          "Kapadokya'ya gelirken ilk listede olan ama fiyatları hakkında en çok kafa karıştıran aktivite: sıcak hava balonu. 2026 sezonunda balon turu fiyatları kişi başı ortalama 2.000 TL ile 3.500 TL arasında değişiyor. Peki bu fark nereden geliyor? İşte bilmen gereken her şey.",
        ],
      },
      {
        heading: "2026 balon turu fiyatlarını ne belirliyor?",
        paragraphs: [
          "Fiyatı belirleyen ilk kriter kovan (sepet) büyüklüğü. 16-20 kişilik küçük kovanlar daha konforlu ve daha pahalı; 24-28 kişilik kovanlar ise ekonomik seçenektir. İkinci kriter uçuş süresi: standart 60 dakika ile 90 dakikalık uzun uçuş arasında 400-600 TL fark olur.",
          "Üçüncü kriter sezon. Nisan-Ekim arası yüksek sezonda ve bayram haftalarında fiyatlar %15-25 yükselir. Kış aylarında (özellikle Ocak-Şubat) erken rezervasyon kampanyaları yakalayabilirsin — karlı peri bacaları manzarası da cabası.",
        ],
      },
      {
        heading: "Balon turuna ne dahildir?",
        paragraphs: [
          "Standart bir balon paketinde otel transferi, 60-80 dakika uçuş, uçuş öncesi sıcak ikramlar, uçuş sonrası sertifika ve kutlama ikramı ile sigorta bulunur. Fotoğraf ve video çekimi firmaya göre dahil ya da ek ücretlidir — rezervasyon öncesi mutlaka sor.",
          "Bizim turlarımızda profesyonel fotoğraf çekimi fiyata dahildir; kareler uçuş sonrası ücretsiz paylaşılır.",
        ],
      },
      {
        heading: "Ucuz balon turlarının 3 tuzağı",
        paragraphs: [
          "Bir: Fiyata transfer dahil değil demeyi unutan firmalar — otelinden kalkış alanına taksiyle 300-500 TL daha ödersin. İki: '60 dakika uçuş' deyip fiilen 35-40 dakika havada kalan firmalar. Üç: Sigortasız ya da ruhsatsız uçan, SHGM onaylı olmayan firmalar — fiyatı ne kadar ucuz olursa olsun bunlardan uzak dur.",
          "SHGM (Sivil Havacılık Genel Müdürlüğü) belgeli firmalar, hava şartları uygun olmadığında uçuşu iptal eder ve ücreti iade eder. Ucuz paketlerde bu güvenlik kültürü ne yazık ki her zaman yoktur.",
        ],
      },
      {
        heading: "Balon fiyatı ne zaman düşer?",
        paragraphs: [
          "Son dakika boş kovanlarda indirim olabilir ama riskli bir stratejidir: yoğun sezonda boş kovan bulamazsın. En iyi fiyat/kesinlik dengesi için 1-2 ay önceden rezervasyon yap, özellikle bayram haftalarını önceden kapat.",
          "Kapadokya Aktivite olarak sezon boyu geçerli fiyat garantisi ve hava iptallerinde anında iade sunuyoruz — gizli ücret yok.",
        ],
      },
    ],
    faq: [
      {
        question: "2026 balon turu ortalama kaç para?",
        answer:
          "Standart kovanda kişi başı 2.000-3.000 TL, konfor kovanda 2.500-3.500 TL bandındadır. Transfer ve sigorta dahil olup olmadığını mutlaka kontrol et.",
      },
      {
        question: "Balon turuna çocuk fiyatı var mı?",
        answer:
          "Çoğu firmada 6-11 yaş çocuk %25-30 indirimlidir; 6 yaş altı güvenlik gereği alınmaz.",
      },
      {
        question: "Ödeme kapıda yapılabilir mi?",
        answer:
          "Bizde kapıda nakit veya kart ödeme mümkündür. İptal riskine karşı önceden ödeme isteyen firmalarda iade koşullarını mutlaka oku.",
      },
    ],
    relatedTour: { slug: "kapadokya-balon-turu", title: "Sıcak Hava Balonu Turu" },
  },
  {
    slug: "kapadokya-atv-turunda-ne-giyilir",
    title: "ATV Turunda Ne Giyilir? Tozdan Çamura Karşı Liste",
    description:
      "Kapadokya ATV safari turu için kıyafet önerileri: toz maskesi, ayakkabı seçimi, gözlük ve mevsime göre giyinme rehberi.",
    date: "2026-08-22",
    author: "Kapadokya Aktivite Ekibi",
    readingMinutes: 5,
    tag: "Hazırlık",
    cover: "/images/atv-safari.jpg",
    coverAlt:
      "Kumlu arazide sırala duran ATV quad araçlarından oluşan safari konvoyu",
    content: [
      {
        paragraphs: [
          "Kapadokya ATV turu macerasının yarısı kıyafette saklı. Doğru giyinirsen toz, çamur ve güneş sorun olmaktan çıkıp eğlencenin parçasına dönüşür. İşte yıllardır binlerce misafirimizin tecrübesiyle süzülmüş liste:",
        ],
      },
      {
        heading: "Zorunlu: kapalı ayakkabı",
        paragraphs: [
          "Sandalet, terlik ve topuklu ayakkabı kesinlikle olmaz. ATV'nin ayak kısımları açıktır; patika boyunca toz ve taş ayakkabıya girer. Eski bir spor ayakkabı idealdir — tozlanacak, favori ayakkabın olmasın.",
        ],
      },
      {
        heading: "Toz için: gözlük ve maske",
        paragraphs: [
          "Konvoy sürüşünde önündeki aracın kaldırdığı toz bulutu kaçınılmazdır. Güneş gözlüğü gözleri korur ama tozu kelepır — yüz maskesi (bandana) şart. Tüm ATV turlarımızda maske ve gözlük ücretsiz verilir, yine de kendi bandananı getirebilirsin.",
          "Kontak lens takıyorsan yanına gözlük al; tozlu ortamda lens rahatsız edebilir.",
        ],
      },
      {
        heading: "Mevsime göre giyinme",
        paragraphs: [
          "Yazın: hafif, kollu ama ince bir tişört. Kollarını kapatmak güneşi ve zıplayan taşları önler. Uzun pantolon şart — şortta patika seni rahatsız eder.",
          "Kışın ve geçiş mevsiminde: kat kat giyin. Sürüş sırasında üşmezsin çünkü vücudun çalışır ama molalarda hava soğuktur. Yanına değişim tişörtü al, tur sonunda tertemiz dönersin.",
        ],
      },
      {
        heading: "Yanına ne alsın?",
        paragraphs: [
          "Sırt çantası ATV'ye sığmaz; küçük omuz çantası ya da cebine sığan şeyler yeter. Telefonun için toz geçirmeyen bir kılıf, güneş kremi ve bir litre su. Drone getirebilirsin ama molalarda ve rehberin onayladığı noktalarda uçur.",
        ],
      },
    ],
    relatedTour: {
      slug: "kapadokya-atv-safari-gun-batimi",
      title: "ATV Safari – Gün Batımı",
    },
  },
  {
    slug: "kapadokyada-3-gunde-gezilecek-yerler",
    title: "Kapadokya'da 3 Günde Gezilecek Yerler: İdeal Rota",
    description:
      "Kapadokya'ya 3 gün kaldıysan ideal rota: Göreme Açık Hava Müzesi, balon turu, vadiler, Avanos ve Uçhisar — gün gün plan.",
    date: "2026-07-30",
    author: "Kapadokya Aktivite Ekibi",
    readingMinutes: 8,
    tag: "Rota",
    cover: "/images/goreme-muze.jpg",
    coverAlt:
      "Göreme Açık Hava Müzesi kaya kiliseleri ve Kapadokya vadi manzarası",
    content: [
      {
        paragraphs: [
          "Kapadokya, 3 gün ile tam bir turist cennetine dönüşür: bir gün manzara ve tarih, bir gün macera, bir gün da kültür ve lezzet. İşte yıllardır misafirlerimize verdiğimiz, beğenilerek kullanılan 3 günlük rota:",
        ],
      },
      {
        heading: "1. Gün: Balon ve Göreme",
        paragraphs: [
          "Sabaha balon turuyla başla (tur 07:30 gibi biter, otelde kahvaltıdan sonra oteline dinlen). Öğleden sonra Göreme Açık Hava Müzesi'ni gez — UNESCO listesindeki kaya kiliseleri ve freskler 2 saat sürer.",
          "Akşamüstü Kızılçukur'da gün batımı izleyin; kızıllığın vadiye vuran hali yılın fotoğrafı olur.",
        ],
      },
      {
        heading: "2. Gün: Vadiler ve macera",
        paragraphs: [
          "Öğlene doğru ATV ya da at turu ile vadileri yaşayarak gez. Aşk Vadisi ve Güvercinlik Vadisi bu turların rotasında. Yorgunluk çayını içtikten sonra öğleden sonra Çavuşin köyü ve Paşabağ (Rahipler Vadisi) — peri bacalarının en klasik görüntüleri orada.",
          "Akşam için Türk Gecesi'ni rezerve et: sema töreni, folklor ve yemekli program sizi toparlayacak.",
        ],
      },
      {
        heading: "3. Gün: Yeraltı ve Avanos",
        paragraphs: [
          "Sabah Derinkuyu ya da Kaymaklı yeraltı şehrine git — 8 katlı yeraltı şehirleri nefes kesici. Öğleden sonra Avanos'a in, Kızılırmak kenarında çömlek atölyelerini gez, kendi çanağını yap.",
          "Dönüş yolunda Uçhisar Kalesi'nden vadiye veda manzarası yap. 3 günün sonunda 'bi daha gelsim' diye not alman kaçınılmaz.",
        ],
      },
      {
        heading: "Konaklama ve ulaşım ipuçları",
        paragraphs: [
          "Merkezde kal: Göreme ya da Ürgüp; her yere daha kısa sürede ulaşırsın. Havalimanı transferi için Kayseri 75 dk, Nevşehir 40 dk. Araç kiralamak güzel ama balon transferi ve turlar dahil olduğu için ilk 2 gün gerekmez.",
        ],
      },
    ],
    faq: [
      {
        question: "Kapadokya'ya en iyi mevsim hangisi?",
        answer:
          "Nisan-Haziran ve Eylül-Ekim en ideal dönemdir: hava ılıman, manzara yeşil. Kışın karlı peri bacaları da çok fotojeniktir; balon uçuşları kışın daha sık iptal olur ama manzara benzersizdir.",
      },
      {
        question: "3 gün yeterli mi?",
        answer:
          "Ana aktiviteler (balon, müze, vadiler, yeraltı şehri) için 3 gün ideal. Ekstra at turu, hamam ve serbest keşif için 4. gün eklemek rahatlatır.",
      },
    ],
  },
  {
    slug: "kapadokya-gece-hayati-turk-gecesi-rehberi",
    title: "Kapadokya'da Akşam Ne Yapılır? Türk Gecesi Rehberi",
    description:
      "Kapadokya geceleri sadece yıldız bakmak değildir: sema töreni, Anadolu folkloru, yerel lezzetler ve canlı müzikle dolu bir akşamın rehberi.",
    date: "2026-09-02",
    author: "Kapadokya Aktivite Ekibi",
    readingMinutes: 6,
    tag: "Kültür",
    cover: "/images/turk-gecesi.jpg",
    coverAlt:
      "Anadolu kostümlü halk oyunları ekibinin halay gösterisi sahne görüntüsü",
    content: [
      {
        paragraphs: [
          "Gündüz vadileri gezip akşam oteline mı kapanıyorsun? Yanlış plan. Kapadokya'nın gecesi, gündüzü kadar dolu: işte en sevilen akşam aktiviteleri ve 'Türk Gecesi' programının içinde ne olduğuna dair gerçekçi bir rehber.",
        ],
      },
      {
        heading: "Türk Gecesi'nde neler oluyor?",
        paragraphs: [
          "Kaliteli bir Türk Gecesi programı üç bölümden oluşur: önce Mevlevi Sema töreni gösterimi (sessiz, huzurlu, 20-25 dakika), ardından Anadolu halk dansları — halay, Çiftetelli, yöresel kostümler. Son bölümde canlı müzik ve dans pisti açılır.",
          "Yemek ve içecek dahildir mi? Firmaya göre değişir; bizim programımızda açık büfe akşam yemeği ve sınırsız yerel içecek dahildir. Rezervasyon öncesi mutlaka sor.",
        ],
      },
      {
        heading: "Sema töreni ile Türk Gecesi ayrı mı?",
        paragraphs: [
          "Ayrı programlar da var: sadece sema töreni izlemek isteyenler için huzurlu, yemekli olmayan kısa programlar düzenlenir. Türk Gecesi paketinde ise sema, programın saygı bölümü olarak içinde yer alır.",
          "Çocuklu aileler için Türk Gecesi uygundur; program 23:00 gibi biter, transfer dahildir.",
        ],
      },
      {
        heading: "Alternatif akşam planları",
        paragraphs: [
          "Daha sakin bir akşam istersen: Göreme'de teraslı bir kavehanede çay içip vadi manzarasına bakmak, ya da balonların sabah uçuşunu terastan izlemek için erken yatmak da bir seçenek.",
          "Bir diğer favori: kısa bir vadi yürüyüşünden sonra yerel bir ev yemeği restoranında testi kebabı denemek. Akşamüstü ışıkları vadiyi altın rengine çevirirken fotoğraf çekmeyi unutma.",
        ],
      },
    ],
    relatedTour: {
      slug: "kapadokya-semazen-turk-gecesi",
      title: "Semazen & Türk Gecesi",
    },
  },
  {
    slug: "kapadokya-kisisel-aracla-vadi-turu",
    title: "Klasik Araçla Kapadokya: Nostaljik Vadi Turu",
    description:
      "Restore klasik araçlarla Kapadokya vadilerinde şoförlü nostaljik tur: rota, fiyatlar, evlilik teklifi paketleri ve fotoğraf ipuçları.",
    date: "2026-06-14",
    author: "Kapadokya Aktivite Ekibi",
    readingMinutes: 5,
    tag: "Romantizm",
    cover: "/images/klasik-arac.jpg",
    coverAlt:
      "Göl ve dağ manzarası karşısında park edilmiş mavi klasik Volkswagen Beetle",
    content: [
      {
        paragraphs: [
          "Kapadokya'da klasik araç turu, vadileri 'gezmek' ile 'yaşamak' arasındaki farkı yaratır. Restore edilmiş bir klasikle, arkan yaslı koltukta, vadi yollarında ilerlerken manzara bir film şeridi gibi akar.",
        ],
      },
      {
        heading: "Rota nasıl işliyor?",
        paragraphs: [
          "Standart rota 2 saat: Güvercinlik Vadisi, Göreme Panorama, Aşk Vadisi ve isteğe bağlı Uçhisar. Arzu ettiğin noktada mola veriyoruz; fotoğraf makineleri çıkıyor.",
          "Şoför bizden. Sürmek istemiyorsan hiç sorun değil — ama dilersen direksiyon başında nostaljik fotoğraflar için kısa molalar da veriyoruz.",
        ],
      },
      {
        heading: "Evlilik teklifi ve özel günler",
        paragraphs: [
          "Klasik araç turlarının en sevilen kullanımı evlilik teklifleri. Teklif noktası rezervasyonu, çiçek süsleme, fotoğrafçı ve istersen kemancı ekleyebiliyoruz. Detayları WhatsApp'tan birlikte planlıyoruz — sürpriz %100 korunur.",
          "Doğum günleri ve yıldönümleri için de süsleme paketleri var. Araç içine özel yazılı pankart seçenekleri de mevcut.",
        ],
      },
      {
        heading: "Ne zaman yapılmalı?",
        paragraphs: [
          "En iyi saatler gün batımı öncesi 2 saatlik pencere. Işık altın rengine döner, sıcaklık düşer, fotoğraflar muhteşem çıkar. Yaz sıcağında öğle saatleri hem sıcak hem de fotoğraf açısından yorgun olur.",
        ],
      },
    ],
    relatedTour: {
      slug: "kapadokya-klasik-arac-safari",
      title: "Klasik Araç Safari",
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getTourForPost(post: BlogPost): Tour | undefined {
  return post.relatedTour ? tours.find((t) => t.slug === post.relatedTour?.slug) : undefined;
}
