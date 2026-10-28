import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = { title: 'شركة السلطان التجاري | كتالوج الجملة', description: 'كتالوج منتجات شركة السلطان التجاري لتجار الجملة' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
