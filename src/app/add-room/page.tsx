"use client";
import AddRoom from '../../components/pages/AddRoom';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AddRoomPage() {
    return (
        <ProtectedRoute>
            <Layout activeSection="iot-monitoring" setActiveSection={() => { }} userRole="user">
                <AddRoom rooms={[]} setRooms={() => { }} />
            </Layout>
        </ProtectedRoute>
    );
}
