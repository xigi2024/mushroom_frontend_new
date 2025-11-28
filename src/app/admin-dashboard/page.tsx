"use client";
import AdminDashboard from '../../components/pages/AdminDashboard';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminDashboardPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="dashboard" setActiveSection={() => { }} userRole="admin">
                <AdminDashboard />
            </Layout>
        </ProtectedRoute>
    );
}
