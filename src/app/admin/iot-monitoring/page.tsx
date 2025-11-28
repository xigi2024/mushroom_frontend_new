"use client";
import IoTMonitoring from '../../../components/pages/IoTMonitoring';
import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function AdminIoTMonitoringPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="iot-monitoring" setActiveSection={() => { }} userRole="admin">
                <IoTMonitoring userRole="admin" />
            </Layout>
        </ProtectedRoute>
    );
}
