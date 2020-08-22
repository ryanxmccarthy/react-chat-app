import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Sidebar extends Component {
  state = {
    search: "",
  };

  search = () => {
    this.props.chat.socket.send(
      JSON.stringify({
        type: "SEARCH",
        data: this.state.search,
      })
    );
  };

  render() {
    return (
      <div className="sidebar">
        <div className="search-container">
          <input
            className="form-control"
            placeholder="Search..."
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
          />
          <button className="btn btn-primary" onClick={(e) => this.search()}>
            Search
          </button>
        </div>
        <ul className="thread-list">
          <label>Messages</label>
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>Name</h5>
              <p>This is the last message</p>
            </Link>
          </li>
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>Name</h5>
              <p>This is the last message</p>
            </Link>
          </li>
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>Name</h5>
              <p>This is the last message</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
