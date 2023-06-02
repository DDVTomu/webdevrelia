import React from "react"
import Animation from "../Animation";
import LoadingSubmit from "./LoadingSubmit";
import PhoneInput from "react-phone-number-input";
import { useAmp } from "next/amp";
import ExportedImage from "next/image";
import "react-phone-number-input/style.css";
export const config = { amp: "true" };
const ContactForm = ({
  isValid,
  onChange,
  onSubmit,
  showEmailError,
  loading,
  state,
  onUpdatePhone,
}) => {
  const [value, setValue] = React.useState();
  const onChangePhone = (phone) => {
    onUpdatePhone(phone);
  };
  const loadAmp = useAmp();
  return (
    <div className="contact">
      {loading && <LoadingSubmit />}
      <div className="container">
        <Animation>
          <h2 className="hdg-lv2">
            Become one of our clients.
            <br />
            Let's make <span>great things!</span>
          </h2>
        </Animation>
        <div className="contact__block">
          <div className="contact__block__map">
            {loadAmp ? (
              <amp-img
                src="/images/home/contact-map.png"
                width={597}
                height={360}
                layout="intrinsic"
                alt="Work word"
              />
            ) : (
              <ExportedImage
                src="/images/home/contact-map.png"
                width={597}
                height={360}
                layout="intrinsic"
                alt="Work word"
                priority
              />
            )}
          </div>
          <div className="contact__block__form">
            <form
              name="contact-form"
              className="contact-form"
              onSubmit={onSubmit.bind(this)}
            >
              <div className="form-group">
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  id="FullName"
                  value={state.fullName}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
                <label htmlFor="FullName">Full name</label>
              </div>
              <div
                className={`${
                  showEmailError !== "" && showEmailError === false
                    ? "form-group error"
                    : "form-group"
                }`}
              >
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="Email"
                  value={state.email}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
                <label htmlFor="Email">Email Address</label>
              </div>
              <div className="form-group">
                <PhoneInput
                  name="contactNumber"
                  className="form-control"
                  id="ContactNumber"
                  international
                  defaultCountry="US"
                  value={value || ""}
                  onChange={(setValue, onChangePhone)}
                  placeholder="select"
                  required
                />

                <label htmlFor="ContactNumber">Contact number</label>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="Message"
                  value={state.message}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
                <label htmlFor="Message">Message</label>
              </div>
              <div className="form-check">
                <label className="form-check-label" htmlFor="NDA">
                  <input
                    name="nDA"
                    type="checkbox"
                    className="form-check-input"
                    id="NDA"
                  />
                  <span className="checkmark"></span>
                  Send me a copy of NDA
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isValid}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
