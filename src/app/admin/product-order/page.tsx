"use client";
import AdminProductOrder from '../../../components/pages/AdminProductOrder';
import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function AdminProductOrderPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="products" setActiveSection={() => { }} userRole="admin">
                <AdminProductOrder userRole="admin" />
            </Layout>
        </ProtectedRoute>
    );
}
