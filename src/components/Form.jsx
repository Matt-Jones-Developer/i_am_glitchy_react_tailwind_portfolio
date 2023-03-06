import "./styles/Form.module.css";
import ghosty from "../assets/icons/ghost_icon.png";

const Form = () => {
  return (
    <>
      <div class="wrapper rounded d-flex align-items-stretch">
        <div class="bg-primary p-8 mt-8">
          <div className="flexTop flex align-items-center justify-between">
            <div class="text-white">
              <i class="fa-solid fa-envelope fa-3x"></i>
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
          <div class="pt-5">Please get in touch via this secure form:</div>
          <div class="pt-sm-5 pt-5 cursive mt-sm-5">
            <em>I need your email to reach you back!</em>
          </div>
        </div>
        <div class="contact-form bg-secondary  grid-cols-2 p-8">
          <form>
            <div class="form-group pt-3 pr-8">
              <label for="message">Message</label>
              <textarea
                name="message"
                class="form-control ml-8"
                required
              ></textarea>
            </div>
            <div class="d-flex align-items-center flex-wrap justify-content-between pt-4">
              <div class="form-group pt-lg-2 pt-3 pr-8">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control pr-8"
                  required
                />
              </div>
              <div class="form-group pt-lg-2 pt-3 pr-8">
                <label for="name">Your Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control pr-8"
                  required
                />
              </div>
            </div>
            <div class="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
              <div class="btn btn-default">Cancel</div>
              <div
                class="btn btn-primary"
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
        class="modal fade"
        id="myModal"
        tabindex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        {/* <!-- Modal --> */}
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalLabel">
                Thank You
                <span class="fas fa-heart"></span>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="ps-2">
                Thank You for contacting me. I will get back to you as soon as
                possible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
