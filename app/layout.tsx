// import type { Metadata } from 'next';
// import './globals.css';
// import ClientBody from './ClientBody';

// export const metadata: Metadata = {
//   title: 'Plumbing, Electrical & Handyman Services in Kuala Lumpur  TAN Resources',
//   description: 'TAN Resources offers professional plumbing, electrical, and handyman services in Kuala Lumpur. From leak repairs to installations, our certified experts ensure fast, reliable results.',
//   keywords: 'plumbing, electrical, handyman, Kuala Lumpur, home repair, plumber near me, electrician,'
// };

// export default function RootLayout({
//   children,
// }: Readonly{
//   children: React.ReactNode;
// }) {
//   return (
//     html lang=en
//       ClientBody{children}ClientBody
//     html
//   );
// }
import type { Metadata } from 'next';
import './globals.css';
import ClientBody from './ClientBody';

export const metadata: Metadata = {
  title: 'Plumbing, Electrical & Handyman Services in Kuala Lumpur | TAN Resources',
  description: 'TAN Resources offers professional plumbing, electrical, and handyman services in Kuala Lumpur. From leak repairs to installations, our certified experts ensure fast, reliable results.',
  keywords: 'plumbing, electrical, handyman, Kuala Lumpur, home repair, plumber near me, electrician',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
