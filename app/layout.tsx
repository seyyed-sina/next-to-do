import type { Metadata } from 'next';
import { iran } from '@constants';
import { clx } from '@helpers';
import { StoreProvider } from '@components';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Frontend Todo App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clx(iran.className, '')}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
