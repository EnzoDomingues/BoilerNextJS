import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
  render() {
    const { active } = this.props.loading;
    return (
      <div className={active ? 'loading active' : 'loading'}>Carregando...</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Loading);
