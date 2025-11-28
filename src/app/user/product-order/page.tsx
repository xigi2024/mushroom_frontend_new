"use client";
import ProductOrder from '../../../components/pages/ProductOrder';
import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function UserProductOrderPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="products" setActiveSection={() => { }} userRole="user">
                <ProductOrder userRole="user" />
            </Layout>
        </ProtectedRoute>
    );
}
