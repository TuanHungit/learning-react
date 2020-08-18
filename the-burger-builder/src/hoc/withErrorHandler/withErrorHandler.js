import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi/Auxi';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      axios.interceptors.response.use(
        (response) => null,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    errorComfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Auxi>
          <Modal
            show={this.state.error}
            modalClosed={this.errorComfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent />
        </Auxi>
      );
    }
  };
};

export default withErrorHandler;
