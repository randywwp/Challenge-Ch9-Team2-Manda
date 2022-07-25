import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";

export const Nav = () => {
  const { logout } = useAuth();

  return (
    <>
      <Container className="">
        <div className="row d-flex align-items-center">
          <div className="col-10 pt-2">
            <Link to="/" className="link">
              <h5 style={{ color: "black" }}>Welcome to Rock, Paper, Scissors Games</h5>
            </Link>
          </div>
          <div className="col pt-1">
              <Link to="/update-profile" className="btn btn-primary">
                Profile
              </Link>
          </div>
          <div className="col pt-1">
            <Link
              to="/login"
              onClick={logout}
              className="btn btn-danger btn-sm"
            >
              Logout
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
