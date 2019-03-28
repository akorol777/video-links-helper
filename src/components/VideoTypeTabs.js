import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose_video_type } from "../actions/actions";

class VideoTypeTabs extends Component {
  handleChangeVideoType = (videoType) => {
    this.props.chooseVideoType(videoType);
  };

  render() {
    return (
      <div className="row">
        {this.props.videoTypeTitles.map((title, i) => {
          return <Tab
            title={title}
            key={i}
            isActive={this.props.activeVideoType === title}
            handleClick={this.handleChangeVideoType}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeVideoType: state.store.video_type
});

const mapDispatchToProps = (dispatch) => ({
  chooseVideoType: (videoType) => dispatch(choose_video_type(videoType))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoTypeTabs);