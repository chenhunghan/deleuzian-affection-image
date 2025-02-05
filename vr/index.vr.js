import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  NativeModules,
  View,
} from 'react-vr';

const coordi = [
  [
    0.7591841106355255,
    0.8034685752341464,
    0.517624368892855
  ],
  [
    0.3757582721657561,
    0,
    0.44114100624471536
  ],
  [
    0.4002548453614565,
    0.3074166289719563,
    0.37627785374309614
  ],
  [
    0.3362510191137279,
    0.7873949433130703,
    0.5041408746889258
  ],
  [
    0.42303354816709854,
    0.43598118001087877,
    0.7156825165477136
  ],
  [
    0.6075429127846163,
    0.6744309076619804,
    0.7235684452606275
  ],
  [
    0.030203491598687515,
    0.434245117272955,
    0.5062843549778889
  ],
  [
    0.233186053850093,
    0.25849826168242174,
    0.48486983446656995
  ],
  [
    0.7451291458959028,
    0.4280999093269053,
    0.5898815474922852
  ],
  [
    0.8930243435451444,
    0.5254315231049497,
    0.5373528797740725
  ],
  [
    0.19253818451010973,
    0.5823630324071607,
    0.7811400319806403
  ],
  [
    0.44527470910354344,
    0.6195766807191513,
    0.44007847305253367
  ],
  [
    0.23019002439709912,
    0.5903860912410316,
    0.1763816617831382
  ],
  [
    0.5906980965644726,
    0.6626640748602327,
    0.34170628943907677
  ],
  [
    0.8222214373997908,
    0.31862401618138864,
    0.7789593827192587
  ],
  [
    0.21436649637403482,
    0.5835446848274326,
    0.3204748303382779
  ],
  [
    0.42215289398572897,
    0.49841267421315416,
    0.2374485178012693
  ],
  [
    0.22053401987140614,
    0.7269673047339411,
    0.7676778685414909
  ],
  [
    0.2857773759087965,
    0.7070437576433288,
    0.3562607490938063
  ],
  [
    0.8495465745175914,
    0.6692768152904398,
    0.25098727273760074
  ],
  [
    0.4778143688105212,
    0.29460076902672916,
    0.7076416417914836
  ],
  [
    0.4790050634211786,
    0.6013657460555801,
    0.0053256236584259264
  ],
  [
    0.2862842512533772,
    0.5301481989931375,
    0.9319492453608332
  ],
  [
    0.8546507915657866,
    0.2693466755937518,
    0.4431075532012996
  ],
  [
    0.7076492148751211,
    0.5748474492403709,
    0.2990551906904113
  ],
  [
    0.640797715982282,
    0.2632054456218752,
    0.23032066089358127
  ],
  [
    0.8373675280803539,
    0.47887663958977994,
    0.7530568912549638
  ],
  [
    0.1131143594925938,
    0.3705099262452592,
    0.2546232457793387
  ],
  [
    0.6686509746811399,
    0.3782870685168717,
    0
  ],
  [
    1,
    0.5120573291877214,
    0.9988353374530592
  ],
  [
    0.5303315296131696,
    0.5370222103783181,
    0.7135805744535582
  ],
  [
    0.3444217790275689,
    0.6779967493153518,
    0.9098170057618071
  ]
]
// Native Module defined in vr/client.js
// const PointModule = NativeModules.PointModule;

class VRViz extends React.Component {
  constructor(props) {
    super(props);
    // PointModule.changePointColor('yellow');
    for (let [index, value] of coordi.entries()) {
      // console.log(`PointModule${index}`)
      // NativeModules[`PointModule${index}`].changePointColor('rgba(255,255,255)', 1)
      NativeModules[`PointModule${index}`].changePointCoordinations(value)
      NativeModules[`PointModule${index}`].setLineEndPoints(value, coordi)
    }
  }
  render() {
    return (
      <View>
        {/* <Pano source={asset('chess-world.jpg')}/> */}
        {/* <Text
          style={{
            backgroundColor:'blue',
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
          }}>
          coo
        </Text> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('VRViz', () => VRViz);
