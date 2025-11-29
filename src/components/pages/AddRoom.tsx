"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const API_BASE_URL = "https://mycomatrix.in/api";

const AddRoom = ({ rooms = [], setRooms = null }) => {
  const router = useRouter();
  const { isAuthenticated, token } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    kit_id: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const getAuthHeaders = () => {
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name) {
      setError('Room name is required.');
      return;
    }

    if (!formData.kit_id) {
      setError('Kit ID is required.');
      return;
    }

    // If using API (preferred method)
    if (isAuthenticated && token) {
      setLoading(true);
      try {
        const roomData = {
          name: formData.name,
          kit_id: formData.kit_id
        };

        const response = await axios.post(`${API_BASE_URL}/rooms/create/`, roomData, {
          headers: getAuthHeaders()
        });

        setSuccess('Room added successfully!');
        setFormData({
          name: '',
          kit_id: ''
        });

        setTimeout(() => {
          router.push('/iot-monitoring');
        }, 2000);
      } catch (error) {
        console.error('Error adding room:', error);
        if (error.response?.status === 401) {
          setError('Session expired. Please login again.');
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        } else if (error.response?.data?.error) {
          setError(error.response.data.error);
        } else if (error.response?.data) {
          setError(error.response.data.message || 'Failed to add room');
        } else {
          setError('Failed to add room. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    } else if (setRooms && rooms) {
      // Fallback to local state if props provided (legacy support)
      const newRoom = {
        id: rooms.length + 1,
        ...formData
      };
      setRooms([...rooms, newRoom]);
      setSuccess('Room added successfully!');
      setFormData({
        name: '',
        kit_id: ''
      });
      setTimeout(() => {
        router.push('/iot-monitoring');
      }, 2000);
    } else {
      setError('Authentication required. Please login.');
    }
  };

  return (
        <div className="dashboard-container d-flex">
          <Sidebar activeSection="iot-monitoring" setActiveSection={() => { }} />

      <div className="main-content flex-grow-1 p-4">
        <h3 className="mb-3">Add New Room</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Card className="shadow-sm border-0">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="kitId">
                    <Form.Label>Kit ID *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Kit ID"
                      name="kit_id"
                      value={formData.kit_id}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="roomName">
                    <Form.Label>Room Name *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter room name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-end">
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Adding...' : 'Add Room'}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddRoom;
