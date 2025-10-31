import "./globals.css";

export const metadata = {
  title: "Meu App Next.js",
  description: "Exemplo usando CSS Modules no Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
