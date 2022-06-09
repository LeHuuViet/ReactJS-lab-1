import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-page container">
      <img
        className="logo"
        src="https://powergatesoftware.com/wp-content/uploads/2019/03/logo-420-x-108.png"
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;