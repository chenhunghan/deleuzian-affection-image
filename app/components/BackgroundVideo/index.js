/**
*
* BackgroundVideo
*
*/

import React from 'react';

import styles from './styles.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class BackgroundVideo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <video muted autoplay loop controls="false" className={styles.backgroundVideo} id="videoBG">
          <source type="video/mp4" />
        </video>
    );
  }
  componentDidMount() {
    let videoUrls = [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f108f0f36ddbc6ed6_d20160704_m202318_c001_v0001029_t0010',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1137b56148f14f43_d20160704_m202321_c001_v0001008_t0009',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f102b325477b5c7dd_d20160704_m202322_c001_v0001031_t0030',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d47525b_d20160704_m202324_c001_v0001029_t0037',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d47525e_d20160704_m202325_c001_v0001029_t0011'
    ]
    var element = document.getElementById('videoBG')
    element.src = videoUrls[getRandomInt(0,4)]
    element.addEventListener('canplaythrough', function() {
      this.play()
      this.style.opacity = 1
    });
    element.addEventListener('ended',function() {

    })
  }
}

export default BackgroundVideo;
