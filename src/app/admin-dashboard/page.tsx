import type { Metadata } from 'next';
import AdminDashboard from '../../components/pages/AdminDashboard';

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    robots: {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
    },
};

export default function AdminDashboardPage() {
    return <AdminDashboard />;
}
