/**
*
* Shade
*
*/

import React from 'react';

import styles from './styles.css';

class Shade extends React.Component {
  render() {
    return (
      <div className={styles.shade}>
        {this.props.children}
      </div>
    );
  }
}

export default Shade;
