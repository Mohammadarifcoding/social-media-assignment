import React from 'react';
import logo from '/src/assets/logo-2.svg';
import Input from '../../../shared/Input/Input';
import PasswordInput from '../../../shared/Input/PasswordInput';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // ✅ Add your API call or further logic here
  };

  return (
    <div className="signup-container">
      {/* PhotoBooth Logo */}
      <div className="flex justify-center mb-4">
        <img src={logo} alt="PhotoBooth" className="h-[51px]" />
      </div>

      {/* Sign Up Form */}
      <div className="bg-white p-6 border border-gray-300 mb-3">
        <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
          Sign up to see photos and videos from your friends.
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <Input
            type="text"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            error={errors.email?.message}
          />

          {/* Name */}
          <Input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            error={errors.name?.message}
          />

          {/* Password */}
          <PasswordInput
            name="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
            error={errors.password?.message}
          />

          {/* Confirm Password */}
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            error={errors.confirmPassword?.message}
          />

          {/* Submit Button */}
          <div className="mb-2">
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </div>
        </form>
      </div>

      {/* Login Link */}
      <div className="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
        <p className="text-sm">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
