import React, { Component } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk() {
    this.setState({
      visible: false
    });
    window.location = this.props.location;
  }

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.showModal}>
          {this.props.buttonTitle}
        </button>
        <Modal
          title={this.props.title}
          onOk={() => this.handleOk()}
          onCancel={this.handleCancel}
          keyboard={true}
          visible={this.state.visible}
          okText="Learn More"
          cancelText="Close"
        >
          <p>{this.props.description}</p>
        </Modal>
      </div>
    );
  }
}

export default CustomModal;
