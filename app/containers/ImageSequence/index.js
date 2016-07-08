/*
 *
 * ImageSequence
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectImageSequence from './selectors';
import styles from './styles.css';

//import {clm, pModel} from './clmtrackr'
import {GET_EMOTION_REQUESTED} from '../EntitiesList/constants'

export class ImageSequence extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.imageSequence}>
        {this.props.img.map((url)=> {
          return (
            <img key={url} src={url} onClick={() => this.props.dispatch({type: GET_EMOTION_REQUESTED, payload: {'url': url, 'entity': this.props}})}/>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = selectImageSequence();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSequence);
