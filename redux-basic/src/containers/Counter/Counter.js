import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label='Decrement'
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label='Add 5' clicked={this.props.onAddCounter} />
        <CounterControl label='Subtract 5' clicked={this.props.onSubstract} />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Counter Result
        </button>
        <ul>
          {this.props.results.map((el) => (
            <li key={el.id} onClick={() => this.props.onDeleteResult(el.id)}>
              {el.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};
const mapDispatchToProps = (dispatchEvent) => {
  return {
    onIncrementCounter: () => dispatchEvent(actionCreators.increment()),
    onDecrementCounter: () => dispatchEvent(actionCreators.decrement()),
    onAddCounter: () => dispatchEvent(actionCreators.add(5)),
    onSubstract: () => dispatchEvent(actionCreators.sub(5)),
    onStoreResult: (result) =>
      dispatchEvent(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatchEvent(actionCreators.deleteResult(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
