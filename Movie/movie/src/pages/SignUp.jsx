import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('https://dummyjson.com/users/add', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        message.success('Sign up successful! You can now log in.');
      }
    } catch (error) {
      message.error('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-[#032541] mb-6">Sign Up</h2>
        <p className="text-gray-600 text-center mb-6">
          Create an account to book your favorite movies!
        </p>
        <Form name="sign-up" onFinish={onFinish} layout="vertical">
          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]}> 
            <Input placeholder="Enter your first name" className="rounded-lg" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please input your last name!' }]}> 
            <Input placeholder="Enter your last name" className="rounded-lg" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}> 
            <Input type="email" placeholder="Enter your email" className="rounded-lg" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}> 
            <Input.Password placeholder="Enter your password" className="rounded-lg" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full py-2 bg-[#032541] text-white text-lg rounded-lg hover:bg-[#064375] transition duration-200">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
