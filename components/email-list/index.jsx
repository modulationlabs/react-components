import React from 'react';
import PropTypes from 'prop-types';
import './email-list.scss';

class EmailList extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
    };
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    console.log('submit');
  }

  render() {
    return (
      <div className="email-list">
        <p>Subscribe!</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleChange} />
          <button type="button" role="submit">Submit</button>
        </form>
      </div>
    );
  }
}

EmailList.propTypes = {
  postUrl: PropTypes.string.isRequired,
};

export default EmailList;
