import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    //check if user is in state

    //else fetch user from api endpoint
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    return <div className='header'>{user ? user.name : null}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(actions.fetchUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
