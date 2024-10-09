import { Navigate, Outlet } from "react-router-dom";
import "./styles.css";

type LayoutProps = {
  email: string;
};

const Layout = ({ email }: LayoutProps) => {
  if (!email) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          

          <div>
            <span>User email:</span>
            <span>
              {" "}
              <b>{email}</b>
            </span>
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
