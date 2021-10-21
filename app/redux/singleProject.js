import Axios from "axios";

//Action Types
const SET_PROJECT = "SET_PROJECT";

//Action Creators
export const setProject = (project) => {
  return {
    type: SET_PROJECT,
    project,
  };
};

//Thunks
export const fetchProject = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(`/api/projects/${id}`);
      dispatch(setProject(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createProject = (project, history) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.post(`/api/projects`, project);
      dispatch(setProject(data));
      history.push("/projects");
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.delete(`/api/projects/${id}`);
      dispatch(setProject(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProject = (id, history) => {
  return async (dispatch) => {
    try {
      const [rowsUpdated, updatedProjects] = await Axios.put(
        `/api/projects/${id}`
      );
      if (updatedProjects.length !== 0) {
        const project = updatedProjects[0];
        dispatch(setProject(project));
        history.push("/projects");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectReducer(state = {}, action) {
  switch (action.type) {
    case SET_PROJECT:
      return { ...action.project };
    default:
      return state;
  }
}
