import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";

import "./globals.css";

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags({
  title: "TunsianPass",
  description: "Profitez avec Tunisian Pass d'un accès à de nombreux avantages dans les restaurants, bars, spas, fitness, et bien plus encore. Commencez à prendre soin de vous dès maintenant. Seulement en Tunisie grace à Tunisian Pass.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className="font-bricolage">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
