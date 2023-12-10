import "@/core/ui/styles/globals.css";
import clsx from "clsx";
import { Manrope } from "next/font/google";
import MetadataData from "@/core/utils/metadata/metadata.json";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "Alvisual | %s",
    default: `Alvisual | ${MetadataData.home.title}`,
  },
  description: MetadataData.home.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <body className={clsx(manrope.className)}>{children}</body>
    </html>
  );
}
