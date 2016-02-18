import React from 'react';
import Modal from './Modal';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmailListCheckbox = this.updateEmailListCheckbox.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.validateField = this.validateField.bind(this);
    this.state = {
      emailListIsChecked: false,
      modalMessage: '',
      modalShow: ''
    }
  }

  validateField(e) {
    const name = e.target.name;
    const val = e.target.value;
    if (e.target.type === 'email') {
      if (!this.isValidEmail(val)) {
        this.refs.email.className = "error";
      }else{
        this.refs.email.className = "";
      }
    }else{
      if (val === '' || val === undefined) {
        this.refs[name].className = "error";
      }else{
        this.refs[name].className = "";
      }
    }
  }

  handleSubmit(e) {
    // validate submitted data
    // get field values
    const fullname = this.refs.fullname.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const referral = this.refs.referral.value;
    let emailList = "no";
    let errors = 0;

    // check field values
    if (fullname === '' || fullname === undefined) {
      this.refs.fullname.className = "error";
      errors++;
    }else{
      this.refs.fullname.className = "";
    }
    if (!this.isValidEmail(email)) {
      this.refs.email.className = "error";
      errors++;
    }else{
      this.refs.email.className = "";
    }
    if (password === '' || password === undefined) {
      this.refs.password.className = "error";
      errors++;
    }else{
      this.refs.password.className = "";
    }
    if (this.state.emailListIsChecked) {
      emailList = 'yes';
    }

    if (errors === 0) {
      // if data is valid call sendEmail()
      const formFields = {
        fullname: fullname,
        email: email,
        password: password,
        referral: referral,
        emailList: emailList
      }
      this.sendEmail(formFields);
    }

    e.preventDefault();
  }

  isValidEmail(emailAddress) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress);
  }

  updateEmailListCheckbox() {
    // toggle emailList checkbox
    this.setState({emailListIsChecked: !this.state.emailListIsChecked});
  }

  sendEmail(formFields) {
    console.log(formFields);
    // show modal
    this.setState({'modalShow': 'md-show'});
    // show progress message
    this.setState({'modalMessage': {'title': 'Sending details', 'details': 'Please wait while we sign you up!'}});

    setTimeout(() => {
      let sent = true;
      if (sent === true) {
        // show success message when sent
        this.setState({'modalMessage': {'title': 'Success', 'details': 'Thank you for your signing up for beta access, we will be in touch shortly.'}});
        // clear form formFields
        this.refs.fullname.value = '';
        this.refs.email.value = '';
        this.refs.password.value = '';
        this.refs.referral.options[0].setAttribute('selected','selected');
      }else{
        // show failure message when not sent
        this.setState({'modalMessage': {'title': 'Houston, we have a problem', 'details': 'There was a problem signing you up, please try again.'}});
      }
    }, 3000);
  }

  hideModal() {
    this.setState({'modalShow': ''});
  }

  render() {
    return (
            <section className="signup-form">
              <div className="cm-container">

                <form>

                  <h1 className="text-center">Sign up for beta access.</h1>

                  <div className="row">

                    <div className="col-xs-12 col-sm-6">
                      <div className="box">
                        <label>Full Name</label>
                        <input type="text" name="fullname" ref="fullname" placeholder="e.g. Jon Bloomer" onBlur={this.validateField} />
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                      <div className="box">
                        <label>Email address</label>
                        <input type="email" name="email" ref="email" placeholder="jonbloomer@gmail.com" onBlur={this.validateField}/>
                      </div>
                    </div>

                  </div>
                  {/*.row*/}

                  <div className="row">

                    <div className="col-xs-12 col-sm-6">
                      <div className="box">
                        <label>Password</label>
                        <input type="password" name="password" ref="password" placeholder="Strong like coffee" onBlur={this.validateField}/>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                      <div className="box">
                        <label>How did you hear about this?</label>
                        <select name="referral" ref="referral">
                          <option value="">Please select</option>
                          <option value="twitter">Twitter</option>
                          <option value="facebook">Facebook</option>
                          <option value="google">Google</option>
                        </select>
                      </div>
                    </div>

                  </div>
                  {/*.row*/}

                  <div className="row">
                    <div className="col-xs-12 checkbox">
                      <input type="checkbox" ref="emailList" name="emailList" checked={this.state.emailListIsChecked} />
                      <label onClick={this.updateEmailListCheckbox}>I want to be added to the email list (we send monthly).</label>
                    </div>
                  </div>
                  {/*.row*/}

                  <div className="row">
                    <div className="col-xs-12 submit-container">
                      <input className="submit-btn" onClick={this.handleSubmit} type="submit" value="Create my account" />
                    </div>
                  </div>
                  {/*.row*/}

                </form>

              </div>
              <Modal message={this.state.modalMessage} modalShow={this.state.modalShow} hideModal={this.hideModal} />
              <div className="md-overlay"></div>
            </section>

          )
  }

};
