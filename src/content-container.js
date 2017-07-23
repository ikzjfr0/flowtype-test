import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import HomeContent from './home-content';
import CookingContent from './cooking-content';
import ContactContent from './contact-content';
import AboutContent from './about-content';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const classes = this.props.classes;
    let view = null;
    if (this.props.menuItemType === 'home') {
      view = <HomeContent />;
    } else if (this.props.menuItemType === 'cooking') {
      view = <CookingContent />;
    } else if (this.props.menuItemType === 'contact') {
      view = <ContactContent />;
    } else if (this.props.menuItemType === 'about') {
      view = <AboutContent />;
    } else {
      view = <HomeContent />;
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default ContentContainer;
