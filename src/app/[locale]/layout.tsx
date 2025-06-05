import { NextIntlClientProvider, hasLocale } from 'next-intl';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesus Artavia - Portfolio",
  description: "Portfolio of Jesus Artavia, a web developer specializing in React, Next.js, and Tailwind CSS.",
  icons: {
    icon: 'https://dm7725hym1.ufs.sh/f/E22hCg5xRFze7CH65fOfV5S3BwWhM4AHRFZmQ8spTzC2qtOg',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
