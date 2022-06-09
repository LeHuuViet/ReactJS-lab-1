import { useState, useEffect } from "react";
import { validateEmail, validatePassword } from "../validate";

const account = { email: "lhv.nk53@gmail.com", password: "123456" };

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [value, setValue] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    account: false,
  });

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    setValue({ ...value, [e.target.name]: inputValue });
  };

  useEffect(() => {
    const rememberMe = localStorage.getItem("remember");
    if (rememberMe === "true") setIsLoggedIn(true);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const emailError = validateEmail(value.email);
    const passwordError = validatePassword(value.password);
    setError((prev) => ({ ...prev, email: "", password: "" }));

    if (!!emailError || !!passwordError) {
      return setError((prev) => ({
        ...prev,
        email: emailError,
        password: passwordError,
      }));
    }

    if (value.rememberMe) {
      localStorage.setItem("remember", "true");
    }

    if (value.email === account.email && value.password === account.password) {
      return setIsLoggedIn(true);
    } else {
      setError((prev) => ({ ...prev, account: true }));
    }
  };

  const handleRememberMe = () => {
    setValue((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
  };

  const handleLogout = () => {
    setError((prev) => ({ ...prev, email: "", password: "", account: false}));
    setValue((prev) => ({ ...prev, email:"", password: ""}));
    setIsLoggedIn(false);
    localStorage.setItem("remember", "");
  };

  if (isLoggedIn) {
    return (
      <>
        <p>Home Page</p>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="validation-form">
      {error.account && (
        <div className="alert">
          <p className="alert-msg">Invalid username / password</p>
        </div>
      )}

      <div className="form-input">
        <label className="form-label">Địa chỉ email</label>
        <input
          value={value.email}
          onChange={handleChange}
          className="form-control"
          name="email"
          type="text"
        />
        <p className="error-msg">{error.email}</p>
      </div>
      <div className="form-input">
        <label className="form-label">Mật khẩu</label>
        <input
          value={value.password}
          onChange={handleChange}
          className="form-control"
          name="password"
          type="password"
        />
        <p className="error-msg">{error.password}</p>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={value.rememberMe}
          onChange={handleRememberMe}
        />
        <label className="form-check-label">Lưu thông tin đăng nhập</label>
      </div>
      <div className="login-button">
        <button type="submit" className="button">
          Đăng nhập
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
