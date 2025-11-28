"use client";
import Profile from '../../components/pages/Profile';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function ProfilePage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="profile" setActiveSection={() => { }} userRole="user">
                <div className="dashboard-content">
                    <Profile />
                </div>
            </Layout>
        </ProtectedRoute>
    );
}
