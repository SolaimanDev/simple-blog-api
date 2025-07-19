import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-5 shadow-lg" style={{ maxWidth: 500, width: "100%" }}>
        <h2 className="mb-4 text-center">Welcome to the Blog App</h2>
        <p className="text-center">Please login or register to continue.</p>

        <div className="d-flex justify-content-around mt-4">
          <Button variant="primary" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="secondary" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </Card>
    </Container>
  );
}
