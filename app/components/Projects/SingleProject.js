import React from "react";
import { connect } from "react-redux";
import { fetchProject } from "../../redux/singleProject";
import Navbar from "../Navbar";
import AllAssignedRobotCards from "./AllAssignedRobotCards";
import { Link } from "react-router-dom";
import { fetchRobotsByProjectId } from "../../redux/robots";

class SingleProject extends React.Component {
  componentDidMount() {
    // this.props.fetchProject(this.props.match.params.id);
    this.props.fetchRobotsByProjectId(this.props.match.params.id);
  }

  projectCardDescription(project) {
    return <p className="centerFlex">{project.description}</p>;
  }

  projectCardText(project) {
    return (
      <div className="projectCard__text">
        <h1>{project.title}</h1>
        <p>{`Deadline: ${project.deadline}`}</p>
        <p>{`Completed: ${project.completed}`}</p>
        <p>{`Priority: ${project.priority}`}</p>
        <Link to={`/projects/edit/${project.id}`}>
          <button type="button">Edit</button>
        </Link>
      </div>
    );
  }

  projectCard(project) {
    return (
      <div className="projectCard--description">
        {this.projectCardDescription(project)}
        {this.projectCardText(project)}
      </div>
    );
  }

  render() {
    let { project } = this.props;
    project = project || {};
    return (
      <div>
        <Navbar />
        <div className="bigCard">{this.projectCard(project)}</div>
        <h2>Robots assigned to this project</h2>
        <AllAssignedRobotCards project={project} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    project: state.project,
    robots: state.robots
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchRobotsByProjectId: (id) => dispatch(fetchRobotsByProjectId(id))
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
