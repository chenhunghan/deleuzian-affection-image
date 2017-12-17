/*
 *
 * Cluster
 *
 */

import React from 'react';
import TSNE from 'tsne-js';
import { connect } from 'react-redux';
import selectCluster from './selectors';
import styles from './styles.css';
import { TransitionMotion, spring } from 'react-motion'
import Dimensions from 'react-dimensions'
import Dot from 'react-icons/lib/go/primitive-dot';
import _ from 'underscore'

function onlyUnique(value, index, self) {
  let imgURLs = self.map((i)=> i.imgURL)
  return imgURLs.indexOf(value.imgURL) === index;
}

const defaultOption = {
  dim: 3,
  perplexity: 5,
  earlyExaggeration: 1.0,
  learningRate: 100,
  nIter: 400,
  metric: 'euclidean'
}

export class Cluster extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getCoordination(cluster) {
    let emotions = cluster.map((i)=> {
      let s = i.scores
      return [
        s.anger,
        s.contempt,
        s.disgust,
        s.fear,
        s.happiness,
        s.neutral,
        s.sadness,
        s.surprise
      ]
    })
    console.log(cluster.length)
    console.log(emotions.length)
    let model = new TSNE(defaultOption)
    model.init({
      data: emotions,
      type: 'dense'
    })
    model.run()
    let entitiesCoordination = model.getOutputScaled().map((coordinationArray)=> {
      return coordinationArray.map((coordination) => {
        return (coordination + 1)/2
      })
    })
    return entitiesCoordination
  }
  render() {
    let cluster = this.props.respondedResult
    let entitiesCoordination = this.getCoordination(cluster)
    console.log(entitiesCoordination)
    return (
      <div className={styles.cluster}>
        {this.clusterRender(cluster, entitiesCoordination)}
      </div>
    );
  }
  clusterStartStyle(entities) {
    return entities.map((entity,index) => {
      return {
        key: `${index}`,
        style: {
          height: 0,
          opacity: 0,
          top: this.props.containerHeight/2,
          left: this.props.containerWidth/2
        }
      }
    })
  }
  clusterStyle(entities, entitiesCoordination) {
    return entities.map((entity,index) => {
      let tagX = entitiesCoordination[index][0]*(this.props.containerWidth)
      let tagY = entitiesCoordination[index][1]*(this.props.containerHeight)
      return {
        key: `${index}`,
        style: {
          opacity: spring(1),
          top: spring(tagY, {stiffness: 100, damping: 12}),
          left: spring(tagX, {stiffness: 100, damping: 12}),
        }
      }
    })
  }
  clusterEndStyle() {
    return {
      height: 0,
      opacity: spring(0),
      top: this.props.containerHeight/2,
      left: this.props.containerWidth/2
    }
  }
  entityWithTransitionRender(entity, index, clusterStartStyle, clusterStyle) {
    return (
        <TransitionMotion
            defaultStyles={clusterStartStyle}
            styles={clusterStyle}
            willLeave={this.clusterEndStyle}
            key={index}
        >
            { (interpolatingStyles) => {
                let style = interpolatingStyles[index].style
                return (
                    <div
                        style={style}
                        className={styles.unit}
                    >

                      <div
                        className={styles.unitContent}
                        onClick={(event) => {console.log('click')}}
                        >
                        <Dot className={styles.unitDot} size={12} color='rgba(255,255,255,0.85)' style={{'position': 'absolute', 'top': -5, 'left': -5}}/>
                        <img className={styles.unitIMG} src={entity.imgURL} />
                        <span className={styles.unitTitle}>{entity.entity.title}</span>
                        <p className={styles.unitDescription}>{entity.entity.description}</p>
                        <ul className={styles.unitEmotionList}>
                          <li><span className={styles.anger}>anger</span> {entity.scores.anger.toFixed(3)}</li>
                          <li><span className={styles.contempt}>contempt</span> {entity.scores.contempt.toFixed(3)}</li>
                          <li><span className={styles.disgust}>disgust</span> {entity.scores.disgust.toFixed(3)}</li>
                          <li><span className={styles.fear}>fear</span> {entity.scores.fear.toFixed(3)}</li>
                          <li><span className={styles.happiness}>happiness</span> {entity.scores.happiness.toFixed(3)}</li>
                          <li><span className={styles.neutral}>neutral</span> {entity.scores.neutral.toFixed(3)}</li>
                          <li><span className={styles.sadness}>sadness</span> {entity.scores.sadness.toFixed(3)}</li>
                          <li><span className={styles.surprise}>surprise</span> {entity.scores.surprise.toFixed(3)}</li>
                        </ul>
                      </div>
                    </div>
                )
            }
            }
        </TransitionMotion>
    )
  }
  clusterRender(entities, entitiesCoordination) {
    let clusterStartStyle = this.clusterStartStyle(entities, entitiesCoordination)
    let clusterStyle = this.clusterStyle(entities, entitiesCoordination)
    return (
      entities.map((entity ,index)=> {
        return this.entityWithTransitionRender(entity, index, clusterStartStyle, clusterStyle)
      })
    )
  }
  componentWillUpdate(nextProps) {
  }
}

// const mapStateToProps = selectCluster();
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const reactDimensionsOptions = {
  getHeight: (element) => {
    return window.innerHeight*0.73
  },
  getWidth: (element) => {
    return element.clientWidth*0.87
  }
}
export default connect(null, null)(Dimensions(reactDimensionsOptions)(Cluster));
