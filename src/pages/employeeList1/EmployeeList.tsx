import { useEffect, useState } from "react";
import "./styles.css";

const Login = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const messageHandler = (event: any) => {
      if (event) {
        const messageReceived = event.data;

        if (Array.isArray(messageReceived)) {
          setEmployees(messageReceived);
        }
        console.log("===>", messageReceived);
      }
    };

    //add the event listener to read the incoming message
    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  useEffect(() => {
    const iFrame = document.getElementById("employeeList") as any;

    iFrame.contentWindow.postMessage({ employees }, "*");

    return () => {};
  }, [employees]);

  return (
    <div className="login-page">
      <iframe
        id="filters"
        className="filters"
        frameBorder="0"
        allow="geolocation"
        src="https://dev.appsmith.com/app/my-first-application/page1-03b75dc1-aa53-4bed-ab37-543e369f43ad"
      />

      <iframe
        id="employeeList"
        className="list"
        frameBorder="0"
        allow="geolocation"
        src="https://dev.appsmith.com/app/my-first-application/page2-dcfc6fa3-2f2d-466f-9d3b-8aef4cc5dc01"
      />
    </div>
  );
};

export default Login;
