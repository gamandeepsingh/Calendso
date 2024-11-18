import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import CreateEventDrawer from "@/components/create-event";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedulrr",
  description: "Meeting scheduling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body
          className={inter.className}
        >
          {/* header */}
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with ❤️ by Gamandeep</p>
            </div>
          </footer>
          <CreateEventDrawer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
