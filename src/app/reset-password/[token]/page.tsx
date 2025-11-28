import ResetPassword from '../../../components/pages/ResetPassword';

export default async function ResetPasswordPage({ params }) {
    await params; // Await params to satisfy Next.js 15+
    return <ResetPassword />;
}
