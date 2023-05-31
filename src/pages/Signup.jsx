import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div
        className="flex flex-col p-24 rounded-xl items-center"
        style={{
          background: "linear-gradient(to bottom, #4F46E5, #8669FF)",
          transition: "background 0.3s ease",
        }}
      >
        <h1 className="flex py-4 text-white text-3xl">SIGN UP</h1>
        <form onSubmit={signup} className="flex flex-col w-[50vw] mx-auto">
          <label>
            <input
              className="h-6 w-full p-2 border-none"
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              className="p-2 border-none"
              type="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="p-2 mt-4 rounded-xl bg-gray-400 text-white border-2 transition-colors duration-300 hover:bg-gray-500"
            style={{
              background: "linear-gradient(to bottom, #4F46E5, #8669FF)",
              color: "#d6d4fa",
            }}
          >
            Register
          </button>
          <div className="flex justify-end mt-2">
            <Link to="/login" className="no-underline text-white">
              Already a User? Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
