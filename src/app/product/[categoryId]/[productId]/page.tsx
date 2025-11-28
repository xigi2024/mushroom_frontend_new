import ProductDetail from '../../../../components/pages/ProductDetail';

export default async function ProductDetailPage({ params }) {
    await params; // Await params to satisfy Next.js 15+
    return <ProductDetail />;
}
