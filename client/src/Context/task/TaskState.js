import React, { useReducer } from "react";
import axios from "axios";
import TaskContext from "./taskContext";

import taskReducer from "./taskReducer";
import {
  GET_TASKS,
  // CLEAR_TASKS,
  ADD_TASK,
  DELETE_TASK,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  UPDATE_TASK,
  // FILTER_TASKS,
  // CLEAR_FILTER,
  TASK_ERROR,
} from "../types";

const TaskState = (props) => {
  const initialState = {
    tasks: null,
    current: null,
    filtered: null,
    errors: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Get Tasks
  const getTasks = async () => {
    try {
      const res = await axios.get("/api/task");
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: TASK_ERROR,
        payload: error.response.msg,
      });
    }
  };
  // Add Task
  const addTask = async (taskname, taskdescription, duedate, status) => {
    // console.log(config);
    try {
      const res = await axios.post("/api/task", {
        taskname,
        taskdescription,
        duedate,
        status,
      });
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: TASK_ERROR,
        payload: error.response.msg,
      });
    }
  };
  // Delete Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/task/${id}`);
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: TASK_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // //Clear Tasks
  // const clearTasks = () => {
  //   dispatch({
  //     type: CLEAR_TASKS,
  //   });
  // };

  // // set current Task
  // const setCurrent = (Task) => {
  //   dispatch({
  //     type: SET_CURRENT,
  //     payload: Task,
  //   });
  // };

  // //clear current Task
  // const clearCurrent = () => {
  //   dispatch({
  //     type: CLEAR_CURRENT,
  //   });
  // };

  //update Task
  const updateTask = async (progress, _id) => {
    const config = {
      header: {
        "Content-Type": "application-json",
      },
    };
    try {
      const res = await axios.put(
        `/api/task/${_id}`,
        { status: progress },
        config
      );
      dispatch({
        type: UPDATE_TASK,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: TASK_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // //filter Tasks
  // const filterTask = (text) => {
  //   dispatch({
  //     type: FILTER_TASKS,
  //     payload: text,
  //   });
  // };
  // //clear filter
  // const clearFilter = () => {
  //   dispatch({
  //     type: CLEAR_FILTER,
  //   });
  // };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addTask,
        deleteTask,
        // setCurrent,
        // clearCurrent,
        updateTask,
        // filterTask,
        // clearFilter,
        // clearTasks,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
