import type { Metadata } from 'next';
import ClientLayout from '../components/ClientLayout';
import '../index.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
    title: {
        default: 'Myco Matrix - Premium Mushroom Products & IoT Monitoring',
        template: '%s | Myco Matrix',
    },
    description: 'Discover premium mushroom products and IoT monitoring solutions. Fresh, organic mushrooms grown with cutting-edge technology.',
    keywords: 'mushroom products, IoT farming, organic mushrooms, smart agriculture, mushroom cultivation',
    authors: [{ name: 'Myco Matrix' }],
    creator: 'Myco Matrix',
    publisher: 'Myco Matrix',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://mycomatrix.in'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mycomatrix.in',
        siteName: 'Myco Matrix',
        title: 'Myco Matrix - Premium Mushroom Products & IoT Monitoring',
        description: 'Discover premium mushroom products and IoT monitoring solutions.',
        images: [
            {
                url: '/assets/hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Myco Matrix Premium Mushroom Products',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Myco Matrix - Premium Mushroom Products',
        description: 'Discover premium mushroom products and IoT monitoring solutions.',
        images: ['/assets/hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/assets/logo.png', type: 'image/png' },
        ],
        shortcut: '/assets/logo.png',
        apple: '/assets/logo.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
