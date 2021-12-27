import React, { Component } from "react";
import { Posts } from "./Posts";

class App extends Component {
  state = {
    posts: [
      { id: "id1", title: "Post 1" },
      { id: "id2", title: "Post 2" },
      { id: "id3", title: "Post 3" }
    ]
  };

  removePost = (id) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  };

  render() {
    const { posts } = this.state;
    
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>React Posts</h1>
        <Posts posts={posts} removePost={this.removePost} />
      </div>
    );
  }
}

export default App;
