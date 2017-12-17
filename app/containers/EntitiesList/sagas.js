import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga'
import request from 'utils/request';
import { delay } from 'redux-saga'

import {
  GET_EMOTION_SUCCEEDED,
  GET_EMOTION_REQUESTED,
  GET_EMOTION_FAILED
} from './constants';

// Your sagas for this container
export default [
  entitiesListSage,
];

function* callEmotionAPI (action) {
  let imgURL = action.payload.url
  const APIKeys = [
    "67d5d558d039403e866e9785e8c797e9",
    "4694d2c7a501454c969b788eb2c1e76c",
    "54139682a5314e9f93568721518dc66e",
    "995e9d0952634a80ba202148b4f89eae",
    "51097b614a20407e8b491f50500f8ece",
    "97159b56715d474988929f92df0dc196"
  ]
  let randomAPIKey = APIKeys[Math.floor(Math.random()*APIKeys.length)]
  let url = 'https://api.projectoxford.ai/emotion/v1.0/recognize'
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Ocp-Apim-Subscription-Key": `${randomAPIKey}`
    },
    body: JSON.stringify({"url": `${imgURL}`})
  }
  const emotions = yield call(request, url, options);

  if (!emotions.err) {
    let emotionsWithAttributes = emotions.data.map((emotion)=> {
      emotion.imgURL = imgURL
      emotion.entity = action.payload.entity
      return emotion
    })
    yield put({type: GET_EMOTION_SUCCEEDED, payload: emotionsWithAttributes});
  } else {
    yield put({type: GET_EMOTION_FAILED, payload: emotions.err});
  }
}
// Individual exports for testing
export function* entitiesListSage() {
  yield* takeEvery(GET_EMOTION_REQUESTED, callEmotionAPI);
}
