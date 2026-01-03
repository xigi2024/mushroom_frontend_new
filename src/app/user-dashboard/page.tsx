import type { Metadata } from 'next';
import UserDashboard from '../../components/pages/UserDashboard';

export const metadata: Metadata = {
    title: 'User Dashboard',
    robots: {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
    },
};

export default function UserDashboardPage() {
    return <UserDashboard />;
}
