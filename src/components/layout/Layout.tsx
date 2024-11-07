import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="nav">
            <Link to="/employees1">WithS tate</Link>
            <Link to="/employees2">Direct</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
