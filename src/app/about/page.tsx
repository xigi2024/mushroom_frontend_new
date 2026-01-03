import type { Metadata } from 'next';
import About from '../../components/pages/About us';

export const metadata: Metadata = {
    title: 'About Us - Myco Matrix | Premium Mushroom Products & IoT Farming',
    description: 'Learn about Myco Matrix - IoT-powered mushroom cultivation. We combine cutting-edge technology with natural farming to deliver fresh, organic mushrooms directly to your door.',
    keywords: 'mushroom farming, IoT agriculture, organic mushrooms, smart farming, mushroom cultivation, IoT sensors, automated farming',
    openGraph: {
        title: 'About Us - Myco Matrix',
        description: 'Learn about Myco Matrix - IoT-powered mushroom cultivation. We combine cutting-edge technology with natural farming.',
        url: 'https://mycomatrix.in/about',
        siteName: 'Myco Matrix',
        images: [
            {
                url: 'https://mycomatrix.in/assets/about-main.png',
                width: 1200,
                height: 630,
                alt: 'Myco Matrix Mushroom Farm',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us - Myco Matrix',
        description: 'Learn about Myco Matrix - IoT-powered mushroom cultivation.',
        images: ['https://mycomatrix.in/assets/about-main.png'],
    },
    alternates: {
        canonical: 'https://mycomatrix.in/about',
    },
};

export default function AboutPage() {
    return <About />;
}
