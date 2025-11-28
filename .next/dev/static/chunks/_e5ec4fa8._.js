(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/pages/Checkout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Spinner.js [app-client] (ecmascript) <export default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Checkout = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { cart, getTotalPrice, getTotalItems, clearCart, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [fromCart, setFromCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderItems, setOrderItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartTotal, setCartTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalItems, setTotalItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalAmount, setTotalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Checkout.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const checkoutProduct = sessionStorage.getItem('checkoutProduct');
                const checkoutFromCart = sessionStorage.getItem('checkoutFromCart');
                if (checkoutFromCart === 'true') {
                    setFromCart(true);
                    const cTotal = parseFloat(sessionStorage.getItem('cartTotal') || 0);
                    const cItems = parseInt(sessionStorage.getItem('cartItemCount') || 0);
                    setCartTotal(cTotal);
                    setTotalItems(cItems);
                    setTotalAmount(cTotal);
                    const items = cart?.items?.map({
                        "Checkout.useEffect": (item)=>{
                            const productId = item.product?.id || item.product_id;
                            return {
                                product: item.product?.name || 'Product',
                                product_id: productId,
                                quantity: item.qty || 1,
                                price: parseFloat(item.price || item.product?.price || 0),
                                total: parseFloat(item.price || item.product?.price || 0) * (item.qty || 1)
                            };
                        }
                    }["Checkout.useEffect"]) || [];
                    setOrderItems(items);
                } else if (checkoutProduct) {
                    const productData = JSON.parse(checkoutProduct);
                    setFromCart(false);
                    setCartTotal(productData.total || 0);
                    setTotalItems(productData.quantity || 1);
                    setTotalAmount(productData.total || 0);
                    setOrderItems([
                        {
                            product: productData.product || 'Product',
                            product_id: productData.product_id,
                            quantity: productData.quantity || 1,
                            price: productData.price || 0,
                            total: productData.total || 0
                        }
                    ]);
                }
            }
        }
    }["Checkout.useEffect"], [
        cart
    ]);
    // ✅ FIXED: Debug the final orderItems
    console.log('✅ FINAL Order Items:', orderItems);
    console.log('✅ First item product_id:', orderItems[0]?.product_id);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
        paymentMethod: 'card'
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Checkout.useEffect": ()=>{
            if (isAuthenticated) {
                const userData = JSON.parse(localStorage.getItem('user') || '{}');
                setFormData({
                    "Checkout.useEffect": (prev)=>({
                            ...prev,
                            name: `${userData.first_name || ''} ${userData.last_name || ''}`.trim(),
                            email: userData.email || '',
                            phone: userData.phone || ''
                        })
                }["Checkout.useEffect"]);
            }
        }
    }["Checkout.useEffect"], [
        isAuthenticated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Checkout.useEffect": ()=>{
            if (fromCart && totalItems === 0) {
                alert('Your cart is empty. Redirecting to products page.');
                navigate.push('/products');
            }
        }
    }["Checkout.useEffect"], [
        fromCart,
        totalItems,
        navigate
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // ✅ FIXED: Payment Success Handler
    const handlePaymentSuccess = (orderDetails)=>{
        console.log('✅ Payment successful - Order Details:', orderDetails);
        if (fromCart) {
            clearCart();
        }
        const successMessage = orderDetails.payment_method === 'cod' ? `🎉 COD Order Placed Successfully! 
Order ID: ORD-${orderDetails.db_order_id}
Amount: ₹${orderDetails.amount}
We will contact you for delivery.` : `🎉 Payment Successful! 
Order ID: ORD-${orderDetails.db_order_id}
Amount: ₹${orderDetails.amount}
Thank you for your purchase!`;
        alert(successMessage);
        if ("TURBOPACK compile-time truthy", 1) {
            sessionStorage.setItem('orderSuccessData', JSON.stringify({
                orderDetails,
                orderItems,
                shippingAddress: formData
            }));
        }
        navigate.push('/order-success');
    };
    // ✅ FIXED: Razorpay Script Load
    const loadRazorpayScript = ()=>{
        return new Promise((resolve)=>{
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = ()=>{
                console.log('✅ Razorpay script loaded successfully');
                resolve(true);
            };
            script.onerror = ()=>{
                console.error('❌ Failed to load Razorpay script');
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };
    // ✅ FIXED: COD Order Creation
    const createCODOrder = async ()=>{
        try {
            const token = localStorage.getItem('access_token') || localStorage.getItem('access');
            if (!token) {
                throw new Error('User not authenticated for COD order');
            }
            console.log('🔄 Creating COD order...');
            const codOrderPayload = {
                order_type: fromCart ? 'cart' : 'single_product',
                total_amount: totalAmount,
                items: orderItems,
                shipping_address: {
                    name: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                    city: formData.city,
                    pincode: formData.pincode
                }
            };
            console.log('📤 COD Order Payload:', codOrderPayload);
            const response = await fetch('https://mycomatrix.in/api/create-cod-order/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(codOrderPayload)
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            const orderData = await response.json();
            console.log('📥 COD Order Response:', orderData);
            if (orderData.success) {
                return {
                    success: true,
                    order_id: orderData.order_id,
                    db_order_id: orderData.db_order_id,
                    amount: totalAmount,
                    payment_method: 'cod',
                    order_status: orderData.order_status || 'pending',
                    payment_status: orderData.payment_status || 'pending'
                };
            } else {
                throw new Error(orderData.error || 'Failed to create COD order');
            }
        } catch (error) {
            console.error('❌ COD Order Creation Error:', error);
            throw error;
        }
    };
    // ✅ FIXED: Payment Process with Enhanced Debugging
    const handlePayment = async ()=>{
        try {
            setLoading(true);
            setError('');
            console.log('💰 Starting payment process...');
            console.log('📦 Order items:', orderItems);
            console.log('💳 Total amount:', totalAmount);
            // ✅ FIXED: Validate product_id before proceeding
            const missingProductIds = orderItems.filter((item)=>!item.product_id);
            if (missingProductIds.length > 0) {
                console.error('❌ Missing product_id in items:', missingProductIds);
                setError('Product information is missing. Please try again.');
                setLoading(false);
                return;
            }
            // Step 1: Razorpay script load
            const scriptLoaded = await loadRazorpayScript();
            if (!scriptLoaded) {
                setError('Payment system failed to load. Please refresh and try again.');
                setLoading(false);
                return;
            }
            // Step 2: Create Razorpay order in backend
            console.log('🔗 Creating Razorpay order...');
            const orderResponse = await fetch('https://mycomatrix.in/api/create-razorpay-order/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: totalAmount,
                    currency: 'INR'
                })
            });
            if (!orderResponse.ok) {
                throw new Error(`HTTP error! status: ${orderResponse.status}`);
            }
            const orderData = await orderResponse.json();
            console.log('📄 Razorpay order response:', orderData);
            if (!orderData.success) {
                throw new Error(orderData.error || 'Failed to create Razorpay order');
            }
            // Step 3: Razorpay options setup - FIXED VERSION
            const token = localStorage.getItem('access_token') || localStorage.getItem('access');
            const options = {
                key: 'rzp_live_RckdZPe20EQiap',
                amount: orderData.amount,
                currency: orderData.currency,
                name: 'MycoMatrix',
                description: fromCart ? `Order for ${totalItems} items` : `Order for ${locationState.product}`,
                order_id: orderData.order_id,
                // ✅ FIXED: Payment handler with complete payload
                handler: async function(response) {
                    console.log('💰 Razorpay payment response:', response);
                    try {
                        // ✅ FIXED: Enhanced verification payload with validation
                        const verifyPayload = {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            total_amount: totalAmount,
                            items: orderItems.map((item)=>{
                                console.log('🔍 Sending item to backend:', item);
                                return {
                                    product_id: item.product_id,
                                    product: item.product,
                                    quantity: item.quantity,
                                    price: item.price
                                };
                            }),
                            order_type: fromCart ? 'cart' : 'single_product'
                        };
                        console.log('📤 Sending verification payload:', verifyPayload);
                        const verifyResponse = await fetch('https://mycomatrix.in/api/verify-payment/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            },
                            body: JSON.stringify(verifyPayload)
                        });
                        const result = await verifyResponse.json();
                        console.log('📥 Verification response:', result);
                        if (result.status === 'success') {
                            console.log('✅ Payment verified successfully');
                            handlePaymentSuccess({
                                payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                db_order_id: result.db_order_id,
                                db_payment_id: result.db_payment_id,
                                amount: totalAmount,
                                payment_method: 'razorpay',
                                order_status: result.order_status || 'completed',
                                payment_status: result.payment_status || 'paid'
                            });
                        } else {
                            throw new Error(result.error || 'Payment verification failed');
                        }
                    } catch (verifyError) {
                        console.error('❌ Verification API error:', verifyError);
                        alert('❌ Payment verification failed. Please contact support.');
                        setLoading(false);
                    }
                },
                // Prefill customer details
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone
                },
                theme: {
                    color: '#28a745'
                },
                modal: {
                    ondismiss: function() {
                        console.log('❌ Payment modal closed by user');
                        setLoading(false);
                    }
                }
            };
            // Step 4: Open Razorpay checkout
            console.log('🎯 Opening Razorpay checkout...');
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('❌ Payment process error:', error);
            setError(error.message || 'Payment failed. Please try again.');
            setLoading(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('📝 Form submitted:', formData);
        // Form validation
        if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
            setError('Please fill all required fields');
            return;
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setError('Please enter a valid 10-digit phone number');
            return;
        }
        if (totalAmount === 0) {
            setError('Invalid order amount. Please try again.');
            return;
        }
        // Check authentication
        const token = localStorage.getItem('access_token') || localStorage.getItem('access');
        if (!token) {
            setError('Please login to proceed with payment');
            navigate.push('/login');
            return;
        }
        // Handle COD Order
        if (formData.paymentMethod === 'cod') {
            try {
                setLoading(true);
                console.log('🔄 Processing COD order...');
                const codResult = await createCODOrder();
                if (codResult.success) {
                    console.log('✅ COD order created successfully:', codResult);
                    handlePaymentSuccess(codResult);
                } else {
                    throw new Error('COD order creation failed');
                }
            } catch (codError) {
                console.error('❌ COD order failed:', codError);
                setError(codError.message || 'Failed to place COD order. Please try again.');
                setLoading(false);
            }
            return;
        }
        // Online payment
        await handlePayment();
    };
    if (totalAmount === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            className: "my-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "text-center p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Invalid Order"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Checkout.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted mb-4",
                        children: "Please add items to your cart or select a product"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Checkout.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        className: "button",
                        onClick: ()=>navigate.push('/products'),
                        children: "Continue Shopping"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Checkout.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/Checkout.tsx",
                lineNumber: 425,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/pages/Checkout.tsx",
            lineNumber: 424,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        className: "my-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center mb-4",
                children: "Checkout"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/Checkout.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        md: 8,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                className: "p-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "mb-4",
                                        children: "Shipping Information"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                                    children: "Full Name *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                                    type: "text",
                                                                    className: "px-3 py-2",
                                                                    name: "name",
                                                                    value: formData.name,
                                                                    onChange: handleInputChange,
                                                                    required: true,
                                                                    placeholder: "Enter your full name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                                    children: "Email Address *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                                    type: "email",
                                                                    name: "email",
                                                                    className: "px-3 py-2",
                                                                    value: formData.email,
                                                                    onChange: handleInputChange,
                                                                    required: true,
                                                                    placeholder: "Enter your email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 448,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                        children: "Phone Number *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                        type: "tel",
                                                        name: "phone",
                                                        className: "px-3 py-2",
                                                        value: formData.phone,
                                                        onChange: handleInputChange,
                                                        required: true,
                                                        placeholder: "Enter 10-digit phone number",
                                                        pattern: "[0-9]{10}",
                                                        maxLength: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 479,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                        children: "Address *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                        as: "textarea",
                                                        name: "address",
                                                        className: "px-3 py-2",
                                                        rows: 3,
                                                        value: formData.address,
                                                        onChange: handleInputChange,
                                                        required: true,
                                                        placeholder: "Enter your complete shipping address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 494,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                                    children: "City *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                                    type: "text",
                                                                    name: "city",
                                                                    className: "px-3 py-2",
                                                                    value: formData.city,
                                                                    onChange: handleInputChange,
                                                                    required: true,
                                                                    placeholder: "Enter your city"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                                    children: "Pincode *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                                    type: "text",
                                                                    name: "pincode",
                                                                    className: "px-3 py-2",
                                                                    value: formData.pincode,
                                                                    onChange: handleInputChange,
                                                                    required: true,
                                                                    placeholder: "Enter pincode",
                                                                    pattern: "[0-9]{6}",
                                                                    maxLength: "6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "mt-4 mb-3",
                                                children: "Payment Method"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 541,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                                        type: "radio",
                                                        name: "paymentMethod",
                                                        label: "Credit/Debit Card (Razorpay)",
                                                        value: "card",
                                                        checked: formData.paymentMethod === 'card',
                                                        onChange: handleInputChange,
                                                        className: "mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                                        type: "radio",
                                                        name: "paymentMethod",
                                                        label: "UPI Payment (Razorpay)",
                                                        value: "upi",
                                                        checked: formData.paymentMethod === 'upi',
                                                        onChange: handleInputChange,
                                                        className: "mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                                        type: "radio",
                                                        name: "paymentMethod",
                                                        label: "Cash on Delivery",
                                                        value: "cod",
                                                        checked: formData.paymentMethod === 'cod',
                                                        onChange: handleInputChange
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 542,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                type: "submit",
                                                className: "button mt-3 w-100",
                                                disabled: loading,
                                                size: "lg",
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__["Spinner"], {
                                                            animation: "border",
                                                            size: "sm",
                                                            className: "me-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        formData.paymentMethod === 'cod' ? 'Placing Order...' : 'Processing Payment...'
                                                    ]
                                                }, void 0, true) : formData.paymentMethod === 'cod' ? `Place Order (COD) - ₹${totalAmount.toFixed(2)}` : `Proceed to Pay ₹${totalAmount.toFixed(2)}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 571,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                variant: "danger",
                                className: "mb-4",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/Checkout.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        md: 4,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-4",
                                    children: [
                                        "Order Summary ",
                                        fromCart ? `(${totalItems} items)` : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                orderItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex justify-content-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "fw-semibold",
                                                        children: item.product
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: "text-muted",
                                                        children: [
                                                            "Qty: ",
                                                            item.quantity,
                                                            " × ₹",
                                                            item.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: "text-info",
                                                        children: [
                                                            "Product ID: ",
                                                            item.product_id || 'Not available'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fw-semibold",
                                                children: [
                                                    "₹",
                                                    item.total.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/Checkout.tsx",
                                                lineNumber: 615,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/pages/Checkout.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 619,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Subtotal ",
                                                fromCart ? `(${totalItems} items)` : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "₹",
                                                cartTotal.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Shipping"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 625,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-success",
                                            children: "FREE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 626,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 624,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Tax"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted",
                                            children: "Included"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 630,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-between mb-4 fw-bold fs-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 634,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "₹",
                                                totalAmount.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 635,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 633,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                formData.paymentMethod === 'cod' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                    variant: "info",
                                    className: "small",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Cash on Delivery:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Checkout.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Pay when you receive your order"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/Checkout.tsx",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/Checkout.tsx",
                            lineNumber: 598,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Checkout.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/Checkout.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/Checkout.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Checkout, "Zc/OCGmt4AEPCpd/MhcZ5U3U1VQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Checkout;
const __TURBOPACK__default__export__ = Checkout;
var _c;
__turbopack_context__.k.register(_c, "Checkout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/react-bootstrap/esm/CardBody.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CardBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-body');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardBody.displayName = 'CardBody';
const __TURBOPACK__default__export__ = CardBody;
}),
"[project]/node_modules/react-bootstrap/esm/CardFooter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-footer');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardFooter.displayName = 'CardFooter';
const __TURBOPACK__default__export__ = CardFooter;
}),
"[project]/node_modules/react-bootstrap/esm/CardHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardHeaderContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div', ...props }, ref)=>{
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-header');
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardHeader.useMemo[contextValue]": ()=>({
                cardHeaderBsPrefix: prefix
            })
    }["CardHeader.useMemo[contextValue]"], [
        prefix
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ref: ref,
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, prefix)
        })
    });
});
CardHeader.displayName = 'CardHeader';
const __TURBOPACK__default__export__ = CardHeader;
}),
"[project]/node_modules/react-bootstrap/esm/CardImg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CardImg = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix, className, variant, as: Component = 'img', ...props }, ref)=>{
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-img');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(variant ? `${prefix}-${variant}` : prefix, className),
        ...props
    });
});
CardImg.displayName = 'CardImg';
const __TURBOPACK__default__export__ = CardImg;
}),
"[project]/node_modules/react-bootstrap/esm/CardImgOverlay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CardImgOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-img-overlay');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardImgOverlay.displayName = 'CardImgOverlay';
const __TURBOPACK__default__export__ = CardImgOverlay;
}),
"[project]/node_modules/react-bootstrap/esm/CardLink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CardLink = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'a', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-link');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardLink.displayName = 'CardLink';
const __TURBOPACK__default__export__ = CardLink;
}),
"[project]/node_modules/react-bootstrap/esm/CardSubtitle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/divWithClassName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DivStyledAsH6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('h6');
const CardSubtitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = DivStyledAsH6, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-subtitle');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardSubtitle.displayName = 'CardSubtitle';
const __TURBOPACK__default__export__ = CardSubtitle;
}),
"[project]/node_modules/react-bootstrap/esm/CardText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CardText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'p', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-text');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardText.displayName = 'CardText';
const __TURBOPACK__default__export__ = CardText;
}),
"[project]/node_modules/react-bootstrap/esm/CardTitle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/divWithClassName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DivStyledAsH5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('h5');
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-title');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardTitle.displayName = 'CardTitle';
const __TURBOPACK__default__export__ = CardTitle;
}),
"[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardBody.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardFooter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardImg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImgOverlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardImgOverlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardSubtitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardSubtitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, bg, text, border, body = false, children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div', ...props }, ref)=>{
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
        children: body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }) : children
    });
});
Card.displayName = 'Card';
const __TURBOPACK__default__export__ = Object.assign(Card, {
    Img: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Subtitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardSubtitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ImgOverlay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImgOverlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap/esm/Feedback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
const propTypes = {
    /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */ type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /** Display feedback as a tooltip. */ tooltip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
};
const Feedback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ as: Component = 'div', className, type = 'valid', tooltip = false, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
    }));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
const __TURBOPACK__default__export__ = Feedback;
}),
"[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
// TODO
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const __TURBOPACK__default__export__ = FormContext;
}),
"[project]/node_modules/react-bootstrap/esm/FormCheckInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormCheckInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ id, bsPrefix, className, type = 'checkbox', isValid = false, isInvalid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'input', ...props }, ref)=>{
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-check-input');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
    });
});
FormCheckInput.displayName = 'FormCheckInput';
const __TURBOPACK__default__export__ = FormCheckInput;
}),
"[project]/node_modules/react-bootstrap/esm/FormCheckLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormCheckLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, htmlFor, ...props }, ref)=>{
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-check-label');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix)
    });
});
FormCheckLabel.displayName = 'FormCheckLabel';
const __TURBOPACK__default__export__ = FormCheckLabel;
}),
"[project]/node_modules/react-bootstrap/esm/ElementChildren.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forEach",
    ()=>forEach,
    "hasChildOfType",
    ()=>hasChildOfType,
    "map",
    ()=>map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function map(children, func) {
    let index = 0;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function forEach(children, func) {
    let index = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function hasChildOfType(children, type) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).some((child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === type);
}
;
}),
"[project]/node_modules/react-bootstrap/esm/FormCheck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Feedback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormCheckInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormCheckLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ElementChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ElementChildren.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
;
const FormCheck = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ id, bsPrefix, bsSwitchPrefix, inline = false, reverse = false, disabled = false, isValid = false, isInvalid = false, feedbackTooltip = false, feedback, feedbackType, className, style, title = '', type = 'checkbox', label, children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as = 'input', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-check');
    bsSwitchPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsSwitchPrefix, 'form-switch');
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const innerFormContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormCheck.useMemo[innerFormContext]": ()=>({
                controlId: id || controlId
            })
    }["FormCheck.useMemo[innerFormContext]"], [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ElementChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChildOfType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        type: type === 'switch' ? 'checkbox' : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: style,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    });
});
FormCheck.displayName = 'FormCheck';
const __TURBOPACK__default__export__ = Object.assign(FormCheck, {
    Input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/node_modules/react-bootstrap/esm/FormControl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Feedback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const FormControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, type, size, htmlSize, id, className, isValid = false, isInvalid = false, plaintext, readOnly, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'input', ...props }, ref)=>{
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-control');
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : "TURBOPACK unreachable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === 'color' && `${bsPrefix}-color`, isValid && 'is-valid', isInvalid && 'is-invalid')
    });
});
FormControl.displayName = 'FormControl';
const __TURBOPACK__default__export__ = Object.assign(FormControl, {
    Feedback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/node_modules/react-bootstrap/esm/FormFloating.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const FormFloating = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-floating');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
FormFloating.displayName = 'FormFloating';
const __TURBOPACK__default__export__ = FormFloating;
}),
"[project]/node_modules/react-bootstrap/esm/FormGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
const FormGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ controlId, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div', ...props }, ref)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormGroup.useMemo[context]": ()=>({
                controlId
            })
    }["FormGroup.useMemo[context]"], [
        controlId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: context,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...props,
            ref: ref
        })
    });
});
FormGroup.displayName = 'FormGroup';
const __TURBOPACK__default__export__ = FormGroup;
}),
"[project]/node_modules/react-bootstrap/esm/FormLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const FormLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'label', bsPrefix, column = false, visuallyHidden = false, className, htmlFor, ...props }, ref)=>{
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-label');
    let columnClass = 'col-form-label';
    if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : "TURBOPACK unreachable";
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
});
FormLabel.displayName = 'FormLabel';
const __TURBOPACK__default__export__ = FormLabel;
}),
"[project]/node_modules/react-bootstrap/esm/FormRange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormRange = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, id, ...props }, ref)=>{
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-range');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        ...props,
        type: "range",
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        id: id || controlId
    });
});
FormRange.displayName = 'FormRange';
const __TURBOPACK__default__export__ = FormRange;
}),
"[project]/node_modules/react-bootstrap/esm/FormSelect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormSelect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, size, htmlSize, className, isValid = false, isInvalid = false, id, ...props }, ref)=>{
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-select');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("select", {
        ...props,
        size: htmlSize,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
        id: id || controlId
    });
});
FormSelect.displayName = 'FormSelect';
const __TURBOPACK__default__export__ = FormSelect;
}),
"[project]/node_modules/react-bootstrap/esm/FormText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const FormText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix, className, as: Component = 'small', muted, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-text');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, muted && 'text-muted')
    });
});
FormText.displayName = 'FormText';
const __TURBOPACK__default__export__ = FormText;
}),
"[project]/node_modules/react-bootstrap/esm/Switch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        ref: ref,
        type: "switch"
    }));
Switch.displayName = 'Switch';
const __TURBOPACK__default__export__ = Object.assign(Switch, {
    Input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Input,
    Label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Label
});
}),
"[project]/node_modules/react-bootstrap/esm/FloatingLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FloatingLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, children, controlId, label, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-floating');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                htmlFor: controlId,
                children: label
            })
        ]
    });
});
FloatingLabel.displayName = 'FloatingLabel';
const __TURBOPACK__default__export__ = FloatingLabel;
}),
"[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormFloating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormFloating.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FloatingLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
;
;
;
const propTypes = {
    /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */ _ref: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */ validated: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
};
const Form = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, validated, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'form', ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, validated && 'was-validated')
    }));
Form.displayName = 'Form';
Form.propTypes = propTypes;
const __TURBOPACK__default__export__ = Object.assign(Form, {
    Group: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Control: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Floating: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormFloating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Check: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Switch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Select: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    FloatingLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap/esm/AlertHeading.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/divWithClassName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DivStyledAsH4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
const AlertHeading = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = DivStyledAsH4, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'alert-heading');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
AlertHeading.displayName = 'AlertHeading';
const __TURBOPACK__default__export__ = AlertHeading;
}),
"[project]/node_modules/react-bootstrap/esm/AlertLink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@restart/ui/esm/Anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const AlertLink = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'alert-link');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
AlertLink.displayName = 'AlertLink';
const __TURBOPACK__default__export__ = AlertLink;
}),
"[project]/node_modules/react-bootstrap/esm/Alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uncontrollable/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__ = __turbopack_context__.i("[project]/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript) <export default as useUncontrolled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$AlertHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/AlertHeading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$AlertLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/AlertLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Fade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CloseButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CloseButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
const Alert = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((uncontrolledProps, ref)=>{
    const { bsPrefix, show = true, closeLabel = 'Close alert', closeVariant, className, children, variant = 'primary', onClose, dismissible, transition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], ...props } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__["useUncontrolled"])(uncontrolledProps, {
        show: 'onClose'
    });
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'alert');
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Alert.useEventCallback[handleClose]": (e)=>{
            if (onClose) {
                onClose(false, e);
            }
        }
    }["Alert.useEventCallback[handleClose]"]);
    const Transition = transition === true ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : transition;
    const alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        role: "alert",
        ...!Transition ? props : undefined,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
        children: [
            dismissible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CloseButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: handleClose,
                "aria-label": closeLabel,
                variant: closeVariant
            }),
            children
        ]
    });
    if (!Transition) return show ? alert : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Transition, {
        unmountOnExit: true,
        ...props,
        ref: undefined,
        in: show,
        children: alert
    });
});
Alert.displayName = 'Alert';
const __TURBOPACK__default__export__ = Object.assign(Alert, {
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$AlertLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$AlertHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/node_modules/react-bootstrap/esm/Alert.js [app-client] (ecmascript) <export default as Alert>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Alert.js [app-client] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap/esm/Spinner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Spinner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, variant, animation = 'border', size, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div', className, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'spinner');
    const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
    });
});
Spinner.displayName = 'Spinner';
const __TURBOPACK__default__export__ = Spinner;
}),
"[project]/node_modules/react-bootstrap/esm/Spinner.js [app-client] (ecmascript) <export default as Spinner>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Spinner.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e5ec4fa8._.js.map