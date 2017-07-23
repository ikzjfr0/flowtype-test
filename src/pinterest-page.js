import React, { Component } from 'react';
import './pinterest-page.css';

class PinterestPage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'pink',
          height: '100vh',
          width: '100vw'
        }}
      >
        <div className="pinterestBoardWrapper">
          <div className="pinterestBoard">
            <a
              data-pin-do="embedBoard"
              href="https://au.pinterest.com/wangbourne/she-is-my-wife/"
              data-pin-board-width="150"
              data-pin-scale-height="1024"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PinterestPage;
