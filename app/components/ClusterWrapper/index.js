/**
*
* ClusterWrapper
*
*/

import React from 'react';

import styles from './styles.css';

class ClusterWrapper extends React.Component {
  render() {
    return (
      <div className={styles.clusterWrapper} >
        {this.props.children}
      </div>
    );
  }
}

export default ClusterWrapper;
