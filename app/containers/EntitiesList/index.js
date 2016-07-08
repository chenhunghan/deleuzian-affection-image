/*
 *
 * EntitiesList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectEntitiesList from './selectors';
import styles from './styles.css';
import {changeHighlightEntity} from './actions'

export const entitiesListData = [
  {
    title: 'Battleship Potemkin',
    description: 'from the anger of the sailors to the revolutionary explosion; from the stone to the scream, as in the three postures of the marble lions ("and the stones have roared").',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118673cd4f02cb01_d20160704_m202838_c001_v0001029_t0025',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1115bb953866eaad_d20160704_m202849_c001_v0001029_t0018',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1108b907e93c43d1_d20160704_m202852_c001_v0001030_t0007',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1055a0b231fcffa4_d20160704_m202853_c001_v0001029_t0004',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f109b073ca91b843c_d20160704_m202855_c001_v0001030_t0035',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f10797dbc64d92ac1_d20160704_m202856_c001_v0001031_t0034',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f105da5286416ebea_d20160704_m202857_c001_v0001013_t0015',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1030aee800c025b4_d20160704_m202900_c001_v0001029_t0006',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118673cd4f02cb08_d20160704_m202901_c001_v0001029_t0034',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1055a0b231fcffc5_d20160704_m202914_c001_v0001029_t0008',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f100f49c35233bb00_d20160704_m202917_c001_v0001029_t0024',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118fc238428a9824_d20160704_m202920_c001_v0001018_t0035',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1159389410dfff9c_d20160704_m202927_c001_v0001030_t0020',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f114ee236b5951910_d20160704_m202928_c001_v0001029_t0030',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f117bc3c0d272eff7_d20160704_m202932_c001_v0001029_t0029',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f10387fb146b4c4c3_d20160704_m202936_c001_v0001009_t0019',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f114ee236b5951918_d20160704_m202937_c001_v0001029_t0020',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f109ffc049529a2fc_d20160704_m202940_c001_v0001031_t0037',
    ]
  },
  {
    title: 'Broken Blossoms',
    description: 'The martyred girl nevertheless retains a petrified face, which, even in death still seems to reflect and ask why, whilst the Chinese lover, for his part, preserves on his face the stupor of opium and the reflection of Buddha. ',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f115c8f676cd80fbc_d20160704_m203018_c001_v0001029_t0015',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f119c74f63ad9b045_d20160704_m203021_c001_v0001022_t0044',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f10295809a65b05f2_d20160704_m203025_c001_v0001029_t0031'
    ]
  },
  {
    title: 'Enoch Arden',
    description: 'A young woman thinks about her husband; young woman is thinking about her husband because we see the image of the husband immediately afterwards.',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d475410_d20160704_m203118_c001_v0001029_t0034',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f115c8f676cd80feb_d20160704_m203120_c001_v0001029_t0007',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118673cd4f02cb2d_d20160704_m203122_c001_v0001029_t0013',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1108b907e93c4415_d20160704_m203135_c001_v0001030_t0030',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f119685cb2dc5d7ed_d20160704_m203136_c001_v0001031_t0004',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f119c74f63ad9b047_d20160704_m203138_c001_v0001022_t0043'
    ]
  },
  {
    title: 'Foolish Wives',
    description: 'The seducer hero moves from the maidservant to the society lady, to finish up with the sickly invalid, driven by the elemental force of a predatory impulse, which leads him to explore all milieux and to tear away what each one offers.',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f108f0f36ddbcbeaf_d20160705_m074045_c001_v0001029_t0008',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1114073772aedd8a_d20160705_m074052_c001_v0001013_t0041',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1141fcd145408dca_d20160705_m074054_c001_v0001031_t0005',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1004d8cc9b0c9996_d20160705_m074057_c001_v0001026_t0038',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11338648e291d46c_d20160705_m074058_c001_v0001031_t0024',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f103af9493fa08c3b_d20160705_m074048_c001_v0001004_t0034',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f114388b6b97d05f5_d20160705_m074059_c001_v0001030_t0035',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1195fe7f2de9e41b_d20160705_m074100_c001_v0001029_t0019',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f105e7d664630c485_d20160705_m074102_c001_v0001009_t0040',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f105e066c5eeeb192_d20160705_m074104_c001_v0001015_t0005'
    ]
  },
  {
    title: 'Ivan the Terrible',
    description: 'The Tsarina Anastasia, when she has a foreboding of death.',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f109d78cebdadc14b_d20160704_m203218_c001_v0001029_t0007',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1115bb953866eb7d_d20160704_m203220_c001_v0001029_t0029',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1027df9f79129769_d20160704_m203221_c001_v0001000_t0018',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f10506fa1faa53dd0_d20160704_m203223_c001_v0001026_t0019',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f108f0f36ddbc704e_d20160704_m203225_c001_v0001029_t0003'
    ]
  },
  {
    title: 'Orphans of the Storm',
    description: 'The reflecting faces of young women in Griffith can express white, but it is also the white of a snowflake caught on an eye- lash, the spiritual white of an internal innocence, the dissolved white of a moral degradation, the hostile and searing white of the iceberg where the heroine will wander.',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f109d78cebdadc274_d20160704_m203534_c001_v0001029_t0032',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f114011d148fbca65_d20160704_m203540_c001_v0001023_t0001',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1055a0b231fd0196_d20160704_m203541_c001_v0001029_t0021',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1195fe7f2de99a17_d20160704_m203354_c001_v0001029_t0022',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f109d78cebdadc1de_d20160704_m203355_c001_v0001029_t0037',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f112dee9b049e0bb9_d20160704_m203543_c001_v0001029_t0028',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f100f49c35233bc56_d20160704_m203400_c001_v0001029_t0011',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1003682ec2cb75f8_d20160704_m203544_c001_v0001022_t0020',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11141aa0dd53f02b_d20160704_m203401_c001_v0001031_t0016',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1030aee800c026f1_d20160704_m203402_c001_v0001029_t0009',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f101ee9a9762a3180_d20160704_m203404_c001_v0001029_t0043',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f108f174a243827e2_d20160704_m203406_c001_v0001030_t0034',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f10661bd2af4ffad8_d20160704_m203408_c001_v0001026_t0041',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d47549b_d20160704_m203409_c001_v0001029_t0011',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f105ffe2e887f03cb_d20160704_m203411_c001_v0001031_t0032',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f101ee9a9762a318b_d20160704_m203412_c001_v0001029_t0040',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11074c13e0b59653_d20160704_m203413_c001_v0001029_t0002',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f105e066c5eeeb0c1_d20160704_m203414_c001_v0001015_t0033',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f100f49c35233bc67_d20160704_m203416_c001_v0001029_t0000',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f115f2dc724df54f1_d20160704_m203418_c001_v0001009_t0032',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11074c13e0b59659_d20160704_m203420_c001_v0001029_t0006',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d4754a9_d20160704_m203423_c001_v0001029_t0018',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118673cd4f02cb66_d20160704_m203424_c001_v0001029_t0037',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118673cd4f02cb69_d20160704_m203438_c001_v0001029_t0017',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11604f0a65bbd355_d20160704_m203454_c001_v0001026_t0006',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118673cd4f02cb72_d20160704_m203456_c001_v0001029_t0043',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f101ee9a9762a31ea_d20160704_m203511_c001_v0001029_t0037',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118eba71a5f452c6_d20160704_m203513_c001_v0001031_t0029'
    ]
  },
  {
    title: "Pandora's Box",
    description: 'The close-up of the knife prepares us for the terrible thought of Jack the Ripper.',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1172d424b46719c2_d20160704_m203658_c001_v0001001_t0016',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f10295809a65b0665_d20160704_m203702_c001_v0001029_t0024',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11503294bf6aee15_d20160704_m203715_c001_v0001031_t0006',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1016503cea8e2f95_d20160704_m203716_c001_v0001031_t0020',
    ]
  },
  {
    title: 'Queen Kelly',
    description: 'the ingenuous girl is caught between two sources of light, that of the candles on the table before her which glisten on her face, and that of the fire in the fireplace behind her which surrounds her with a luminous halo (she will therefore be too hot and allow her coat to be removed).',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f103519f37947d3df_d20160704_m203747_c001_v0001011_t0015',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f114ee236b5951b81_d20160704_m203751_c001_v0001029_t0029',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f114ee236b5951b83_d20160704_m203752_c001_v0001029_t0035',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f102f4b86400a6a2d_d20160704_m203757_c001_v0001026_t0022',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f119f7b6b8931533b_d20160704_m203758_c001_v0001025_t0019'
    ]
  },
  {
    title: 'The Birth of a Nation',
    description: 'Sometimes even on several faces, when the close-ups of the combatants punctuate the whole of the battle.',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f105082fc609098e1_d20160704_m203852_c001_v0001008_t0012',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1055a0b231fd0207_d20160704_m203910_c001_v0001029_t0023',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106463556cf6510e_d20160704_m203911_c001_v0001013_t0017',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1030aee800c027ff_d20160704_m203913_c001_v0001029_t0024',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f105ffe2e887f054b_d20160704_m203914_c001_v0001031_t0022',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11074c13e0b59705_d20160704_m203916_c001_v0001029_t0011'
    ]
  },
  {
    title: 'The General Line ',
    description: "the handsome face of the priest is dissolved, giving way to a cheating look which links up with the narrow back of the head and the fleshy earlobe: it is as if the traits of faceity were escaping the outline, and testifying to the priest's ressentiment.",
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d475604_d20160704_m204303_c001_v0001029_t0016',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f101ee9a9762a360c_d20160704_m204308_c001_v0001029_t0043',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f109d78cebdadc4ea_d20160704_m204310_c001_v0001029_t0024',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f113833169cc8a41b_d20160704_m204312_c001_v0001005_t0039',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f114ee236b5951cd6_d20160704_m204313_c001_v0001029_t0025',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1100e672dc0ef542_d20160704_m204315_c001_v0001031_t0024',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f115c8f676cd812df_d20160704_m204316_c001_v0001029_t0020',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f117f4c13eef19c5c_d20160704_m204318_c001_v0001031_t0029'
    ]

  },
  {
    title: 'The Murderer Lives at Number 21',
    description: 'The whirling groups of three objects make us understand that the heroine is thinking of the figure 3 as key to the mystery.',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f111aef3a2328a584_d20160704_m204542_c001_v0001009_t0030',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118fa298e31eb1f8_d20160704_m204529_c001_v0001030_t0035',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f116e714771d3c769_d20160704_m204544_c001_v0001029_t0016',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1092f3aa673f3be5_d20160704_m204531_c001_v0001013_t0037',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d47567b_d20160704_m204546_c001_v0001029_t0021',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f107afa90184f2fd8_d20160704_m204548_c001_v0001029_t0027',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f108f0f36ddbc7217_d20160704_m204532_c001_v0001029_t0007',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1195fe7f2de99ad7_d20160704_m204534_c001_v0001029_t0029',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1017ee7ed3ad81b7_d20160704_m204536_c001_v0001001_t0039'
    ]
  },
  {
    title: 'The Scarlet Empress',
    description: 'A girl looks in all directions and is surprised by everything when the Russian envoys take her away',
    video: 'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f11490650ad44f2f5_d20160705_m073420_c001_v0001026_t0031',
    img: [
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f118eba71a5f4c923_d20160705_m073422_c001_v0001031_t0011',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f100f7763cd660fe6_d20160705_m073424_c001_v0001031_t0012',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f100f49c352341a21_d20160705_m073425_c001_v0001029_t0019',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106cf0b0fbe7cccb_d20160705_m073427_c001_v0001006_t0015',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d47b399_d20160705_m073428_c001_v0001029_t0033',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1195fe7f2de9e363_d20160705_m073430_c001_v0001029_t0027',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f102e86138b48f863_d20160705_m073432_c001_v0001021_t0016',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f108f0f36ddbcbe67_d20160705_m073500_c001_v0001029_t0016',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f1055a0b231fd74ec_d20160705_m073501_c001_v0001029_t0035',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f117d26c4169397cd_d20160705_m073503_c001_v0001030_t0033',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f106a62105d47b3b6_d20160705_m073504_c001_v0001029_t0042',
      'https://f001.backblaze.com/b2api/v1/b2_download_file_by_id?fileId=4_z080d349613288577575e0416_f107cc3eeccd2afc8_d20160705_m073506_c001_v0001026_t0024'
    ]
  }
];

export class EntitiesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.entitiesList}>
        {entitiesListData.map((entity, key)=> {
          return (
            <div key={entity.title} className={styles.entityCard} onClick={(event) => this.props.changeHighlightEntity(entity)}>
              <h1>{entity.title}</h1>
              <p>{entity.description}</p>
            </div>
          )
        })}
      </div>
    );
  }
  componentWillMount() {
    this.props.changeHighlightEntity(entitiesListData[Math.floor(Math.random() * entitiesListData.length)])
  }
}

const mapStateToProps = selectEntitiesList();

//function mapDispatchToProps(dispatch) {
//  return {
//    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//    changeRoute: (url) => dispatch(push(url)),
//    dispatch,
//  };
//}

function mapDispatchToProps(dispatch) {
  return {
    changeHighlightEntity: (entity) => dispatch(changeHighlightEntity(entity)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesList);
