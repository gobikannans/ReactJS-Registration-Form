import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstInput: '',
    secondInput: '',
    isSubmitted: false,
    blurFirstInput: false,
    blurSecondInput: false,
  }

  onFirstName = event => {
    this.setState({firstInput: event.target.value})
  }

  onSecondName = event => {
    this.setState({secondInput: event.target.value})
  }

  onBlurFirst = () => {
    const {firstInput} = this.state
    if (firstInput === '') {
      this.setState({blurFirstInput: true})
    } else {
      this.setState({blurFirstInput: false})
    }
  }

  onBlurSecond = () => {
    const {secondInput} = this.state
    if (secondInput === '') {
      this.setState({blurSecondInput: true})
    } else {
      this.setState({blurSecondInput: false})
    }
  }

  onSubmittedForm = event => {
    const {firstInput, secondInput} = this.state
    event.preventDefault()

    if (firstInput === '' && secondInput === '') {
      this.setState({
        isSubmitted: false,
        blurFirstInput: true,
        blurSecondInput: true,
      })
    } else if (firstInput !== '' && secondInput === '') {
      this.setState({
        isSubmitted: false,
        blurFirstInput: false,
        blurSecondInput: true,
      })
    } else if (firstInput === '' && secondInput !== '') {
      this.setState({
        isSubmitted: false,
        blurFirstInput: true,
        blurSecondInput: false,
      })
    } else {
      this.setState({isSubmitted: true})
    }
  }

  onSubmitSuccess = () => {
    this.setState({isSubmitted: false})
  }

  renderRegistration = () => {
    const {
      firstInput,
      secondInput,
      blurFirstInput,
      blurSecondInput,
    } = this.state

    const blurFirstStyle = blurFirstInput ? 'blur-input' : 'normal-input'
    const blurSecondStyle = blurSecondInput ? 'blur-input' : 'normal-input'

    return (
      <form className="form-container" onSubmit={this.onSubmittedForm}>
        <label htmlFor="first-name" className="name">
          FIRST NAME
        </label>
        <input
          type="text"
          id="first-name"
          placeholder="First name"
          className={blurFirstStyle}
          onChange={this.onFirstName}
          onBlur={this.onBlurFirst}
          value={firstInput}
        />
        {blurFirstInput ? <p className="blur">Required</p> : ''}

        <label htmlFor="second-name" className="name">
          LAST NAME
        </label>
        <input
          type="text"
          id="second-name"
          placeholder="Last name"
          className={blurSecondStyle}
          onChange={this.onSecondName}
          onBlur={this.onBlurSecond}
          value={secondInput}
        />
        {blurSecondInput ? <p className="blur">Required</p> : ''}

        <button type="submit" className="btn-style">
          Submit
        </button>
      </form>
    )
  }

  renderSubmittedForm = () => (
    <div className="submitted-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="click"
      />
      <p className="success-para">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn-style"
        onClick={this.onSubmitSuccess}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="card-container">
          {isSubmitted ? this.renderSubmittedForm() : this.renderRegistration()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
