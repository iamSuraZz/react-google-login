import "./App.css";
import GoogleLogin from "react-google-login";

function App() {
  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login !!!</h1>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </header>
    </div>
  );
}

export default App;
