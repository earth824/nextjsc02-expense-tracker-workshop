import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { APP_DESCRIPTION, APP_NAME } from '@/config/env.config';
import { roboto } from '@/styles/font';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${roboto.className}`}>
        <ThemeProvider
          defaultTheme="light"
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
