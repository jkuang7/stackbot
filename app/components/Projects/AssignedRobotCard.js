import React from "react";
import RobotCard from "../Robots/RobotCard";

class AssignedRobotCard extends React.Component {
  render() {
    let { robot } = this.props;
    robot = robot || {};
    return (
      <div className="smallerDiv">
        {robot !== {} ? <RobotCard robot={robot}/> : <p></p>}
      </div>
    );
  }
}

export default AssignedRobotCard;