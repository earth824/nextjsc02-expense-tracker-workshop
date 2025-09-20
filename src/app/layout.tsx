import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { APP_DESCRIPTION, APP_NAME } from '@/config/env.config';
import { roboto } from '@/styles/font';
import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className}`}>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
