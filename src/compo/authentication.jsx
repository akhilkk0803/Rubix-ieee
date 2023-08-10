import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
const UserAuthModal = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const switchTab = (tab) => {
    setActiveTab(tab);
    setErrorMessage(""); // Clear any error messages
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    // Handle form submission (sign in or sign up) here
  };

  return (
    <div className="user-modal">
      <div className="user-modal-container">
        <ul className="switcher">
          <li>
            <a href="#0" onClick={() => switchTab("login")}>
              Sign in
            </a>
          </li>
          <li>
            <a href="#0" onClick={() => switchTab("signup")}>
              New account
            </a>
          </li>
        </ul>

        <div className="auth-form">
          {activeTab === "login" && (
            <div id="login">
              {/* Sign in form */}
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="input-field"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errorMessage && (
                  <span className="error-message">{errorMessage}</span>
                )}
                <p className="fieldset">
                  <button className="submit-button" type="submit">
                    Login
                  </button>
                </p>
              </form>
            </div>
          )}

          {activeTab === "signup" && (
            <div id="signup">
              {/* Sign up form */}
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="input-field"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errorMessage && (
                  <span className="error-message">{errorMessage}</span>
                )}
                <p className="fieldset">
                  <button className="submit-button" type="submit">
                    Create account
                  </button>
                </p>
              </form>
            </div>
          )}
        </div>

        {/* Rest of the component */}
      </div>
    </div>
  );
};

export default UserAuthModal;
