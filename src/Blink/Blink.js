import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  interval: PropTypes.number
};

const defaultProps = {
  interval: 500
};

export default class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true
    };
  }
  componentDidMount() {
    this.componentInterval = setInterval(
      () => this.blink(),
      this.props.interval
    );
  }
  componentWillUnmount() {
    clearInterval(this.componentInterval);
  }
  blink = () => {
    this.setState({ visibility: !this.state.visibility });
  };
  render() {
    const renderStyles = this.props.style
      ? { ...this.props.style, visibility: "hidden" }
      : {
          visibility: "hidden"
        };
    return (
      <React.Fragment>
        {this.state.visibility ? (
          <span {...this.props}>{this.props.children}</span>
        ) : (
          <span {...this.props} style={renderStyles}>
            {this.props.children}
          </span>
        )}
      </React.Fragment>
    );
  }
}

Blink.propTypes = propTypes;
Blink.defaultProps = defaultProps;
