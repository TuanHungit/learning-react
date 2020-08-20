import React, { Component } from 'react';
import NewPost from '../Blog/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import FullPost from '../../containers/Blog/FullPost/FullPost';
class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
    console.log('[Blog]');
    console.log(this.props);
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/posts'
                  exact
                  activeClassName='my-active'
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit:true',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path='/new-post' component={NewPost} />
          ) : null}

          <Route path='/posts' component={Posts} />
          {/*  <Redirect from='/' to='/posts' />*/}
          <Route
            render={() => <h1 style={{ textAlign: 'center' }}>Not Found!!!</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default Blog;
