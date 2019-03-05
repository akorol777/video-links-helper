import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggle_show_label } from "../actions/actions";

class LabelToggle extends Component {
  handleLabelToggle = () => {
    this.props.toggleShowLabel(!this.props.show_label)
  };

  render() {

    const text = this.props.show_label ? 'Hide labels' : 'Show labels';

    return (
      <div className="row">
        <div
          className="button"
          onClick={this.handleLabelToggle}
        >{text}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  show_label: state.store.show_label
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowLabel: (show_label) => dispatch(toggle_show_label(show_label))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelToggle);