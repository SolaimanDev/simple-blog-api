import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import api from "../../api/axios";// Axios instance with auth token

export default function CreatePost() {
  const [form, setForm] = useState({ title: "", body: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    try {
      await api.post("/posts", form);
      navigate("/posts"); // redirect to posts list
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <Container style={{ maxWidth: "600px" }} className="mt-5">
      <h2>Create New Post</h2>

      {status && <Alert variant="danger">{status}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title?.[0]}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="body"
            value={form.body}
            onChange={handleChange}
            isInvalid={!!errors.body}
          />
          <Form.Control.Feedback type="invalid">
            {errors.body?.[0]}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Create Post
        </Button>
      </Form>
    </Container>
  );
}
