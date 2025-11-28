// Common type definitions for the application

export interface User {
    id: number;
    email: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    role?: 'admin' | 'user';
}

export interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    login: (credentials: { email: string; password: string }) => Promise<any>;
    logout: () => void;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    image?: string;
    category?: string;
    stock?: number;
}

export interface CartItem {
    id?: string | number;
    product: Product;
    qty: number;
    price: number;
}

export interface CartContextType {
    cart: { items: CartItem[]; total_amount: number; id: number | null };
    loading: boolean;
    isGuest: boolean;
    isAuthenticated: boolean;
    addToCart: (product: Product, quantity?: number) => Promise<any>;
    removeFromCart: (itemId: string | number) => Promise<void>;
    updateQuantity: (itemId: string | number, newQuantity: number) => Promise<void>;
    clearCart: () => Promise<void>;
    fetchCart: () => Promise<void>;
    syncGuestCart: () => Promise<any>;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export interface Order {
    id: number;
    user_details?: any;
    items: OrderItem[];
    total_amount: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    payment_status: 'paid' | 'unpaid' | 'failed' | 'refunded';
    created_at: string;
}

export interface OrderItem {
    product?: Product;
    qty: number;
    price: number;
}

export interface Room {
    id: number;
    name: string;
    kit_id: string;
    temperature?: number;
    humidity?: number;
    status?: 'optimal' | 'warning' | 'critical';
    latest_sensor_data?: SensorData;
}

export interface SensorData {
    temperature: number;
    humidity: number;
    timestamp: string;
}

export interface Payment {
    id: number;
    razorpay_payment_id?: string;
    order?: number;
    amount: number;
    currency: string;
    status: 'completed' | 'captured' | 'pending' | 'failed' | 'refunded' | 'created';
    payment_method?: string;
    created_at: string;
}
