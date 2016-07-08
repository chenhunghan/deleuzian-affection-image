/*
 *
 * Video
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectVideo from './selectors';
import styles from './styles.css';

export class Video extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.video}>
        <video muted autoplay loop id="video">
          <source type="video/mp4" />
        </video>
        <span className={styles.caption} >{this.props.title}</span>
        <span className={styles.loading} id="loading">loading</span>
      </div>
    );
  }
  componentDidMount() {
    let element = document.getElementById('video')
    element.src = this.props.video
    element.addEventListener('canplaythrough', function() {
      this.play()
      document.getElementById('loading').style.opacity = 0
    });

  }
  componentWillReceiveProps() {
    document.getElementById('loading').style.opacity = 1
  }
  componentWillUpdate(nextProps) {
    let element = document.getElementById('video')
    element.src = nextProps.video
    element.addEventListener('canplaythrough', function() {
      this.play()
      document.getElementById('loading').style.opacity = 0
    });

  }
}

const mapStateToProps = selectVideo();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
