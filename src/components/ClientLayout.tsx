"use client";

import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
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
        <AuthProvider>
            <CartProvider>
                <div suppressHydrationWarning>
                    {!hideHeader && <Header />}
                    <WhatsAppButton />
                    <ScrollToTop />
                    {children}
                    {!hideFooter && <Footer />}
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

