import RoomDetail from '../../../components/pages/RoomDetail';

export default async function RoomDetailPage({ params }) {
    await params; // Await params to satisfy Next.js 15+
    return <RoomDetail />;
}
