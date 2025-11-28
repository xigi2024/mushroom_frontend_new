"use client";
import PaymentHistory from '../../components/pages/PaymentHistory';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function PaymentHistoryPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="payment" setActiveSection={() => { }} userRole="user">
                <PaymentHistory />
            </Layout>
        </ProtectedRoute>
    );
}
