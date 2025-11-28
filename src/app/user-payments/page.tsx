"use client";
import UserPayments from '../../components/pages/UserPayments';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function UserPaymentsPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="payment" setActiveSection={() => { }} userRole="user">
                <UserPayments />
            </Layout>
        </ProtectedRoute>
    );
}
