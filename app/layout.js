import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: {
    default: "APEX System and Solution Pvt Ltd | IT Development Company",
    template: "%s | APEX System and Solution"
  },
  description: "APEX System and Solution Pvt Ltd is a premier software development and IT consulting company, building sustainable, high-performance web applications, enterprise platforms, and virtual trackers.",
  keywords: ["APEX", "APEX System and Solution", "IT Company", "Software Development", "Sri Lanka Web Development", "Next.js Development", "BinderDex", "Brichwood.lk", "Eshan Fernando"],
  metadataBase: new URL("https://www.apexsystemsolution.lk"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "APEX System and Solution Pvt Ltd",
    description: "Architecting sustainable digital transformation, premium software development, and custom web applications.",
    url: "https://www.apexsystemsolution.lk",
    siteName: "APEX System and Solution",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/apex/logo.png",
        width: 1200,
        height: 630,
        alt: "APEX System and Solution Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX System and Solution Pvt Ltd",
    description: "High-performance software systems and sustainable digital solutions.",
    images: ["/assets/apex/logo.png"]
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c79a8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: 'var(--header-height)' }}>
        <Header />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
