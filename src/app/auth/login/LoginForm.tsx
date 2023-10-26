'use client'
import React from 'react';
import { AuthForm } from '@/app/components/AuthForm';


export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit from login');
    e.preventDefault();
  };
  return (
    <AuthForm formType="login" onSubmit={handleSubmit} />
  );
}
