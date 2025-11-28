"use client";
import Accounts from '../../components/pages/Accounts';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AccountsPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="accounts" setActiveSection={() => { }} userRole="admin">
                <Accounts />
            </Layout>
        </ProtectedRoute>
    );
}
