import {
  GET_USERS,
  POST_USER,
  GET_USER_ID,
  GET_USER_NAME,
  POST_STREAM,
  GET_STREAM_ID,
  GET_STREAM_NAME,
  POST_CATEGORIES,
  ALLVIDEOS,
  POPVIDEO,
  FILTER_STREAMS,
  CLEAR_FILTER,
  GET_ALL_STREAMS,
  LOGIN_USER,
  LOGOUT_USER,
  GET_FAVORITES_ID,
  GET_STREAMS,
  GET_CATEGORIES,
  FILTER_CATEGORIES,
  GET_USER_SUBSCRIPTIONS,
  PUT_USER,
  UPDATE_USER,
  BANNED_USER,

  CLEAR_STREAM_NAME,

  UPDATE_PROFILE_PICTURE

} from "./actions/actions";

const initialState = {
  user: "",
  login: true,
  users: [],
  usersDetail: [],
  streams: [],
  allStreams: [],
  streamName: [],
  streamDetail: [],
  categories: [],
  getVideoFromDatabase: [],
  popVideo: [],
  favorites: [],
  subscriptions: []
};

export default function rootReducer (state = initialState, action){
  switch (action.type) {
    case GET_ALL_STREAMS:
      return {
        ...state,
        allStreams: action.payload,
      };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: "" };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case POST_USER:
      return {
        ...state,
      };
    case PUT_USER:
      return {
        ...state,
      };
    case GET_USER_ID:
      return {
        ...state,
        usersDetail: action.payload,
      };
    case GET_USER_NAME:
      return {
        ...state,
        users: action.payload,
      };
    case GET_FAVORITES_ID:
      return { ...state, favorites: action.payload };
    case GET_STREAMS:
      return {
        ...state,
        streams: action.payload,
        allStreams: action.payload,
      };

    case POST_STREAM:
      return {
        ...state,
      };
    case GET_STREAM_ID:
      debugger
      return {
        ...state,
        streamDetail: action.payload
      };
    case GET_STREAM_NAME:
      return {
        ...state,
        streamName: action.payload
      };
      case GET_USER_SUBSCRIPTIONS:
        return {
          ...state,
          subscriptions: action.payload
        };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case POST_CATEGORIES:
      return {
        ...state,
      };
      case UPDATE_PROFILE_PICTURE:
        return { ...state, user: action.payload };
        
    case FILTER_CATEGORIES:
      let allCategories = state.categories;
      let filterCategories;
      if (action.payload) {
        filterCategories = allCategories.filter((e) =>
          e.name?.includes(action.payload)
        );
      }
      return {
        ...state,
      };

    case ALLVIDEOS:
      return {
        ...state,
        getVideoFromDatabase: action.payload,
      };
    case POPVIDEO:
      return {
        ...state,
        popVideo: action.payload,
      };
    case FILTER_STREAMS:
      return { ...state, streams: action.payload };
    case CLEAR_FILTER:
      return { ...state, streams: state.allStreams };
    case UPDATE_USER: {
      return { ...state, users: action.payload };
    };
    case BANNED_USER: {
      return { ...state, users: action.payload };
    }
    case CLEAR_STREAM_NAME: {
      return { ...state, streamName: action.payload };
    }
    default:
      return { ...state };
  }
};
