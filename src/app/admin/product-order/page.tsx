"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminProductOrder from '../../../components/pages/AdminProductOrder';
import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useAuth } from '../../../context/AuthContext';

export default function AdminProductOrderPage() {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && isAuthenticated && user) {
            // Check if user is admin
            const userRole = user.role?.toLowerCase();
            if (userRole !== 'admin') {
                // Redirect non-admin users to their dashboard
                router.push('/user-dashboard');
            }
        }
    }, [user, isAuthenticated, loading, router]);

    // Show loading while checking auth
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Check if user is admin (after loading and authentication check)
    if (isAuthenticated && user) {
        const userRole = user.role?.toLowerCase();
        if (userRole !== 'admin') {
            return (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="text-center">
                        <h3>Access Denied</h3>
                        <p className="text-muted">You need admin privileges to access this page.</p>
                        <button 
                            className="btn btn-primary mt-3"
                            onClick={() => router.push('/user-dashboard')}
                        >
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            );
        }
    }

    // Only render for authenticated admin users
    return (
        <ProtectedRoute>
            <Layout activeSection="products" setActiveSection={() => { }} userRole="admin">
                <AdminProductOrder />
            </Layout>
        </ProtectedRoute>
    );
}
