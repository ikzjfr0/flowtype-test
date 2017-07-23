// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import StarIcon from 'material-ui-icons/Star';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import Icon from 'material-ui/Icon';

const styleSheet = createStyleSheet('NaviBar', {
  list: {
    width: 250,
    flex: 'initial'
  },
  flex: {
    flex: 1
  }
});

class NaviBar extends Component {
  constructor(props) {
    super(props);
    this.didClickMenuItem = this.didClickMenuItem.bind(this);
  }

  state = {
    open: {
      top: false
    }
  };

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ open: drawerState });
  };

  handleTopOpen = () => this.toggleDrawer('top', true);
  handleTopClose = () => this.toggleDrawer('top', false);

  didClickMenuItem(menuItem) {
    this.props.didClickMenuItem(menuItem);
  }

  render() {
    const classes = this.props.classes;

    const topMenuListItems = (
      <div>
        <ListItem button onClick={() => this.didClickMenuItem('home')}>
          <ListItemIcon>
            <Icon color="accent">home</Icon>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => this.didClickMenuItem('cooking')}>
          <ListItemIcon>
            <Icon color="accent">subtitles</Icon>
          </ListItemIcon>
          <ListItemText primary="My cooking" />
        </ListItem>
      </div>
    );

    const bottomMenuListItems = (
      <div>
        <ListItem button onClick={() => this.didClickMenuItem('contact')}>
          <ListItemIcon>
            <Icon color="accent">contacts</Icon>
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button onClick={() => this.didClickMenuItem('about')}>
          <ListItemIcon>
            <Icon color="accent">person</Icon>
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </div>
    );

    const sideList = (
      <div>
        <List className={classes.list} disablePadding>
          {topMenuListItems}
        </List>
        <Divider />
        <List className={classes.list} disablePadding>
          {bottomMenuListItems}
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="static" color="accent">
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="Menu"
              onClick={this.handleTopOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              type="subheading"
              color="inherit"
              className={classes.flex}
            >
              Jackie Ouyang
            </Typography>
            <AccountCircleIcon />
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={this.state.open.top}
          onRequestClose={this.handleTopClose}
          onClick={this.handleTopClose}
        >
          {sideList}
        </Drawer>
      </div>
    );
  }
}

NaviBar.propTypes = {
  classes: PropTypes.object.isRequired,
  didClickMenuItem: PropTypes.func.isRequired
};

export default withStyles(styleSheet)(NaviBar);
