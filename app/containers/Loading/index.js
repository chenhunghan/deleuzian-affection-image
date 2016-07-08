/*
 *
 * Loading
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoading from './selectors';
import styles from './styles.css';
import MdFingerprint from 'react-icons/lib/md/fingerprint'

export class Loading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.loading}>
        {this.props.status? <MdFingerprint style={{fontSize: '16px', color: 'rgba(255,255,255,1)', paddingRight: '3px'}}/>: null}
        {this.props.status? 'analysing emotions...': null}
      </div>
    );
  }
}

const mapStateToProps = selectLoading();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
