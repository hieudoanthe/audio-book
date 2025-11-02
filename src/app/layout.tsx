import type { Metadata } from "next";
import "./globals.css";
import { AppShell, Footer } from "../components/layout";
import { AudioPlayerProvider } from "../contexts/AudioPlayerContext";

export const metadata: Metadata = {
  title: "Sách nói & Podcast",
  description: "AudioBook is a platform for listening to books and podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AudioPlayerProvider>
          <AppShell>
            {children}
            <Footer />
          </AppShell>
        </AudioPlayerProvider>
      </body>
    </html>
  );
}
