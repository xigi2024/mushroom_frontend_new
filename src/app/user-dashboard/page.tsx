"use client";
import UserDashboard from '../../components/pages/UserDashboard';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function UserDashboardPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="dashboard" setActiveSection={() => { }} userRole="user">
                <UserDashboard />
            </Layout>
        </ProtectedRoute>
    );
}
