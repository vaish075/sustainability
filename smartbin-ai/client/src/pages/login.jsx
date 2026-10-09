import { useState } from "react";
import {
  Recycle,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo authentication
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="login-page">

      {/* Background decoration */}
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <div className="login-container">

        {/* Brand */}
        <div className="login-brand">
          <div className="login-logo">
            <Recycle size={24} />
          </div>

          <div>
            <strong>SmartBin</strong>
            <span>AI</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="login-card">

          <div className="login-heading">
            <div className="login-badge">
              <ShieldCheck size={14} />
              MUNICIPAL OPERATIONS
            </div>

            <h1>Welcome back</h1>

            <p>
              Sign in to access your city's waste intelligence
              dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="login-field">

              <label>Email Address</label>

              <div className="login-input-wrapper">
                <Mail size={17} />

                <input
                  type="email"
                  placeholder="admin@smartbin.ai"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

            </div>

            {/* Password */}
            <div className="login-field">

              <div className="password-label">
                <label>Password</label>
                <button type="button">
                  Forgot password?
                </button>
              </div>

              <div className="login-input-wrapper">
                <Lock size={17} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>

            </div>

            {/* Remember */}
            <div className="remember-row">

              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <span className="secure-login">
                <ShieldCheck size={13} />
                Secure Login
              </span>

            </div>

            {/* Submit */}
            <button className="login-button" type="submit">
              Sign in to Dashboard
              <ArrowRight size={17} />
            </button>

          </form>

          {/* Demo credentials */}
          <div className="demo-login">

            <div className="demo-login-title">
              DEMO ACCESS
            </div>

            <p>
              Enter any valid email and password to access
              the prototype.
            </p>

          </div>

        </div>

        {/* Footer */}
        <div className="login-footer">
          <span>SmartBin AI</span>
          <span>•</span>
          <span>Smart Waste Management</span>
        </div>

      </div>
    </div>
  );
}

export default Login;