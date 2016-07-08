/**
*
* Abstract
*
*/

import React from 'react';

import styles from './styles.css';

class Abstract extends React.Component {
  render() {
    return (
      <div className={styles.abstract}>
        <p>
        In the last few decades, the concept of affect has played significant roles in Cinema and New Media studies. Deleuze, following Bergson, argued that affect is the entity that attains the close-up in Cinemas [2]. He developed the ideas that filmmakers transform the close-ups of faces, i.e., the becoming of the affective farcical expressions into the affection-images [8, 12, 3]. In order to construct the ontology of the affection-images, Deleuze investigated the initial presentations of the affection-images at the dawn of Cinemas. He examined the motion pictures in the beginning of the 20th century and purposed the ontological arguments for the affection-images.
        </p>
        <p>
        However, the Deleuzian ontology for affects, which is derived from the transcendental empiricism that underpins the concept of becoming and af- firms the positive nonbeing, complicates how difference is thought[10, 1, 7]. The ontology of becoming, i.e., the ontology aims to elaborate the processes of the becoming of affects[11], challenges the reader to comprehend the affect theory in his Cinemas books.This article investigates the Deleuzian ontology of affects by the help of artificial neural networks(ANNs). Firstly, inspired by the rhizomatic thoughts by Deleuze and Guattari, we selected several rhizomatic ANNs, which are widely utilized in unsupervised machine learn- ing(see [6, 4]). Secondly, we clipped images from the films hinted by Deleuze in his Cinema books and fed these images into the ANNs. The unsupervised learning algorithm will then generate a topological map, which represents the ontology of Deleuzian cinematic affects according to the images.
        </p>
        <p>
        The article aims to furnish alternative paths to approach Deleuzian Image of Thought[5, 9] and purposes a transdisciplinary way, combing computer sci- ence and philosophy, to understand the Deleuzian affect theory. This article presents the visualization of the map, The unsupervised learning algorithm supporting Deleuze’s ontology and the algorithmic mechanism design con- structing the visual representations.
        </p>
      </div>
    );
  }
}

export default Abstract;
