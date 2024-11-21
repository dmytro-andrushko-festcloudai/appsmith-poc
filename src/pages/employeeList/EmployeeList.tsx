import "./styles.css";

const EmployeeList = () => {
  const getCookies = () => {
    const authToken = localStorage.getItem("token-cacascsacsacas");

    fetch("https://dev.appsmith.com/api/v1/app-templates/filters", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  };

  return (
    <div className="login-page">
      <button onClick={getCookies}>Send data</button>

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
