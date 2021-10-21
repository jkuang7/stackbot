import React from "react";
import { connect } from "react-redux";
import { fetchRobot } from "../../redux/singleRobot";
import Navbar from "../Navbar";
import AllAssignedProjectCards from "./AllAssignedProjectCards";
import { Link } from "react-router-dom";

class SingleRobot extends React.Component {
  componentDidMount() {
    this.props.fetchRobot(this.props.match.params.id);
  }

  robotCardImage(robot) {
    return (
      <img className="robotCard__img" src={robot.imageUrl} alt="IMAGE"></img>
    );
  }

  robotCardText(robot) {
    return (
      <div className="robotCard__text">
        <h1>{robot.name}</h1>
        <p>{`Fuel Type: ${robot.fuelType}`}</p>
        <p>{`Fuel Level: ${robot.fuelLevel}`}</p>

        <Link to={`/robots/edit/${robot.id}`}>
          <button type="button">Edit</button>
        </Link>
      </div>
    );
  }

  robotCard(robot) {
    return (
      <div className="robotCard">
        {this.robotCardImage(robot)}
        {this.robotCardText(robot)}
      </div>
    );
  }

  render() {
    let { robot } = this.props;
    robot = robot || {};
    return (
      <div>
        <Navbar />
        <div className="bigCard">{this.robotCard(robot)}</div>
        <h2>Projects assigned to {robot.name}</h2>
        <AllAssignedProjectCards projects={robot.projects} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robot: state.robot,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRobot: (id) => dispatch(fetchRobot(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
