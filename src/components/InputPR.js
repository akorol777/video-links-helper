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

  isStage = () => this.props.activeEnv === 'stage';

  isMSN = () => this.props.activeDomain === 'MSN';

  onPrNumChange = (e) => {
    const prNum = e.target.value;
    this.setState(() => ({ prNum }));
    this.props.choosePrNum(prNum);
  };

  render() {
    if (this.isStage() && !this.isMSN()) {
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
  activeDomain: state.store.domain,
  prNum: state.store.pr_num
});

const mapDispatchToProps = (dispatch) => ({
  choosePrNum: (pr_num) => dispatch(change_pr_num(pr_num))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPR);