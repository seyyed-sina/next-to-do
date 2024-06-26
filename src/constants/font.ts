import localFont from 'next/font/local';

export const iran = localFont({
  src: [
    {
      path: '../../public/fonts/iran_regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-iran',
});
