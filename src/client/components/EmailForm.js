import React from "react";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder="Email Address"
            className="input-group-field"
          />
          <div className="input-group-button">
            <input type="submit" value="Submit" className="button" />
          </div>
        </div>
      </form>
    );
  }
}

export default EmailForm;
