import "./styles.css";

const Login = () => {
  const send = () => {
    debugger
    const iFrame = document.getElementById("embeddedAppsmith") as any;
    iFrame.contentWindow.postMessage(
      "Hello from Meta4",
      "*"
    );
  };

  return (
    <div className="login-page">
      <button onClick={send}>Send</button>
      
      <iframe
        id="embeddedAppsmith"
        src="https://appsmith-dev.srv.festcloud.ai/app/my-first-application/login-page-670628006c61df06c4ecdfa1"
      />
    </div>
  );
};

export default Login;
