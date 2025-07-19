import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import Navbar from "../../components/Navbar";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await api.delete(`/posts/${id}`);
      fetchPosts();
    }
  };

  return (
    <>
    <Navbar />
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Posts</h2>
        <Link to="/posts/create">
          <Button variant="primary">Create New</Button>
        </Link>
      </div>

      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <small className="text-muted">by {post.user?.name}</small>
            <div className="mt-3">
              <Link to={`/posts/edit/${post.id}`}>
                <Button variant="warning" size="sm" className="me-2">
                  Edit
                </Button>
              </Link>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
      </Container>
    </>
  );
}
