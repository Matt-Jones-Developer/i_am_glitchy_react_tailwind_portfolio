import styles from "./styles/Form.module.css";
import ghosty from "../assets/icons/ghost_icon.png";

const Form = () => {
  return (
    <>
      <div className={`${styles.wrapper} rounded d-flex align-items-stretch py-16`}>
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
          <div className="pt-5">Please get in touch via this secure form:</div>
          <div className="pt-sm-5 pt-5 cursive mt-sm-5">
            <em>I need your email to reach you back!</em>
          </div>
        </div>
        <div className="contact-form bg-secondary grid-cols-2 p-8 justify-center">
          <form>
            <div className="form-group justify-center pt-2 w-full">
              <label htmlFor="message">Message me:</label>
              <textarea
                name="message"
                className="form-control w-full mt-2"
                required
                style={{ fontFamily: "Poppins", color: "black", fontSize: "14px" }}
                rows="5"
              ></textarea>
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-4 w-full">
              <div className="form-group pt-lg-2 pt-3 w-full">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control pr-8 w-full"
                  required
                  style={{ fontFamily: "Poppins", color: "black" }}
                />
              </div>
              <div className="form-group pt-lg-2 pt-3 w-full">
                <label htmlFor="name">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control pr-8 w-full"
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
        <div className="modal-dialog ml-16">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
