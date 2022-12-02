import {
  GET_STORY,
  GET_ALL_STORIES,
  ADD_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  ERROR_STORY,
  ADMIN_GET_ALL_STORY,
} from "../types";
var switchCases = (state, action) => {
  switch (action.type) {
    case GET_ALL_STORIES:
      return {
        ...state,
        stories: action.payload,
        error: false,
      };
    case GET_STORY:
      return {
        ...state,
        story: action.payload,
        error: false,
      };
    case ADMIN_GET_ALL_STORY:
      return {
        ...state,
        adminStories: action.payload,
        error: false,
      };
    case ADD_STORY:
      return {
        ...state,
        stories: [...state.stories, action.payload],
        error: false,
      };
    case UPDATE_STORY:
      return {
        ...state,
        stories: [...state.stories, action.payload],
        error: false,
      };
    case DELETE_STORY:
      return {
        ...state,
        stories: state.stories.filter((story) => {
          return story.id !== action.id;
        }),
        error: false,
      };
    case ERROR_STORY:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default switchCases;
