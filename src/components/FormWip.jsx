// import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Modal } from "react-bootstrap";
import styles from "./styles/Form.module.css";
import ghosty from "../assets/icons/ghost_icon.png";

function Form() {
  // define states - create state object
  const [state, setState] = useState({
    fullName: '', 
    email: '', 
    message: '',
    showModal: false, 
    modalMessage: '',
  });

  const handleInputChange = (event) => {
    // get value/name of input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // updating the input's state
    setState({
      ...state,
      [name]: value,
      message: state.message,
    });
  };

  // update state based on inputs
  const handleFormSubmit = async (event) => {
    // Preventing page refresh
    event.preventDefault();
    console.log("submit pressed!");

    // conditional logic
    // to set modals
    if (!state.fullName.length) {
      setState({
        fullName: '',
        showModal: true,
        modalMessage: `Hold up! You need to enter your name please.`,
      });
      return;
    } else if (
      state.email === 'undefined' ||
      state.email.length <= 9 ||
      !state.email.includes("@")
    ) {
      // convert alerts to modal popup
      // alert("Please provide a proper email");
      setState({
        email: "",
        showModal: true,
        modalMessage: `Hi ${state.fullName}! 
        Please provide your finest, legitimate email address.`,
      });
      return;
    }

    // send form data to Form spree
    const response = await fetch('https://formspree.io/f/mnqyveza', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });

    if (response.ok) {
      setState({
        fullName: '',
        email: '',
        message: 'Your message has been sent successfully!',
        showModal: true,
        modalMessage: `Thanks ${state.fullName}!` +
        `I'll be in touch as soon as possible.`,
      });
    } else {
      // handle error
      setState({
        showModal: true,
        modalMessage: `Oops, something went wrong!` +
        `Please try again later.`,
      });
    }
  };

  // hide modal when closed
  const handleCloseModal = () => {
    setState({ 
      showModal: false,
    });
  };

  return (
    <>
      {/* form wrapper */}
      <div
        className={`${styles.wrapper} rounded d-flex align-items-stretch -mt-16`}
      >
        <div className="bg-primary p-8 mt-8">
          <div className="flexTop flex align-items-center justify-between">
            <div className="text-white">
              <i className="fa-solid fa-envelope fa-3x"></i>
            </div>
            <div className={`${styles.avatar} -mr-2`}>
              <img
                className="lilGhosty"
                src={`${ghosty}`}
                alt="lil ghosty avatar"
              />
            </div>
          </div>
          <div className="pt-5">Please get in touch via this secure form</div>
          <div className="pt-sm-5 pt-5 cursive mt-sm-5">
            <em>I need your email to reach you!</em>
          </div>
        </div>
        <div className="contact-form bg-secondary grid-cols-2 p-8 justify-center">
          {/* create form */}
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-group justify-center pt-2 w-full">
              <label htmlFor="message">Message</label>
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
            <div
              className="d-flex align-items-center flex-wrap 
                justify-content-between pt-4 w-full"
            >
              <div className="form-group pt-lg-2 pt-3 w-full">
                <label htmlFor="name">Your Name</label>
                <input
                  value={state.fullName}
                  name="fullName"
                  onChange={handleInputChange}
                  type="text"
                  className="form-control pr-8 w-full"
                  placeholder="Your Name"
                  required
                  style={{ 
                    fontFamily: "Poppins", 
                    color: "black" }}
                />
              </div>
              <div className="form-group pt-lg-2 pt-3 w-full">
                <label htmlFor="email">Your Email</label>
                <input
                  value={state.email}
                  type="email"
                  name="email"
                  className="form-control pr-8 w-full"
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  style={{ 
                    fontFamily: "Poppins", 
                    color: "black" }}
                />
                {/* form validation */}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            {/* button area */}
            <div
              className="flex flex-col md:flex-row items-center justify-center 
                  md:justify-between pt-8-lg-5 mt-lg-4 mt-5"
            >
              <div
                className="closeBtn btn btn-primary py-2 px-6 text-lg rounded-lg 
                  shadow-md text-white bg-lumi-pink hover:bg-purps focus:outline-none 
                  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                // type="button"
                type="submit"
                onClick={handleFormSubmit}
                disabled={state.submitting}
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
        <Modal
          // show.hide
          show={state.showModal}
          onHide={handleCloseModal}
          // prevent? auto scrolling
          className={state.showModal ? "modalOpen" : ""}
        >
          <div className={`${styles.modalCard}`}>
            <div className={`${styles.modalContent}`}>
              <Modal.Header className={`${styles.modalHeader}`} closeButton>
                <Modal.Title>{state.modalMessage}</Modal.Title>
              </Modal.Header>
              {/* <Modal.Body>{this.state.modalMessage}</Modal.Body> */}
              <Modal.Footer className={`${styles.modalFooter}`}>
                {/* modal btn */}
                <div
                  variant="secondary"
                  className={`${styles.closeBtn} btn btn-primary py-2 px-6 text-lg rounded-lg 
                  shadow-md text-white bg-lumi-pink hover:bg-purps focus:outline-none focus:ring-2
                focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer mx-auto
                  ${state.showModal ? "block" : "hidden"
                  }`}
                  type="button"
                  onClick={handleCloseModal}
                >
                  Close
                </div>
              </Modal.Footer>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Form;
