import React, { Component } from "react";
import { connect } from "react-redux";
import { MessageForm, MessageList } from "components/Message";
import * as actionCreators from "../../redux/actions/actionMessage";
class Message extends Component {
	render() {
		return (
			<div className="Message">
				<h2>Message</h2>

				<MessageForm actionDataAdd={this.props.Message_DataAdd}/>
				<MessageList />
			</div>
		);
	}
}

// export default Message;
const mapStateToProps = store => ({
	Messages: store.Message,
});
export default connect(mapStateToProps, actionCreators)(Message);
