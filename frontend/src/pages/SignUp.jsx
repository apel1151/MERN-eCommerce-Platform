import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  /********************form data updating ****************************/
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  /********************form data handling ****************************/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = formData;
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("User has created succeesfully");
        setError(false);
        navigate("/login")
      } else {
        // Handle server-side errors
        throw new Error(data.error || "Signup failed");
      }
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-cyan-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-cyan-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-cyan-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/login">
          <span className="text-blue-500">Login</span>
        </Link>
      </div>
      {success && <h1 className=" text-green-600">{success}</h1>}
      {error && <h1 className=" text-red-600">{error}</h1>}
    </div>
  );
};

export default SignUp;
