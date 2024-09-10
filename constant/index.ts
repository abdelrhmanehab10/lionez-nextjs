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
      link: "http://tvshof.pro/4K",
    },
    {
      title: "Android V3",
      link: "http://tvshof.pro/v3",
    },
    {
      title: "Lionz V2",
      link: "http://tvshof.pro/v2",
    },
    {
      title: "Astra TV",
      link: "https://tvshof.pro/oz55m",
    },
  ],
  [
    {
      title: "000 player",
      link: "https://apple.co/3ReEZAO",
      code: "رقم السيرفر 217",
    },
    {
      title: "S Player Pro",
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
      link: "https://tvshof.pro/1ljd8",
    },
    {
      title: "LIONZ TV 3.0",
      link: "https://tvshof.pro/qgto1",
    },
    {
      title: "IPTV Smarters Pro",
      link: "https://tvshof.pro/d7gs2",
    },
    {
      title: "Sfvip 1.2.7.5",
      link: "https://tvshof.pro/j876w",
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
      { title: "اشتراك 6 شهور", price: "تواصل مع المبيعات",
        link: "https://tvshof.pro/d7gs2",
      },
      
      { title: "اشتراك سنتين", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
    ],
    [
      { title: "اشتراك 6 شهور", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنتين", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
    ],
    [
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
      { title: "اشتراك 6 شهور", price: "تواصل مع" },
    ],
    [
      { title: "اشتراك 6 شهور", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنتين", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
    ],
  ],
  [
    [
      { title: "اشتراك 3 شهور", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
      { title: "اشتراك 6 شهور", price: "تواصل مع المبيعات" },
    ],
    [
      { title: "اشتراك 3 شهور", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
      { title: "اشتراك 6 شهور", price: "تواصل مع المبيعات" },
    ],
    [
      { title: "اشتراك 3 شهور", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
      { title: "اشتراك 6 شهور", price: "تواصل مع المبيعات" },
    ],
    [
      { title: "اشتراك 3 شهور", price: "تواصل مع المبيعات" },
      { title: "اشتراك سنوي", price: "تواصل مع المبيعات" },
      { title: "اشتراك 6 شهور", price: "تواصل مع المبيعات" },
    ],
  ],
];
