import { connect } from 'react-redux';
import Clock from './clock';
import AddCount from './addCount';

import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock
          lastUpdate={this.props.clock.lastUpdate}
          light={this.props.clock.light}
        />
        <AddCount />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clock: state.clock,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Page);
