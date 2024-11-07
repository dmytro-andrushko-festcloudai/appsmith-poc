import { useEffect } from "react";
import "./styles.css";

const Home = () => {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event);
    });
  }, []);

  const send = () => {
    const iFrame = document.getElementById("embeddedAppsmith") as any;
    //Send the message in postMessage
    //replace the "<Appsmith_hosted_url>" with your Appsmith domain
    iFrame.contentWindow.postMessage(
      "Hello from Meta4",
      "*"
    );
  };

  return (
    <>
      <div className="home-page">
        <button onClick={send}>Send to the Appsmith</button>
        <iframe
          id="embeddedAppsmith"
          frameBorder="0"
          src="https://appsmith-dev.srv.festcloud.ai/app/my-first-application/page1-6704cfab6c61df06c4ecdf6f?embed=true"
        />
      </div>
    </>
  );
};

export default Home;
