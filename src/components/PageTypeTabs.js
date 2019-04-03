import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose_page_type } from "../actions/actions";

class PageTypeTabs extends Component {
  handleChangePageType = (pageType) => {
    this.props.choosePageType(pageType);
  };

  render() {
    return (
      <div className="row">
        {this.props.pageTypeTitles.map((title, i) => {
          return <Tab
            title={title}
            key={i}
            isActive={this.props.activePageType === title}
            handleClick={this.handleChangePageType}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activePageType: state.store.page_type
});

const mapDispatchToProps = (dispatch) => ({
  choosePageType: (pageType) => dispatch(choose_page_type(pageType))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTypeTabs);