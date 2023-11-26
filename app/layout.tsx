import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TanstackProvider from "@/components/providers/tanstack-provider";
import ModalProvider from "@/components/providers/modal-provider";
import FloatingIcons from "@/components/floating-icons";

const font = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "الرئسية | سيرفر عرب ليونز",
  description: `سيرفر ليونز تي في أقوي سيرفر لمشاهدة المباريات والمحتوي الترفيهي في الشرق الأوسط, يحتوي علي أكثر من 200 تيرا افلام ومسلسلات وقنوات ممتازة بجودات مختلفة
  نعمل في ليونز تي في علي توفير أفضل تجربة للمستخدم, فنقوم بتقسيم...`,
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={font.className}>
        <TanstackProvider>
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
          <FloatingIcons />
        </TanstackProvider>
      </body>
    </html>
  );
}
