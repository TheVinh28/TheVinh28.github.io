import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('https://dummyjson.com/users/reset-password', {
        email: values.email,
      });

      if (response.status === 200) {
        message.success('Password reset link sent! Check your email.');
      }
    } catch (error) {
      message.error('Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-[#032541] mb-6">Reset Your Password</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address to receive a password reset link.
        </p>
        <Form name="reset-password" onFinish={onFinish} layout="vertical">
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input type="email" placeholder="Enter your email" className="rounded-lg" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full py-2 bg-[#032541] text-white text-lg rounded-lg hover:bg-[#064375] transition duration-200">
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Remembered your password? <Link to="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;