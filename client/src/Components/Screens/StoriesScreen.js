import React, { useContext, useEffect, useState } from "react";
// import Sidebar from "../Layout/SideBar.js";
import NavbarUser from "../Layout/NavbarUser.js";
import Story from "./Stories/Story.js";
import { useNavigate } from "react-router-dom";
import StoryContext from "../../Context/story/storyContext.js";
import CreateStory from "./Stories/CreateStory.js";
import StoryCard from "./Stories/StoryCard.js";
import AuthContext from "../../Context/auth/authContext.js";
import axios from "axios";
import Banner from "../Layout/Banner.js";
const StoriesScreen = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;
  const navigate = useNavigate();
  const storyContext = useContext(StoryContext);
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  const { getStories, stories } = storyContext;
  console.log(stories);
  const [modalStyle, setModalStyle] = useState("none");
  useEffect(() => {
    loadUser();
    getStories();
  }, []);
  return (
    <>
      <Banner title="Engineer Stories" />
      <div className="create-task">{user && user.isPM && <CreateStory />}</div>
      <div className="user-dashboard-cards">
        {stories &&
          stories.map((story) => <StoryCard key={story._id} story={story} />)}
      </div>
    </>
  );
};
export default StoriesScreen;
