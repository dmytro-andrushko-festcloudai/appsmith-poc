import "./styles.css";

const EmployeeList = () => {
  const sendData = () => {
    const iFrame = document.getElementById("iframeId") as any;

    iFrame.contentWindow.postMessage(
      {
        sso_access_token: "123456",
        auth_access_token: "6543322",
      },
      "*"
    );
  };

  return (
    <div className="login-page">
      <button onClick={sendData}>Send data</button>

      <iframe
        id="iframeId"
        className="filters"
        frameBorder="0"
        allow="geolocation"
        src="https://dev.appsmith.com/app/my-first-application/page1-03b75dc1-aa53-4bed-ab37-543e369f43ad"
      />
    </div>
  );
};

export default EmployeeList;
