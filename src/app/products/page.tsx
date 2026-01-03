import type { Metadata } from 'next';
import Products from '../../components/pages/Products';

export const metadata: Metadata = {
    title: 'Products - Myco Matrix | Premium Mushroom Products & Grow Kits',
    description: 'Browse our premium selection of organic mushroom products and IoT-monitored grow kits. Fresh, healthy mushrooms delivered to your door.',
    keywords: 'mushroom products, mushroom grow kits, organic mushrooms, premium mushrooms, IoT monitored mushrooms, mushroom cultivation kits',
    openGraph: {
        title: 'Products - Myco Matrix',
        description: 'Browse our premium selection of organic mushroom products and IoT-monitored grow kits.',
        url: 'https://mycomatrix.in/products',
        siteName: 'Myco Matrix',
        images: [
            {
                url: 'https://mycomatrix.in/assets/hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Myco Matrix Mushroom Products',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Products - Myco Matrix',
        description: 'Browse our premium selection of organic mushroom products.',
        images: ['https://mycomatrix.in/assets/hero.jpg'],
    },
    alternates: {
        canonical: 'https://mycomatrix.in/products',
    },
};

export default function ProductsPage() {
    return <Products />;
}
