import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actionCreators from "../../redux/actions";
import store from "../../redux/store";
class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataForm: {
				Name: "123",
				Tag: "1",
				Text: "2",
			},
		};
	}
	// 處理文字框中輸入文字用的方法
	handleTextChange = event => {
		// flowtype檢查用的
		if (event.target instanceof HTMLInputElement) {
			this.setState({
				dataForm: {
                    //https://github.com/reactstrap/reactstrap/issues/522
                    //state.dataForm已被綁定, 必須先MAP過去 不能讓該值有空的時候
					...this.state.dataForm,
					[event.target.name]: event.target.value,
				},
            });
            
        }
        
	};

	// 處理 Send 的方法
	handleSubmit = event => {
		event.preventDefault();
		// store中的狀態值發送要新增的action，onItemAdd方法會被綁到props裡面
		console.log(store.getState().Message);

		// if (!this.state.inputValue) return;

		this.props.actionDataAdd({
			id: Date.now(),
			Name: this.state.dataForm.Name,
			Tag: this.state.dataForm.Tag,
			Text: this.state.dataForm.Text,
		});
	};
	render() {
		return (
			<form className="MessageForm" onSubmit={this.handleSubmit}>
				<h3>MessageForm</h3>
				<input
					type="text"
					name="Name"
					placeholder="Name"
					value={this.state.dataForm.Name}
					onChange={this.handleTextChange}
				/>
				<input
					type="text"
					name="Tag"
					placeholder="Tag"
					value={this.state.dataForm.Tag}
					onChange={this.handleTextChange}
				/>
				<input
					type="textarea"
					name="Text"
					placeholder="Say something"
					value={this.state.dataForm.Text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="Send" />
			</form>
		);
	}
}
// 將store中的items值傳綁到props上
// const mapStateToProps = store => ({
// 	Messages: store.Message,
// });
// export default connect(mapStateToProps ,actionCreators)(MessageForm);

export default MessageForm;
