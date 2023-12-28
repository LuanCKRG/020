import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemesProvider } from "@/providers/ThemesProvider";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YieldMaster",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const generateStaticParams = () => {
  return [{ locale: "en" }, { locale: "pt" }];
};

const RootLayout = async ({
  children,
  params: { locale },
}: RootLayoutProps) => {
  let messages: AbstractIntlMessages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemesProvider>
            <NavBar />
            {children}
            <Footer />
          </ThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
