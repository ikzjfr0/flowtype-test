//@flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import NaviBar from './navi-bar';
import ContentContainer from './content-container';
//import { MenuType } from './constant';

// import Types from './demo/typography-demo';

class App extends Component {
  // state = {
  //   menuItemType: MenuType
  // };

  constructor(props) {
    super(props);
    this.state = {
      menuItemType: 'home'
    };
  }

  didClickMenuItem = item => {
    this.setState({
      menuItemType: item
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NaviBar didClickMenuItem={this.didClickMenuItem} />
          <ContentContainer
            style={{
              height: '100vh'
            }}
            menuItemType={this.state.menuItemType}
          />
          {this.state.menuItemType === 'home' &&
            <Button
              fab
              color="accent"
              style={{
                position: 'fixed',
                right: '30px',
                bottom: '30px'
              }}
            >
              <AddIcon />
            </Button>}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
