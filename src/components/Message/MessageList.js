import React, { Component } from "react";
import { Card } from "antd";

class MessageList extends Component {
	handleDelete = id => {
		this.props.actionDataDelete(id);
	};

	render() {
		const { Messages } = this.props;
		return (
			<div className="MessageList">
				<h3>MessageList</h3>

				{Messages.datas.map((item, index) => (
					<div key={item.id}>
						<Card
							key={item.id}
							title={item.id}
							style={{ width: 300 }}
						>
							<p>
								<span>Name：</span>
								{item.Name}
							</p>
							<p>
								<span>Tag：</span>
								{item.Tag}
							</p>
							<p>
								<span>Text：</span> {item.Text}
							</p>
							<button onClick={() => this.handleDelete(item.id)}>
								Delete
							</button>
						</Card>
					</div>
				))}
			</div>
		);
	}
}

export default MessageList;
