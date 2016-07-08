/*
 *
 * Error
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectError from './selectors';
import styles from './styles.css';
import MdErrorOutline from 'react-icons/lib/md/error-outline'

export class Error extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.error}>
        {(this.props.error.message.length > 0 && !this.props.loading.status)? <MdErrorOutline style={{fontSize: '16px', color: 'rgba(255,255,255,1)', paddingRight: '4px', marginTop: '-2.5px'}}/>: null}
        {(this.props.error.message.length > 0 && !this.props.loading.status)? 'no face found': null}
      </div>
    );
  }
}

const mapStateToProps = selectError();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);
