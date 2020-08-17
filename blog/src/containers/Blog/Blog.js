import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    count: 0,
  };
  componentWillMount() {
    console.log('[componentWillMount]');
  }
  componentDidMount() {
    console.log('[componentDidMount]');
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const updatedPost = response.data.slice(0, 4).map((post) => {
        return { ...post, author: 'Hung' };
      });
      this.setState({
        posts: updatedPost,
      });
    });
  }
  render() {
    console.log(`render`);
    console.log(this.state);
    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });
    return (
      <div>
        <section className='Posts'>{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
