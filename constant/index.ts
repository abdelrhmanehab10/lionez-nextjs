import { Film, Satellite, Tv } from "lucide-react";
import "../components/navbar.css";

export const routes = [
  {
    href: "/",
    label: "الرئيسية",
  },
  {
    href: "/price",
    label: "الاسعار",
  },
  {
    href: "/application",
    label: "تطبيقاتنا",
  },
  {
    href: "/technical-support",
    label: "الدعم",
  },
  {
    href: "/search",
    label: "البحث عن محتوي",
  },
  {
    href: "/review",
    label: "تقييم العملاء",
  },
];

export const GOLD_FEATURES = [
  "عدد القنوات اكثر من 8000+ قناة",
  "عدد الافلام اكثر من 14000+",
  "عدد المسلسلات اكثر من 4000+",
  "تحديثات مستمرة للأفلام والمسلسلات.",
  "مكتبة افلام ومسلسلات عائلية.",
  "محتوي خاص للاطفال",
  "دعم فني حقيقي بعد البيع.",
];

export const VIP_FEATURES = [
  "عدد القنوات اكثر من 9000+ قناة",
  "عدد الافلام اكثر من 29000+",
  "عدد المسلسلات اكثر من 9000+",
  "مكتبة 4K متنوعة!",
  "تحديثات مستمرة للأفلام والمسلسلات.",
  "مكتبة افلام ومسلسلات عائلية",
  "محتوي خاص للاطفال",
  "محتوي تعليمي",
  "عدد الافلام اكثر من متاح لك 6 طلبات اسبوعيا",
  "محتوي خاص بالمرأه كامل",
  "دعم فني حقيقي بعد البيع.",
];

export const APPLICATION_LINKS = [
  "السيرفر يدعم الهواتف والاجهزة الاندرويد",
  "السيرفر يدعم الهواتف والاجهزة الـApple",
  "السيرفر يدعم الاجهزة بنظام ويندوز",
  "السيرفر يدعم جميع الشاشات الذكيه",
];

export const APPS_DOWNLOAD_LINKS = [
  [
    {
      title: "Android 4K",
      link: "https://bit.ly/4k010101",
      code: "146077",
    },
    {
      title: "Android V4",
      link: "https://play.google.com/store/apps/details?id=com.lionzshow.lionzshowiptvbox",
    },
    {
      title: "Android V3",
      link: "https://bit.ly/lionzv3n",
    },
    {
      title: "Lionz V2",
      link: "https://bit.ly/lionz222",
    },
    {
      title: "Astra TV",
      link: "https://play.google.com/store/apps/details?id=com.astraiptv.astraiptviptvbox",
    },
  ],
  [
    {
      title: "000 Player 4K",
      link: "https://apple.co/3ReEZAO",
      code: 217,
    },
    {
      title: "Globle Player",
      link: "https://apple.co/3uZbKJ1",
    },
    {
      title: "Smarters Player Lite",
      link: "https://apple.co/3C3YtTp",
    },
  ],

  [
    {
      title: "LIONZ TV V2",
      link: "https://lionz.tv/app/lionzSetup.3.0.2.exe",
    },
    {
      title: "LIONZ TV 3.0",
      link: "https://lionz.tv/app/LIONZ-TV.exe",
    },
    {
      title: "IPTV Smarters Pro",
      link: "https://lionz.tv/app/IPTVSmartersPro-Setup-1.1.1.exe",
    },
    {
      title: "Sfvip 1.2.7.5",
      link: "https://lionz.tv/app/SFVIP-Player-x64.1.2.7.5.rar",
    },
  ],
];

export const CHANNEL_IMAGE = ["bein.png", "ad.gif", "ssc.png", "osn.png"];

export const COUNTERS = [
  {
    label: "قنوات",
    icon: Satellite,
    end: 9000,
  },
  {
    label: "افلام",
    icon: Film,
    end: 30000,
  },
  {
    label: "مسلسلات",
    icon: Tv,
    end: 10000,
  },
];

export const SUPPORT_LINKS = [
  "خدمة ما بعد البيع",
  "متوفر اكثر من وسيلة للتواصل مع الدعم الفني 24/7",
  "متوفر خدمة الطلبات المحتوي 3 مرات في الاسبوع",
  "لدينا قنوات اكثر من +9000 قناة ونحن في تطور مستمر لزيادة العدد",
  "مكتبه افلام منوعه تحتوي على 29000 فيلم قابلة للزيادة",
  "مكتبه مسلسلات منوعه تحتوي على 9000 مسلسل قابله للزياده",
  "بث مباشر للرياضة والبرامج التلفزيونية و افلام.",
  "محتوي السيرفر متاح باكثر من جودة",
];

export const PRICE_BUTTONS = ["جميع دول العالم", "الامارات", "مصر", "السعودية"];
export const PRICE_CARDS = [
  [
    [
      { title: "اشتراك 6 شهور", price: "24" },
      { title: "اشتراك سنتين", price: "70" },
      { title: "اشتراك سنوي", price: "40" },
    ],
    [
      { title: "اشتراك 6 شهور", price: "90" },
      { title: "اشتراك سنتين", price: "250" },
      { title: "اشتراك سنوي", price: "150" },
    ],
    [
      { title: "اشتراك سنوي", price: "700" },
      { title: "اشتراك 6 شهور", price: "400" },
    ],
    [
      { title: "اشتراك 6 شهور", price: "90" },
      { title: "اشتراك سنتين", price: "250" },
      { title: "اشتراك سنوي", price: "150" },
    ],
  ],
  [
    [
      { title: "اشتراك 3 شهور", price: "15" },
      { title: "اشتراك سنوي", price: "25" },
      { title: "اشتراك 6 شهور", price: "20" },
    ],
    [
      { title: "اشتراك 3 شهور", price: "40" },
      { title: "اشتراك سنوي", price: "100" },
      { title: "اشتراك 6 شهور", price: "60" },
    ],
    [
      { title: "اشتراك 3 شهور", price: "150" },
      { title: "اشتراك سنوي", price: "350" },
      { title: "اشتراك 6 شهور", price: "250" },
    ],
    [
      { title: "اشتراك 3 شهور", price: "40" },
      { title: "اشتراك سنوي", price: "100" },
      { title: "اشتراك 6 شهور", price: "60" },
    ],
  ],
];
