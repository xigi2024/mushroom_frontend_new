"use client";
import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col, Alert } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaShoppingBag, FaHome } from 'react-icons/fa';

const OrderSuccess = () => {
    const router = useRouter();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = sessionStorage.getItem('orderSuccessData');
            if (data) {
                setOrderData(JSON.parse(data));
                // Optional: Clear the data after reading so it doesn't persist if they come back
                // sessionStorage.removeItem('orderSuccessData'); 
            } else {
                // If no data, redirect to home or products
                router.push('/');
            }
        }
    }, [router]);

    if (!orderData) {
        return null; // Or a loading spinner
    }

    const { orderDetails, orderItems, shippingAddress } = orderData;

    return (
        <Container className="my-5">
            <Card className="border-0 shadow-sm p-4">
                <div className="text-center mb-4">
                    <FaCheckCircle className="text-success mb-3" size={64} />
                    <h2 className="fw-bold text-success">Order Placed Successfully!</h2>
                    <p className="lead">Thank you for your purchase, {shippingAddress?.name}!</p>
                    <Alert variant="success" className="d-inline-block mt-2">
                        Order ID: <strong>ORD-{orderDetails?.db_order_id}</strong>
                    </Alert>
                </div>

                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="mb-4">
                            <Card.Header className="bg-light fw-bold">Order Details</Card.Header>
                            <Card.Body>
                                <Row className="mb-3">
                                    <Col sm={4} className="text-muted">Payment Method:</Col>
                                    <Col sm={8} className="fw-semibold text-uppercase">{orderDetails?.payment_method}</Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={4} className="text-muted">Payment Status:</Col>
                                    <Col sm={8}>
                                        <span className={`badge bg-${orderDetails?.payment_status === 'paid' ? 'success' : 'warning'}`}>
                                            {orderDetails?.payment_status?.toUpperCase()}
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={4} className="text-muted">Amount Paid:</Col>
                                    <Col sm={8} className="fw-bold">₹{orderDetails?.amount?.toFixed(2)}</Col>
                                </Row>
                                <Row>
                                    <Col sm={4} className="text-muted">Shipping Address:</Col>
                                    <Col sm={8}>
                                        {shippingAddress?.address}, {shippingAddress?.city}, {shippingAddress?.pincode}
                                        <br />
                                        Phone: {shippingAddress?.phone}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Header className="bg-light fw-bold">Items Ordered</Card.Header>
                            <Card.Body>
                                {orderItems?.map((item, index) => (
                                    <div key={index} className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2 last-border-0">
                                        <div>
                                            <h6 className="mb-0">{item.product}</h6>
                                            <small className="text-muted">Qty: {item.quantity} x ₹{item.price?.toFixed(2)}</small>
                                        </div>
                                        <span className="fw-bold">₹{item.total?.toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between mt-3 pt-2 border-top">
                                    <h5 className="mb-0">Total</h5>
                                    <h5 className="mb-0 text-success">₹{orderDetails?.amount?.toFixed(2)}</h5>
                                </div>
                            </Card.Body>
                        </Card>

                        <div className="d-flex justify-content-center gap-3">
                            <Button variant="outline-primary" onClick={() => router.push('/')}>
                                <FaHome className="me-2" /> Return Home
                            </Button>
                            <Button variant="success" onClick={() => router.push('/products')}>
                                <FaShoppingBag className="me-2" /> Continue Shopping
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default OrderSuccess;
