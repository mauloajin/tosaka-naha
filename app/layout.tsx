import type { Metadata } from "next";
import "./globals.css";

const storeName = "炭焼地鶏と旬鮮野菜 とさか";
const description =
  "沖縄県那覇市牧志の居酒屋、炭焼地鶏と旬鮮野菜 とさかの店舗情報。炭火焼き鳥、地鶏料理、旬鮮野菜、日本酒、営業時間、住所、予約情報、アクセスをまとめています。";

export const metadata: Metadata = {
  metadataBase: new URL("https://tosaka-naha.vercel.app"),
  title: `${storeName}｜那覇・久茂地エリアの地鶏居酒屋`,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${storeName}｜那覇・久茂地エリアの地鶏居酒屋`,
    description,
    url: "https://tosaka-naha.vercel.app/",
    siteName: storeName,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
