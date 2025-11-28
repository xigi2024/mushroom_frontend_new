"use client";
import Settings from '../../components/pages/Settings';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function SettingsPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="settings" setActiveSection={() => { }} userRole="user">
                <Settings />
            </Layout>
        </ProtectedRoute>
    );
}
