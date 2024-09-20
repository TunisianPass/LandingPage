import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";

import "./globals.css";

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className="font-bricolage">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
