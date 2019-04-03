import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change_title, } from "../actions/actions";

class InputTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  isTitlePage = () => this.props.page_type === 'title';
  isTvShow = () => this.props.video_type === 'tv-shows';

  getPlaceholder = () => (this.isTvShow() ? "title/season/episode" : "title");

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
    this.props.chooseTitle(title);
  };

  render() {
    if (this.isTitlePage()) {
      return (
        <div className="row">
          <input
            type="text"
            placeholder={this.getPlaceholder()}
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
        </div>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  activeDomain: state.store.domain,
  page_type: state.store.page_type,
  video_type: state.store.video_type,
  title: state.store.title
});

const mapDispatchToProps = (dispatch) => ({
  chooseTitle: (title) => dispatch(change_title(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTitle);