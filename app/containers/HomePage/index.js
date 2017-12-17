/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Logo from 'components/Logo'
import Footer from '../../components/Footer'
import BackgroundVideo from '../../components/BackgroundVideo'
import Shade from '../../components/Shade'
import EntitiesList from '../EntitiesList'
import Abstract from '../../components/Abstract'
import Video from '../Video'
import ImageSequence from '../ImageSequence'
import ClusterWrapper from '../../components/ClusterWrapper'
import Cluster from '../Cluster'
import Error from '../Error'
import Loading from 'containers/Loading'
import respondedResult from '../../media/respondedResult'

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        {/* <BackgroundVideo /> */}
        <Shade>
          {/* <EntitiesList /> */}
          {/* <Video />
          <ImageSequence /> */}
          <div style={{
              'width': '88.5%',
              'height': '97%',
              'backgroundColor': 'rgba(255,255,255,0.02)',
              'border': '1px rgba(255,255,255,0.08) solid',
              'position': 'absolute',
              'top': '10px',
              'left': '10.5%'
            }}>
            <Cluster respondedResult={respondedResult} />
          </div>
          {/* <Abstract /> */}
          <Logo />
          <Footer />
        </Shade>
        <Loading />
        <Error />
      </div>
    );
  }
}
