"use client";
import IoTMonitoring from '../../../components/pages/IoTMonitoring';
import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function UserIoTMonitoringPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="iot-monitoring" setActiveSection={() => { }} userRole="user">
                <IoTMonitoring userRole="user" />
            </Layout>
        </ProtectedRoute>
    );
}
