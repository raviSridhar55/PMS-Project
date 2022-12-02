import React, { useReducer } from "react";
import storyContext from "./storyContext";
import storyReducer from "./storyReducer";
import {
  GET_STORY,
  ADD_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  GET_ALL_STORIES,
  ERROR_STORY,
  ADMIN_GET_ALL_STORY,
} from "../types";
import axios from "axios";
const StoryState = (props) => {
  const initialState = {
    stories: null,
    adminStories: null,
    story: null,
    current: null,
    filtered: null,
    error: false,
  };
  const [state, dispatch] = useReducer(storyReducer, initialState);
  //Get All Stories
  const getStories = async () => {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.token}`,
    //   },
    // };
    await axios
      .get("/api/story")
      .then((res) => dispatch({ type: GET_ALL_STORIES, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };
  //Get Story
  const getStory = async (id) => {
    await axios
      .get(`/api/story/${id}`)
      .then((res) => {
        dispatch({ type: GET_STORY, payload: res.data });
        console.log(res.data);
      })
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
    console.log(id);
  };
  //AdminGetallstory
  const adminGetAllstory = async () => {
    await axios
      .get("/api/story/adminGetAllStory")
      .then((res) => dispatch({ type: ADMIN_GET_ALL_STORY, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };
  // Add Story
  const addStory = async (story) => {
    // const config = {
    //   header: {
    //     // "Content-Type": "application-json",
    //     Authorization: `Bearer ${localStorage.token}`,
    //   },
    // };
    // console.log("Bishal", config);
    await axios
      .post("/api/story", story)
      .then((res) => dispatch({ type: ADD_STORY, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };
  //Update Story
  const updateStory = async (story) => {
    const config = {
      header: {
        "Content-Type": "application-json",
      },
    };
    await axios
      .put(`/api/story/${story.id}`, story, config)
      .then((res) => dispatch({ type: UPDATE_STORY, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };
  //Delete Story
  const deleteStory = async (id) => {
    await axios
      .delete(`/api/story/${id}`)
      .then((res) => dispatch({ type: DELETE_STORY, payload: id }))
      .catch((err) => dispatch({ type: ERROR_STORY, payload: err.msg }));
  };
  return (
    <storyContext.Provider
      value={{
        stories: state.stories,
        adminStories: state.adminStories,
        story: state.story,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getStories,
        getStory,
        adminGetAllstory,
        addStory,
        updateStory,
        deleteStory,
      }}
    >
      {props.children}
    </storyContext.Provider>
  );
};
export default StoryState;
