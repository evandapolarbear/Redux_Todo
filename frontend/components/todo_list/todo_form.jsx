import React from 'react';

class TodoForm extends React.Component {
  contructor(props){
    super(props);
    this.state = {title: "", body: "", done: false};

    this.updateField = this.updateField.bind(this);
    this.formSend = this.formSend.bind(this);
  }

  formSend(e) {
    e.preventDefault();
    this.props.createTodo(this.state);
  }

  // updateTitle(e) {
  //   this.setState({ title: e.currentTarget.value });
  // }
  //
  // updateBody(e) {
  //   this.setState({body: e.currentTarget.value });
  // }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div>
        <label>
          Title:
          <input type="text" onChange={this.updateField("title")}></input>
        </label>
        <label>
          Body:
          <input type="text" onChange={this.updateField("body")}></input>
        </label>
        <button onClick={this.formSend}></button>
      </div>
    );
  }
}

export default TodoForm;
