import { combineReducers } from 'redux'

import {
  GET_ORDERS,
  CHANGE_ACTIVE_PAGE,
  SET_ACTIVE_ORDER
} from './actions'

const INITIAL_PAGE = {id: 1, pageName: 'home'}
const INITIAL_ORDERS = []
const INITIAL_ACTIVE_ORDER={}

const activePage = (state = INITIAL_PAGE, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_PAGE: return action.payload
    default: return state
  }
}

const orders = (state = INITIAL_ORDERS, action) => {
  switch(action.type){
    case GET_ORDERS: return action.payload.data.data
    default: return state
  }
}

const activeOrder = (state = INITIAL_ACTIVE_ORDER, action) => {
  switch(action.type){
    case SET_ACTIVE_ORDER: return action.payload
    default: return state
  }
}

export default combineReducers({ activePage, orders, activeOrder })
