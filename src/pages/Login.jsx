import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="flex">LOGIN</h2>
      <form onSubmit={signIn} className="flex flex-col mx-auto">
        <label>
          Email
          <input
            className="h-6"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="p-2 bg-gray-400 text-white border-2">
          Login
        </button>
        <span>
          <Link to="/signup">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
