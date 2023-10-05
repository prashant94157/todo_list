import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import first from '../assets/first.json';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  render() {
    return (
      <Player
        className='pt-6'
        ref={this.player}
        autoplay={true}
        loop={true}
        controls={true}
        speed={0.5}
        src={first}
        style={{ height: '50%', width: '50%' }}
      ></Player>
    );
  }
}

export default Loader;
