(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
// 🔴 Error Boundary for Authentication
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Auth Error Boundary caught an error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert alert-danger",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Something went wrong with authentication."
                    }, void 0, false, {
                        fileName: "[project]/src/context/AuthContext.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Please refresh the page or try again later."
                    }, void 0, false, {
                        fileName: "[project]/src/context/AuthContext.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary",
                        onClick: ()=>window.location.reload(),
                        children: "Refresh Page"
                    }, void 0, false, {
                        fileName: "[project]/src/context/AuthContext.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/context/AuthContext.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
// 🔑 Create Context
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const AuthProvider = ({ children })=>{
    _s1();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AuthProvider.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        }
    }["AuthProvider.useState"]);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AuthProvider.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return localStorage.getItem('access_token') || null;
        }
    }["AuthProvider.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AuthProvider.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return !!localStorage.getItem('access_token');
        }
    }["AuthProvider.useState"]);
    // 🟢 Load auth data from localStorage and validate token
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const validateToken = {
                "AuthProvider.useEffect.validateToken": async ()=>{
                    const storedToken = localStorage.getItem("access_token");
                    const storedUser = localStorage.getItem("user");
                    if (!storedToken || !storedUser) {
                        setLoading(false);
                        return;
                    }
                    try {
                        // Verify token is still valid by making a simple API call
                        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('https://mycomatrix.in/api/profile/', {
                            headers: {
                                'Authorization': `Bearer ${storedToken}`
                            }
                        });
                        // Token is valid, set up auth state
                        setToken(storedToken);
                        setUser(JSON.parse(storedUser));
                        setIsAuthenticated(true);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
                    } catch (error) {
                        // Token is invalid, clear auth state
                        console.error('Token validation failed:', error);
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('refresh_token');
                        localStorage.removeItem('user');
                        delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.headers.common["Authorization"];
                    } finally{
                        setLoading(false);
                    }
                }
            }["AuthProvider.useEffect.validateToken"];
            validateToken();
        }
    }["AuthProvider.useEffect"], []);
    // 🟢 UPDATED Login function - Use /api/login/ endpoint
    const login = async ({ email, password })=>{
        console.log('🔑 Starting login process...');
        try {
            // Clear old data
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("user");
            setToken(null);
            setUser(null);
            setIsAuthenticated(false);
            delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.headers.common["Authorization"];
            // 🔥 Correct login API
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://mycomatrix.in/api/login/", {
                email: email.trim(),
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("🔍 Login API data:", response.data);
            if (!response.data.success) {
                return {
                    success: false,
                    message: response.data.message
                };
            }
            // 💥 Correct user object from backend
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;
            const userData = response.data.user;
            if (!userData.role) {
                console.warn("⚠ User role missing in response!");
            }
            // SAVE → THIS was your missing part
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
            localStorage.setItem("user", JSON.stringify(userData));
            // UPDATE STATE
            setToken(accessToken);
            setUser(userData);
            setIsAuthenticated(true);
            // Add token to axios
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            console.log("✅ Login success — role:", userData.role);
            return {
                success: true,
                message: response.data.message,
                user: userData
            };
        } catch (error) {
            console.error("❌ Login Error:", error);
            const msg = error.response?.data?.message || error.response?.data?.error || error.message || "Login failed";
            return {
                success: false,
                message: msg
            };
        }
    };
    // 🛒 Sync guest cart to database after login
    const syncGuestCartToDatabase = async (accessToken)=>{
        console.log('🔄 Starting guest cart sync...');
        const GUEST_CART_KEY = 'guest_cart';
        const guestCartData = localStorage.getItem(GUEST_CART_KEY);
        if (!guestCartData) {
            console.log('ℹ️ No guest cart found');
            return {
                success: true,
                message: 'No items to sync'
            };
        }
        try {
            const guestCart = JSON.parse(guestCartData);
            if (!guestCart.items || guestCart.items.length === 0) {
                console.log('ℹ️ Guest cart is empty');
                localStorage.removeItem(GUEST_CART_KEY); // Clean up empty cart
                return {
                    success: true,
                    message: 'No items to sync'
                };
            }
            console.log(`📦 Found ${guestCart.items.length} items in guest cart:`, guestCart.items);
            // Prepare items for sync
            const itemsToSync = guestCart.items.map((item)=>({
                    product_id: item.product?.id,
                    quantity: item.qty || 1
                }));
            console.log('🚀 Syncing items to database:', itemsToSync);
            // Send sync request
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('https://mycomatrix.in/api/cart/sync-guest-cart/', {
                items: itemsToSync
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                console.log('✅ Guest cart synced successfully');
                // Clear guest cart after successful sync
                localStorage.removeItem(GUEST_CART_KEY);
                // Dispatch custom event to notify CartContext
                window.dispatchEvent(new CustomEvent('guestCartSynced', {
                    detail: {
                        success: true,
                        itemCount: itemsToSync.length
                    }
                }));
                return {
                    success: true,
                    message: `${itemsToSync.length} items transferred to your cart!`,
                    itemCount: itemsToSync.length
                };
            }
        } catch (error) {
            console.error('❌ Failed to sync guest cart:', error);
            // Don't remove guest cart if sync failed
            return {
                success: false,
                error: error.message || 'Failed to sync cart items'
            };
        }
    };
    // 🟢 Logout function
    const logout = ()=>{
        // Clear all auth-related data
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        // Reset state
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
        setError(null);
        // Clear axios headers
        delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.headers.common["Authorization"];
        // Navigate to login and force a full page reload to clear any cached data
        window.location.href = '/login';
    };
    // 🟢 Auto logout on 401
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const interceptor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].interceptors.response.use({
                "AuthProvider.useEffect.use[interceptor]": (response)=>response
            }["AuthProvider.useEffect.use[interceptor]"], {
                "AuthProvider.useEffect.use[interceptor]": (error)=>{
                    if (error.response?.status === 401) {
                        console.log('🛑 401 Unauthorized - Auto logging out');
                        logout();
                    }
                    return Promise.reject(error);
                }
            }["AuthProvider.useEffect.use[interceptor]"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].interceptors.response.eject(interceptor);
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    // Update isAuthenticated whenever user or token changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const isAuth = !!(token && user);
            if (isAuth !== isAuthenticated) {
                setIsAuthenticated(isAuth);
            }
        }
    }["AuthProvider.useEffect"], [
        user,
        token,
        isAuthenticated
    ]);
    const value = {
        user,
        token,
        login,
        logout,
        isAuthenticated,
        loading,
        error
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/AuthContext.tsx",
            lineNumber: 319,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/context/AuthContext.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AuthProvider, "oj/E2JSwAciJxWwA2ttyiO8bxlM=");
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const GUEST_CART_KEY = 'guest_cart';
const useCart = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
_s(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const CartProvider = ({ children })=>{
    _s1();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        items: [],
        total_amount: 0,
        id: null
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGuest, setIsGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check if user is authenticated
    const checkAuthStatus = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const token = localStorage.getItem('access_token');
        const user = localStorage.getItem('user');
        return !!(token && user);
    };
    // Initialize cart from localStorage or API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const isAuthenticated = checkAuthStatus();
            setIsGuest(!isAuthenticated);
            if (isAuthenticated) {
                // User is authenticated - fetch cart from API
                fetchCart();
            } else {
                // User is guest - load cart from localStorage
                loadGuestCart();
            }
        }
    }["CartProvider.useEffect"], []);
    // Load guest cart from localStorage
    const loadGuestCart = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const guestCart = localStorage.getItem(GUEST_CART_KEY);
        if (guestCart) {
            try {
                const parsedCart = JSON.parse(guestCart);
                setCart(parsedCart);
                console.log('🛒 Loaded guest cart:', parsedCart);
            } catch (e) {
                console.error('Error parsing guest cart:', e);
                setCart({
                    items: [],
                    total_amount: 0,
                    id: null
                });
            }
        } else {
            setCart({
                items: [],
                total_amount: 0,
                id: null
            });
        }
    };
    // Save guest cart to localStorage when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (isGuest && cart) {
                localStorage.setItem(GUEST_CART_KEY, JSON.stringify(cart));
            }
        }
    }["CartProvider.useEffect"], [
        cart,
        isGuest
    ]);
    // Listen for guest cart sync completion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const handleGuestCartSynced = {
                "CartProvider.useEffect.handleGuestCartSynced": (event)=>{
                    console.log('🔄 Guest cart sync completed, refreshing cart...');
                    setIsGuest(false);
                    fetchCart(); // Refresh cart from server
                }
            }["CartProvider.useEffect.handleGuestCartSynced"];
            window.addEventListener('guestCartSynced', handleGuestCartSynced);
            return ({
                "CartProvider.useEffect": ()=>window.removeEventListener('guestCartSynced', handleGuestCartSynced)
            })["CartProvider.useEffect"];
        }
    }["CartProvider.useEffect"], []);
    // Fetch cart from API - memoized to prevent infinite loops
    const fetchCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[fetchCart]": async ()=>{
            try {
                setLoading(true);
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setIsGuest(true);
                    loadGuestCart();
                    return;
                }
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('https://mycomatrix.in/api/cart/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    // Transform API response to match expected structure
                    const apiCart = response.data;
                    const transformedCart = {
                        id: apiCart.id,
                        items: apiCart.items || [],
                        total_amount: parseFloat(apiCart.total_amount || 0),
                        status: apiCart.status,
                        payment_status: apiCart.payment_status
                    };
                    setCart(transformedCart);
                    setIsGuest(false);
                    console.log('✅ Fetched cart from API:', transformedCart);
                }
            } catch (error) {
                console.error('Error fetching cart:', error);
                if (error.response?.status === 401) {
                    // Token is invalid, switch to guest mode
                    setIsGuest(true);
                    loadGuestCart();
                }
            } finally{
                setLoading(false);
            }
        }
    }["CartProvider.useCallback[fetchCart]"], []); // No dependencies needed since we get fresh token from localStorage each time
    const addToCart = async (product, quantity = 1)=>{
        console.log(`🛒 Adding to cart: ${product.name} (qty: ${quantity}), isGuest: ${isGuest}`);
        // If user is guest, update local cart
        if (isGuest) {
            setCart((prevCart)=>{
                const existingItem = prevCart.items.find((item)=>item.product.id === product.id);
                let newItems = [];
                if (existingItem) {
                    // Update quantity if item exists
                    newItems = prevCart.items.map((item)=>item.product.id === product.id ? {
                            ...item,
                            qty: item.qty + quantity
                        } : item);
                } else {
                    // Add new item with structure matching API
                    newItems = [
                        ...prevCart.items,
                        {
                            id: `guest_${product.id}_${Date.now()}`,
                            product: product,
                            qty: quantity,
                            price: parseFloat(product.price)
                        }
                    ];
                }
                // Calculate new total
                const newTotal = newItems.reduce((sum, item)=>sum + Number(item.price || item.product.price) * item.qty, 0);
                const newCart = {
                    items: newItems,
                    total_amount: newTotal,
                    id: null // guest cart doesn't have ID
                };
                console.log('💾 Updated guest cart:', newCart);
                return newCart;
            });
            return {
                success: true
            };
        }
        // If user is logged in, call the API
        try {
            const token = localStorage.getItem('access_token');
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('https://mycomatrix.in/api/cart/add/', {
                product_id: product.id,
                quantity: quantity
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                // Transform API response to match expected structure
                const apiCart = response.data;
                const transformedCart = {
                    id: apiCart.id,
                    items: apiCart.items || [],
                    total_amount: parseFloat(apiCart.total_amount || 0),
                    status: apiCart.status,
                    payment_status: apiCart.payment_status
                };
                setCart(transformedCart);
                return {
                    success: true
                };
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false
        };
    };
    // Sync guest cart to database (called from AuthContext)
    const syncGuestCart = async ()=>{
        console.log('🔄 Starting guest cart sync from CartContext...');
        const guestCartData = localStorage.getItem(GUEST_CART_KEY);
        if (!guestCartData) {
            console.log('ℹ️ No guest cart found');
            return {
                success: true,
                message: 'No items to sync'
            };
        }
        try {
            const guestCart = JSON.parse(guestCartData);
            if (!guestCart.items || guestCart.items.length === 0) {
                console.log('ℹ️ Guest cart is empty');
                localStorage.removeItem(GUEST_CART_KEY);
                return {
                    success: true,
                    message: 'No items to sync'
                };
            }
            console.log(`📦 Found ${guestCart.items.length} items in guest cart`);
            const token = localStorage.getItem('access_token');
            if (!token) {
                throw new Error('No auth token found');
            }
            // Prepare items for sync
            const itemsToSync = guestCart.items.map((item)=>({
                    product_id: item.product.id,
                    quantity: item.qty || 1
                }));
            console.log('🚀 Syncing items to database:', itemsToSync);
            // Send sync request
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('https://mycomatrix.in/api/cart/sync-guest-cart/', {
                items: itemsToSync
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                console.log('✅ Guest cart synced successfully');
                // Clear guest cart after successful sync
                localStorage.removeItem(GUEST_CART_KEY);
                // Update cart state with synced data
                const apiCart = response.data;
                const transformedCart = {
                    id: apiCart.id,
                    items: apiCart.items || [],
                    total_amount: parseFloat(apiCart.total_amount || 0),
                    status: apiCart.status,
                    payment_status: apiCart.payment_status
                };
                setCart(transformedCart);
                setIsGuest(false);
                // Dispatch custom event to notify other components
                window.dispatchEvent(new CustomEvent('guestCartSynced', {
                    detail: {
                        success: true,
                        itemCount: itemsToSync.length
                    }
                }));
                return {
                    success: true,
                    message: `${itemsToSync.length} items transferred to your cart!`
                };
            }
        } catch (error) {
            console.error('❌ Failed to sync guest cart:', error);
            return {
                success: false,
                error: error.message || 'Failed to sync cart items'
            };
        }
    };
    const removeFromCart = async (itemId)=>{
        try {
            const token = localStorage.getItem('access_token');
            if (isGuest) {
                // Handle guest cart removal
                setCart((prevCart)=>{
                    const newItems = prevCart.items.filter((item)=>item.product.id !== itemId && item.id !== itemId);
                    const newTotal = newItems.reduce((sum, item)=>sum + Number(item.price || item.product.price) * item.qty, 0);
                    return {
                        ...prevCart,
                        items: newItems,
                        total_amount: newTotal
                    };
                });
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`https://mycomatrix.in/api/cart/remove/${itemId}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // Refresh cart after removal
            await fetchCart();
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };
    const updateQuantity = async (itemId, newQuantity)=>{
        if (newQuantity < 1) return;
        try {
            const token = localStorage.getItem('access_token');
            if (isGuest) {
                // Handle guest cart update
                setCart((prevCart)=>{
                    const newItems = prevCart.items.map((item)=>item.product.id === itemId || item.id === itemId ? {
                            ...item,
                            qty: newQuantity
                        } : item);
                    const newTotal = newItems.reduce((sum, item)=>sum + Number(item.price || item.product.price) * item.qty, 0);
                    return {
                        ...prevCart,
                        items: newItems,
                        total_amount: newTotal
                    };
                });
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`https://mycomatrix.in/api/cart/update/${itemId}/`, {
                quantity: newQuantity
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // Refresh cart after update
            await fetchCart();
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };
    const clearCart = async ()=>{
        try {
            const token = localStorage.getItem('access_token');
            if (isGuest) {
                setCart({
                    items: [],
                    total_amount: 0,
                    id: null
                });
                localStorage.removeItem(GUEST_CART_KEY);
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('https://mycomatrix.in/api/cart/clear/', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCart({
                items: [],
                total_amount: 0,
                id: null
            });
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };
    // Listen for authentication changes - optimized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            let checkInterval;
            const handleStorageChange = {
                "CartProvider.useEffect.handleStorageChange": ()=>{
                    const nowAuthenticated = checkAuthStatus();
                    const wasGuest = isGuest;
                    if (wasGuest && nowAuthenticated) {
                        console.log('🔄 User logged in, waiting for cart sync...');
                        setIsGuest(false);
                    } else if (!nowAuthenticated && !wasGuest) {
                        console.log('👋 User logged out, switching to guest cart');
                        setIsGuest(true);
                        loadGuestCart();
                    }
                }
            }["CartProvider.useEffect.handleStorageChange"];
            // Listen for localStorage changes
            window.addEventListener('storage', handleStorageChange);
            // Reduced frequency check - only every 2 seconds instead of 1 second
            checkInterval = setInterval({
                "CartProvider.useEffect": ()=>{
                    const nowAuthenticated = checkAuthStatus();
                    if (isGuest === nowAuthenticated) {
                        handleStorageChange();
                    }
                }
            }["CartProvider.useEffect"], 2000);
            return ({
                "CartProvider.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorageChange);
                    if (checkInterval) clearInterval(checkInterval);
                }
            })["CartProvider.useEffect"];
        }
    }["CartProvider.useEffect"], [
        isGuest
    ]); // Only depend on isGuest
    // Utility functions - memoized to prevent infinite re-renders
    const getTotalItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[getTotalItems]": ()=>{
            if (!cart || !cart.items) return 0;
            return cart.items.reduce({
                "CartProvider.useCallback[getTotalItems]": (total, item)=>total + (item.qty || 0)
            }["CartProvider.useCallback[getTotalItems]"], 0);
        }
    }["CartProvider.useCallback[getTotalItems]"], [
        cart
    ]);
    const getTotalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[getTotalPrice]": ()=>{
            if (!cart) return 0;
            return cart.total_amount || cart.items.reduce({
                "CartProvider.useCallback[getTotalPrice]": (sum, item)=>sum + Number(item.price || item.product.price) * (item.qty || 0)
            }["CartProvider.useCallback[getTotalPrice]"], 0);
        }
    }["CartProvider.useCallback[getTotalPrice]"], [
        cart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            loading,
            isGuest,
            isAuthenticated: !isGuest,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            fetchCart,
            syncGuestCart,
            getTotalItems,
            getTotalPrice
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CartContext.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CartProvider, "HXV0jfAXUJwndIpxVBWe9mfZeP4=");
_c = CartProvider;
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navbar$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Navbar.js [app-client] (ecmascript) <export default as Navbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Nav.js [app-client] (ecmascript) <export default as Nav>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const { isAuthenticated, user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { getTotalItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [showMobileAuth, setShowMobileAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const cartItemsCount = getTotalItems();
    const handleLogout = ()=>{
        logout();
        setShowMobileAuth(false);
    };
    const getUserInitial = ()=>{
        if (user?.name) {
            return user.name.charAt(0).toUpperCase();
        } else if (user?.email) {
            return user.email.charAt(0).toUpperCase();
        }
        return 'U';
    };
    const navLinks = [
        {
            path: '/',
            label: 'Home'
        },
        {
            path: '/products',
            label: 'Products'
        },
        {
            path: '/about',
            label: 'About Us'
        },
        {
            path: '/contact',
            label: 'Contact Us'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top-bar text-white py-2 small",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                        className: "align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                md: 3,
                                className: "d-none d-md-block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center top-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/myco_matrix_mushroom?utm_source=qr&igsh=YWE2cnNmd3NxNGhw",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-white me-3 text-decoration-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fab fa-instagram"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.youtube.com/@mycomatrix",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-white me-3 text-decoration-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fab fa-youtube"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                md: 6,
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "d-none d-md-inline top-text",
                                    children: "Welcome to Myco Matrix"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                md: 3,
                                className: "text-end d-none d-md-block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:mycomatrix1@gmail.com",
                                    className: "text-white text-decoration-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-envelope me-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "top-text",
                                            children: "mycomatrix1@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navbar$3e$__["Navbar"], {
                bg: "white",
                expand: "lg",
                className: "sticky-top main-navbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navbar$3e$__["Navbar"].Brand, {
                            className: "logo-brand",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/logo.png",
                                    alt: "MYCO MATRIX",
                                    className: "img-fluid logo-image"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-none d-lg-flex align-items-center w-100 justify-content-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__["Nav"], {
                                    className: "ms-auto fw-semibold main-nav",
                                    children: navLinks.map((link)=>{
                                        const isActive = pathname === link.path || link.path !== '/' && pathname?.startsWith(link.path);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__["Nav"].Link, {
                                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                            href: link.path,
                                            className: `nav-link-item ${isActive ? 'active-nav-link' : ''}`,
                                            children: link.label
                                        }, link.path, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center gap-4 desktop-icons",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cart",
                                            className: "position-relative text-dark cart-icon",
                                            style: {
                                                textDecoration: 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    size: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                cartItemsCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badges",
                                                    children: [
                                                        Math.min(cartItemsCount, 99),
                                                        cartItemsCount > 99 && '+'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                                            align: "end",
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Toggle, {
                                                    variant: "light",
                                                    id: "user-dropdown",
                                                    className: "border-0 bg-transparent d-flex align-items-center p-0 user-toggle",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "user-avatar",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "user-initial",
                                                            children: getUserInitial()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Menu, {
                                                    className: "user-dropdown-menu",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                                                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                                            href: "/user-dashboard",
                                                            className: "dropdown-item-custom",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-tachometer-alt me-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Dashboard"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Divider, {}, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                                                            onClick: handleLogout,
                                                            className: "dropdown-item-custom text-danger",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-sign-out-alt me-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Logout"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "button text-decoration-none",
                                            children: "Login / Signup"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-lg-none",
                            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                                align: "end",
                                className: "d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Toggle, {
                                        variant: "light",
                                        id: "mobile-user-dropdown",
                                        className: "border-0 bg-transparent d-flex align-items-center p-0 user-toggle",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-avatar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "user-initial",
                                                children: getUserInitial()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 155,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Menu, {
                                        className: "user-dropdown-menu",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                                                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                                href: "/user-dashboard",
                                                className: "dropdown-item-custom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-tachometer-alt me-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Dashboard"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Divider, {}, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                                                onClick: handleLogout,
                                                className: "dropdown-item-custom text-danger",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-sign-out-alt me-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Logout"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "button text-decoration-none",
                                children: "Login / Signup"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-bottom-nav d-lg-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: `nav-icon ${pathname === '/' ? 'active' : ''}`,
                        "data-label": "Home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/products",
                        className: `nav-icon ${pathname?.startsWith('/products') ? 'active' : ''}`,
                        "data-label": "Products",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about",
                        className: `nav-icon ${pathname === '/about' ? 'active' : ''}`,
                        "data-label": "About",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: `nav-icon ${pathname === '/contact' ? 'active' : ''}`,
                        "data-label": "Contact",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cart",
                        className: `nav-icon ${pathname === '/cart' ? 'active' : ''}`,
                        "data-label": "Cart",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                cartItemsCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mobile-cart-badge",
                                    children: [
                                        Math.min(cartItemsCount, 99),
                                        cartItemsCount > 99 && '+'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Header, "aQ48MOhpAT3uu740SePoMou0JZ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white text-dark pt-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            md: 3,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/logo2.png",
                                        alt: "Mushroom Site",
                                        className: "img-fluid",
                                        style: {
                                            width: "200px",
                                            height: "140px",
                                            objectFit: "contain",
                                            margin: "auto"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 14,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3",
                                    children: "Powered by Mushroom, driving eCommerce growth through seamless IoT solutions."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            md: 3,
                            className: "products",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "titles footer-text text-dark",
                                    children: "Our Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-unstyled",
                                    style: {
                                        lineHeight: "2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products",
                                                className: "text-dark para text-decoration-none",
                                                children: "Organic Mushroom Kit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products",
                                                className: "text-dark para text-decoration-none",
                                                children: "Premium Spawns"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products",
                                                className: "text-dark para text-decoration-none",
                                                children: "Grow Bags"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products",
                                                className: "text-dark para text-decoration-none",
                                                children: "IoT Kit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            md: 3,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "titles footer-text text-dark",
                                    children: "Help"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-unstyled",
                                    style: {
                                        lineHeight: "2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "text-dark para text-decoration-none",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "text-dark para text-decoration-none",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms-conditions",
                                                className: "text-dark para text-decoration-none",
                                                children: "Terms and Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy-policy",
                                                className: "text-dark para text-decoration-none",
                                                children: "Privacy and Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/shipping-policy",
                                                className: "text-dark para text-decoration-none",
                                                children: "Shipping Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/refund-policy",
                                                className: "text-dark para text-decoration-none",
                                                children: "Refund Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            md: 3,
                            className: "footer-text",
                            style: {
                                lineHeight: "2"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "titles text-dark",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1 d-flex align-items-center gap-2 para",
                                    style: {
                                        color: "#212529"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                            size: 16,
                                            color: "rgb(50 51 50)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        "mycomatrix1@gmail.com"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1 d-flex align-items-center gap-2 para",
                                    style: {
                                        color: "#212529"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {
                                            size: 16,
                                            color: "rgb(50 51 50)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        "+91-9884248531"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3 d-flex align-items-start gap-2 para",
                                    style: {
                                        lineHeight: "1.5",
                                        color: "#212529"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                                            size: 16,
                                            color: "rgb(50 51 50)",
                                            className: "mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        "1/1/16 Ambalakar Street,",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 39
                                        }, this),
                                        "Vadugapatti, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 28
                                        }, this),
                                        "Periyakulam - 625 603,",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 37
                                        }, this),
                                        "Theni, Tamil Nadu"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                    className: "border-top mt-4 pt-4 pb-3 align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            md: 6,
                            className: "text-md-start text-center mb-3 mb-md-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-0 text-muted",
                                children: [
                                    "Copyright © ",
                                    new Date().getFullYear(),
                                    " Mycomatrix Pvt.Ltd | Powered by",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://xigi.in/",
                                        className: "color text-decoration-none",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Xigi Tech.Pvt.Ltd."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            md: 6,
                            className: "text-md-end text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-inline-flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.youtube.com/@mycomatrix",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                            size: 24,
                                            color: "rgb(50 51 50)",
                                            style: {
                                                border: "1px solid #000",
                                                borderRadius: "5px",
                                                padding: "8px",
                                                height: "40px",
                                                width: "45px",
                                                transition: "all 0.3s ease"
                                            },
                                            onMouseOver: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-3px)";
                                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                                            },
                                            onMouseOut: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/myco_matrix_mushroom?utm_source=qr&igsh=YWE2cnNmd3NxNGhw",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                            size: 24,
                                            color: "rgb(50 51 50)",
                                            style: {
                                                border: "1px solid #000",
                                                borderRadius: "5px",
                                                padding: "8px",
                                                height: "40px",
                                                width: "45px",
                                                transition: "all 0.3s ease"
                                            },
                                            onMouseOver: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-3px)";
                                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                                            },
                                            onMouseOut: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WhatsAppButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const WhatsAppButton = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobileOrTab, setIsMobileOrTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const phoneNumber = '919884248531'; // Replace with your WhatsApp number
    const message = 'Hello, I have a question about...';
    const hideOnRoutes = [
        "/login",
        "/register"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatsAppButton.useEffect": ()=>{
            const handleResize = {
                "WhatsAppButton.useEffect.handleResize": ()=>{
                    setIsMobileOrTab(window.innerWidth <= 991);
                }
            }["WhatsAppButton.useEffect.handleResize"];
            handleResize(); // Initial check
            window.addEventListener('resize', handleResize);
            return ({
                "WhatsAppButton.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["WhatsAppButton.useEffect"];
        }
    }["WhatsAppButton.useEffect"], []);
    if (hideOnRoutes.includes(pathname)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "whatsapp-button",
        style: {
            position: 'fixed',
            bottom: isMobileOrTab ? '50px' : '20px',
            right: '20px',
            zIndex: 10000
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn btn-success chat-button rounded-circle p-3",
            style: {
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
            },
            onMouseOver: (e)=>{
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
            },
            onMouseOut: (e)=>{
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                size: 30
            }, void 0, false, {
                fileName: "[project]/src/components/WhatsAppButton.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/WhatsAppButton.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/WhatsAppButton.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WhatsAppButton, "XYDUdGDJF1iQtn5nt8lzBcRe2Jo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = WhatsAppButton;
const __TURBOPACK__default__export__ = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
// src/components/ScrollToTop.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            window.scrollTo({
                top: 0,
                behavior: "auto"
            });
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
}
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhatsAppButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WhatsAppButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollToTop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function RootLayout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
                    children: [
                        !hideHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 42,
                            columnNumber: 41
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhatsAppButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, this),
                        children,
                        !hideFooter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 46,
                            columnNumber: 41
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
_s(RootLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bb91ad85._.js.map