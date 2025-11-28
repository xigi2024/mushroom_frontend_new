"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/login.css";
import { useAuth } from "../../context/AuthContext";
const mushroomImg = "/assets/mushoom-img.jpg";

interface LoginForm {
  email: string;
  password: string;
}

// Add interface for errors
interface LoginErrors {
  email?: string;
  password?: string;
}

const Login = () => {
  const navigate = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  // Fix: Type the errors state properly
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof LoginErrors]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors: LoginErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('🔑 Starting login submission...');
    setIsSubmitting(true);

    try {
      // Check if there are guest cart items
      const guestCartData = localStorage.getItem('guest_cart');
      let hasGuestItems = false;
      let itemCount = 0;

      if (guestCartData) {
        try {
          const guestCart = JSON.parse(guestCartData);
          hasGuestItems = guestCart?.items?.length > 0;
          itemCount = guestCart?.items?.length || 0;
        } catch (e) {
          console.error('Error parsing guest cart:', e);
        }
      }

      console.log('🛒 Has guest items to sync:', hasGuestItems, 'Count:', itemCount);

      // Attempt login
      const result = await login({
        email: formData.email,
        password: formData.password,
      });

      console.log('📝 Login result:', result);

      if (result?.success) {
        console.log('✅ Login successful');

        // Show success message
        toast.success(result.message || "Login successful!");

        // Handle cart sync result
        if (result.cartSync) {
          if (result.cartSync.success && result.cartSync.itemCount > 0) {
            toast.success(result.cartSync.message || `${result.cartSync.itemCount} items transferred to your cart!`);
          } else if (!result.cartSync.success) {
            toast.warning("Login successful, but failed to transfer cart items. Your items are still saved locally.");
          }
        }

        // Navigate to home page after a short delay
        setTimeout(() => {
          console.log('🏠 Redirecting to home page');
          if (result.user.role === "admin") {
            navigate.replace("/admin-dashboard");
          } else {
            navigate.replace("/user-dashboard");
          }
        }, hasGuestItems ? 2000 : 1000); // Longer delay if there were items to sync

      } else {
        // Show specific error message from the server
        const errorMessage = result?.message || 'Login failed. Please check your credentials.';
        toast.error(errorMessage);

        // Clear password field on error for security
        setFormData(prev => ({
          ...prev,
          password: ''
        }));
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.message || "An error occurred during login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="login-container top pt-5">
      <ToastContainer position="top-right" autoClose={5000} />

      <Row className="login-card shadow p-0">
        {/* Left Side */}
        <Col md={6} className="login-left">
          <img
            src={mushroomImg}
            alt="Mushroom"
            className="img-fluid login-image"
          />
        </Col>

        {/* Right Side */}
        <Col md={6} className="login-right p-4">
          <h2 className="titles mb-3">Welcome back</h2>
          <p className="para mb-4">
            Welcome back! Please login to your account
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="login-input-group mb-3 position-relative">
              <label htmlFor="email" className="form-label fs-5">
                Email Address
              </label>
              <div className="position-relative">
                <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                  <FiMail />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ps-5 pe-5 ${errors.email ? "is-invalid" : ""
                    }`}
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
              </div>
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* Password */}
            <div className="login-input-group mb-3 position-relative">
              <label htmlFor="password" className="form-label fs-5">
                Password
              </label>
              <div className="position-relative">
                <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                  <FiLock />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control ps-5 pe-5 ${errors.password ? "is-invalid" : ""
                    }`}
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-3"
                  suppressHydrationWarning
                >
                  {showPassword ? (
                    <FiEyeOff className="text-muted" />
                  ) : (
                    <FiEye className="text-muted" />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="button p-2 para border rounded w-100"
                disabled={isSubmitting}
                suppressHydrationWarning
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate.push("/register")}
              className="color fw-bold"
            >
              Register
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;