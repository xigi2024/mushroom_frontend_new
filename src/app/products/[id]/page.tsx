import ViewProduct from '../../../components/pages/ViewProduct';

export default async function ViewProductPage({ params }) {
    await params; // Await params to satisfy Next.js 15+
    return <ViewProduct />;
}
