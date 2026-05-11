import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoParts Pro | Repuestos Automotrices",
  description: "Catálogo de repuestos para talleres mecánicos. Envíos rápidos y garantía extendida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: "smooth" }}>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
