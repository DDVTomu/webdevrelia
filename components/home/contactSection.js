import React from "react"
import { navigate } from "react-router-dom"
import axios from "axios"
import validator from "email-validator"
import ContactForm from "@components/common/Contact/ContactForm"

class ContactSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      email: "",
      contactNumber: "",
      message: "",
      isValid: false,
      emailInvalid: "",
      nDA: false,
      submitted: false,
      loading: false,
    }
    this.onUpdateValues = this.onUpdateValues.bind(this)
  }
  validateEmail = () => {
    if (this.state.email !== "") {
      this.setState({
        isValid: validator.validate(this.state.email),
        emailInvalid: validator.validate(this.state.email),
      })
    } else {
      this.setState({ isValid: false, emailInvalid: false })
    }
  }
  onUpdatePhone = number => {
    this.setState({ contactNumber: number })
  }
  hasNull(target) {
    for (var val in target) {
      if (target[val] === "" || target[val] === undefined) return true
    }
    return false
  }
  checkDataNull(arr) {
    this.setState({ isValid: !this.hasNull(arr) })
  }
  onUpdateValues = e => {
    this.setState({ [e.target.name]: e.target.value })
    e.target.className =
      e.target.value != "" ? `form-control has-value` : "form-control"
    this.validateEmail()
    this.checkDataNull({ ...this.state })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const data = { ...this.state }
    if (data.email && data.fullName && data.contactNumber) {
      this.setState({ loading: true })
      axios({
        url: `https://script.google.com/macros/s/AKfycbzhePOWbcawV3iG3yVe-Z3xyeB1tFFvXZXZbqs9DT0NvecFycYD/exec`,
        data: JSON.stringify(data),
        headers: { "content-type": "application/x-www-form-urlencoded" },
        method: "POST",
      }).then(res => {
        if (res.data.result) {
          this.setState({ submitted: true })
          this.setState({ loading: false })
        }
      })
    } else {
      this.checkDataNull(data)
    }
  }
  resetForm() {
    document.getElementById("contact-form").reset()
  }

  render() {
    const { isValid, submitted } = this.state

    return (
      <>
        {submitted ? (
          navigate("/thanks")
        ) : (
          <ContactForm
            onChange={this.onUpdateValues.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            isValid={isValid}
            loading={this.state.loading}
            showEmailError={this.state.emailInvalid}
            state={this.state}
            onUpdatePhone={this.onUpdatePhone}
          />
        )}
      </>
    )
  }
}
export default ContactSection
