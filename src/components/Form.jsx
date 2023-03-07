import styles from "./styles/Form.module.css";
import ghosty from "../assets/icons/ghost_icon.png";
import React, { Component } from "react";
import { Modal, Button, Card } from "react-bootstrap";

// import { state } from "react";

class Form extends Component {
  state = {
    fullName: "",
    email: "",
    showModal: false,
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("submit pressed!");

    // conditionals
    if (!this.state.fullName.length) {
      // alert for debug only
      // alert("Provide your name please!");
      this.setState({
        fullName: "",
        showModal: true,
        modalMessage: `Hold up! You need to enter your name please.`,
      });
      Modal.Dialog("test");
      return;
    } else if (
      this.state.email === "undefined" ||
      this.state.email.length <= 9 ||
      !this.state.email.includes("@")
    ) {
      // convert alerts to modal popup
      // alert("Please provide a proper email");
      this.setState({
        email: "",
        showModal: true,
        modalMessage: `Hold up! ${this.state.fullName}! You need to supply your finest email please.`,
      });
      return;
    }

    // Alert the user their full name, clear `this.state.fullName`, clearing the inputs
    // alert(
    //   `Thanks ${this.state.fullName}! I'll be in touch as soon as possible.`
    // );
    // this.setState({
    //   fullName: "",
    // });

    this.setState({
      fullName: "",
      showModal: true,
      modalMessage: `Thanks ${this.state.fullName}! I'll be in touch as soon as possible.`,
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  // // Open the modal - this is only for standard Bootstrap!
  // // I want to use just the Modal component from react-bootstrap

  // const myModal = document.getElementById("myModal");
  // const modal = new window.bootstrap.Modal(myModal);
  // modal.show();

  // // Update the modal content
  // const modalBody = document.querySelector(".modal-body");
  // modalBody.innerHTML = `Thanks ${this.state.fullName}!
  // I'll be in touch as soon as possible.`;

  // Clear `this.state.fullName`, clearing the inputs
  //   this.setState({
  //     fullName: "",
  //   });
  // };

  render() {
    return (
      <>
        <div
          className={`${styles.wrapper} rounded d-flex align-items-stretch py-16`}
        >
          <div className="bg-primary p-8 mt-8">
            <div className="flexTop flex align-items-center justify-between">
              <div className="text-white">
                <i className="fa-solid fa-envelope fa-3x"></i>
              </div>
              <div className="avatar">
                <img
                  className="lilGhosty"
                  src={`${ghosty}`}
                  alt="lil ghosty avatar"
                  width="70px"
                />
              </div>
            </div>
            <div className="pt-5">
              Please get in touch via this secure form:
            </div>
            <div className="pt-sm-5 pt-5 cursive mt-sm-5">
              <em>I need your email to reach you back!</em>
            </div>
          </div>
          <div className="contact-form bg-secondary grid-cols-2 p-8 justify-center">
            <form className="form">
              <div className="form-group justify-center pt-2 w-full">
                <label htmlFor="message">Message me:</label>
                <textarea
                  name="message"
                  className="form-control w-full mt-2"
                  required
                  style={{
                    fontFamily: "Poppins",
                    color: "black",
                    fontSize: "14px",
                  }}
                  rows="5"
                  placeholder="Type a message here ..."
                ></textarea>
              </div>
              <div className="d-flex align-items-center flex-wrap justify-content-between pt-4 w-full">
                <div className="form-group pt-lg-2 pt-3 w-full">
                  <label htmlFor="name">Your Name</label>
                  <input
                    value={this.state.fullName}
                    name="fullName"
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control pr-8 w-full"
                    placeholder="Your Name"
                    required
                    style={{ fontFamily: "Poppins", color: "black" }}
                  />
                </div>
                <div className="form-group pt-lg-2 pt-3 w-full">
                  <label htmlFor="name">Your Email</label>
                  <input
                    value={this.state.email}
                    type="email"
                    name="email"
                    className="form-control pr-8 w-full"
                    onChange={this.handleInputChange}
                    placeholder="Your Email"
                    required
                    style={{ fontFamily: "Poppins", color: "black" }}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-8-lg-5 mt-lg-4 mt-5">
                <div
                  className="btn btn-primary py-2 px-6 text-lg rounded-lg shadow-md text-white bg-lumi-pink hover:bg-purps 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  type="button"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          {/* <!-- Modal --> */}
          <Card>
            <Card.Body>
            <Modal modal-dialog-centered show={this.state.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Oops!</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.state.modalMessage}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Form;
