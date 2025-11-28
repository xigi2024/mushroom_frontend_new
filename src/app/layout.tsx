"use client";

import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import '../index.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
    const pathname = usePathname();

    const isRegisterPage = pathname === '/register';
    const isLoginPage = pathname === '/login';
    const isForgotPasswordPage = pathname === '/forgot-password';
    const isResetPasswordPage = pathname?.startsWith('/reset-password');
    const isCheckoutPage = pathname === '/checkout';
    const isAdminDashboardPage = pathname === '/admin-dashboard';
    const isUserDashboardPage = pathname === '/user-dashboard';
    const isIoTMonitoringPage = pathname === '/admin/iot-monitoring' || pathname === '/user/iot-monitoring' || pathname?.startsWith('/room/');
    const isProductOrderPage = pathname === '/admin/product-order' || pathname === '/user/product-order';
    const isAccountsPage = pathname === '/accounts';
    const isSettingsPage = pathname === '/settings';
    const isPaymentHistoryPage = pathname === '/payment-history';
    const isProfilePage = pathname === '/profile';
    const isUserPaymentsPage = pathname === '/user-payments';
    const isRoomDetailPage = pathname?.startsWith('/room/') && !pathname?.startsWith('/room/add');
    const isAddRoomPage = pathname === '/add-room' || pathname === '/room/add';

    const hideFooter = isRegisterPage || isLoginPage || isForgotPasswordPage || isResetPasswordPage || isCheckoutPage || isAdminDashboardPage || isUserDashboardPage || isIoTMonitoringPage || isProductOrderPage || isAccountsPage || isSettingsPage || isPaymentHistoryPage || isProfilePage || isUserPaymentsPage || isRoomDetailPage || isAddRoomPage;
    const hideHeader = isAdminDashboardPage || isUserDashboardPage || isIoTMonitoringPage || isProductOrderPage || isAccountsPage || isSettingsPage || isPaymentHistoryPage || isProfilePage || isUserPaymentsPage || isRoomDetailPage || isAddRoomPage;

    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <CartProvider>
                        {!hideHeader && <Header />}
                        <WhatsAppButton />
                        <ScrollToTop />
                        {children}
                        {!hideFooter && <Footer />}
                    </CartProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
