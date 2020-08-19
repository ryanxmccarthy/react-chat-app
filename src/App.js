import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ChatActions from "./store/actions/chatActions";
import * as AuthActions from "./store/actions/authActions";
import Auth from "./components/pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/swag.css";

class App extends React.Component {
  componentDidMount() {
    this.props.setupSocket();
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={(e) => {
            this.props.logout();
          }}
        >
          Log Out
        </button>
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              render={(props) => {
                if (this.props.token) {
                  return <Redirect to="/" />;
                } else {
                  return <Auth />;
                }
              }}
            />

            <Route
              path="/signup"
              render={(props) => {
                if (this.props.token) {
                  return <Redirect to="/" />;
                } else {
                  return <Auth />;
                }
              }}
            ></Route>

            <Route
              path="/"
              render={(props) => {
                if (!this.props.token) {
                  return <Redirect to="/login" />;
                } else {
                  return <h1>Root</h1>;
                }
              }}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => ({
  setupSocket: () => {
    dispatch(ChatActions.setupSocket());
  },
  logout: () => {
    dispatch(AuthActions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
