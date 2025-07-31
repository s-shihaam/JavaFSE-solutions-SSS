import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ posts: data }); // set posts to state
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        throw error;
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred while rendering posts:\n" + error.message);
    console.error("Error details:", info);
  }

  render() {
    return (
      <div>
        <h1>📚 Blog Posts</h1>
        {this.state.posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
