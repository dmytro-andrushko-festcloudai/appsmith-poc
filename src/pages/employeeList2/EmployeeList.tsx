import { useEffect } from "react";
import "./styles.css";

type IframeDataType = {
  id: string;
  url: string;
  className?: string;
  dependency?: string;
};

const initData: IframeDataType[] = [
  {
    id: "filter",
    url: "https://dev.appsmith.com/app/my-first-application/filters-direct-connection-613159a0-561d-44f2-a227-a4c6083ea8b3",
    className: "filters",
  },
  {
    id: "list",
    url: "https://dev.appsmith.com/app/my-first-application/employee-direct-connection-9c3b2726-5512-43da-9ae0-4779f942cea2",
    className: "list",
    dependency: "filter",
  },
  {
    id: "list2",
    url: "https://dev.appsmith.com/app/my-first-application/employee-direct-connection-9c3b2726-5512-43da-9ae0-4779f942cea2",
    className: "list",
    dependency: "filter",
  },
];

const EmployeeList = () => {
  useEffect(() => {
    const messageHandler = (event: any) => {
      if (event) {
        const { dependencyFrom, data } = event.data;

        initData.forEach(({ id, dependency }: IframeDataType) => {
          if (dependencyFrom === dependency) {
            const iFrame = document.getElementById(id) as any;

            iFrame.contentWindow.postMessage(data, "*");
          }
        });
      }
    };

    //add the event listener to read the incoming message
    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <div className="login-page">
      {initData.map(({ id, url, className }) => {
        return (
          <iframe
            key={id}
            id={id}
            className={className}
            frameBorder="0"
            allow="geolocation"
            src={url}
          />
        );
      })}
    </div>
  );
};

export default EmployeeList;
