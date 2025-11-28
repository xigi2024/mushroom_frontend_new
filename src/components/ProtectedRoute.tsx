"use client";
// src/components/ProtectedRoute.js
import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log('ProtectedRoute - Auth state:', {
      isAuthenticated,
      loading,
      hasToken: typeof window !== 'undefined' ? !!localStorage.getItem('access_token') : false,
      user: user ? 'User exists' : 'No user',
      timestamp: new Date().toISOString()
    });
  }, [isAuthenticated, loading, user]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      console.log('ProtectedRoute - Not authenticated, redirecting to login');
      if (pathname !== '/login') {
        localStorage.setItem('redirectAfterLogin', pathname);
      }
      router.push('/login');
    }
  }, [loading, isAuthenticated, pathname, router]);

  if (loading) {
    console.log('ProtectedRoute - Loading authentication state...');
    return <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  console.log('ProtectedRoute - User authenticated, rendering children');
  return children;
};

export default ProtectedRoute;
