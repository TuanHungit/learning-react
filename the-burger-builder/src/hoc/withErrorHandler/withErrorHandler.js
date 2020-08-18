import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi/Auxi';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      this.resInterceptors = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
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
          <WrappedComponent {...this.props} />
        </Auxi>
      );
    }
  };
};

export default withErrorHandler;
