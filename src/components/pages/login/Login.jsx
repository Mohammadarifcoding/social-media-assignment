import React from 'react';
import logo from '/src/assets/logo.svg'
import { Link } from 'react-router';
import Input from '../../../shared/Input/Input';
import PasswordInput from '../../../shared/Input/PasswordInput';import { useForm } from 'react-hook-form';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Submitted:", data);
    // 🔐 Add your login API logic here
  };

  return (
    <div className="login-container rounded-md">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="PhotoBooth" className="h-[51px]" />
      </div>

      {/* Login Form */}
      <div className="bg-white p-6 border border-gray-300 mb-3 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <Input
            type="text"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            error={errors.email?.message}
          />

          {/* Password */}
          <PasswordInput
            name="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            error={errors.password?.message}
          />

          {/* Login Button */}
          <div>
            <button type="submit" className="login-button">
              Log in
            </button>
          </div>
        </form>
      </div>

      {/* Sign Up Box */}
      <div className="bg-white p-6 border border-gray-300 text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;