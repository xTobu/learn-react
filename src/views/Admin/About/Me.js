import React, { Component } from "react";

class Me extends Component {
	render() {
		return (
			<div className="Me">
            {this.props.match.params.userid}
			</div>
		);
	}
}


export default Me;

Me.defaultProps = {
    display_sysId: true,
    display_name: true,
    display_priority: true,
    display_status: true,
    display_createDate: true,
    display_createUser: true,
  
    required_sysId: true,
    required_name: true,
    required_priority: true,
    required_status: true,
    required_createDate: false,
    required_createUser: false,
  }