import type { Metadata } from 'next';
import Contact from '../../components/pages/Contact';

export const metadata: Metadata = {
    title: 'Contact Us - Myco Matrix | Get in Touch',
    description: 'Contact Myco Matrix for premium mushroom products, IoT monitoring solutions, and smart farming inquiries. We\'re here to help you grow fresh mushrooms.',
    keywords: 'contact myco matrix, mushroom products contact, IoT farming support, customer service',
    openGraph: {
        title: 'Contact Us - Myco Matrix',
        description: 'Contact Myco Matrix for premium mushroom products and IoT monitoring solutions.',
        url: 'https://mycomatrix.in/contact',
        siteName: 'Myco Matrix',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Contact Us - Myco Matrix',
        description: 'Contact Myco Matrix for premium mushroom products.',
    },
    alternates: {
        canonical: 'https://mycomatrix.in/contact',
    },
};

export default function ContactPage() {
    return <Contact />;
}
