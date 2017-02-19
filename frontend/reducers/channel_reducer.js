import { RECEIVE_CHANNEL,
         RECEIVE_MESSAGE } from '../actions/channel_actions';

import merge from 'lodash/merge';

const initialState = {};

const ChannelReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, {
        id: action.channel.id,
        name: action.channel.name,
        description: action.channel.description,
        userCount: 5,
        messages: action.channel.messages
      });

    case RECEIVE_MESSAGE:
      let newState = merge({}, state);
      newState.messages.unshift(action.message.messages);
      return newState;

    default:
      return state;
  }
};

export default ChannelReducer;