import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change_pr_num, } from "../actions/actions";

class InputPR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prNum: this.props.prNum
    };
  }

  onPrNumChange = (e) => {
    const prNum = e.target.value;
    this.setState(() => ({ prNum }));
    this.props.choosePrNum(prNum);
  };

  render() {
    if (this.props.activeEnv === 'stage') {
      return (
        <input
          type="number"
          placeholder="PR num"
          autoFocus
          value={this.state.prNum}
          onChange={this.onPrNumChange}
        />
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  activeEnv: state.store.env,
  prNum: state.store.pr_num
});

const mapDispatchToProps = (dispatch) => ({
  choosePrNum: (pr_num) => dispatch(change_pr_num(pr_num))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPR);