import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Contactus extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.submituserContactForm = this.submituserContactForm.bind(this);
    
      };
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
    
      }
    
      submituserContactForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
      }
      validateForm() {
    
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
    
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
    
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
    
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
    
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{11}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }
    
    
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
      }
   render(){
        return (
         <section className="my-5 py-5">       {/* //margin top+bottom and top + bottom padding */}
                <div className="container">
                    <div className="well well-sm">
                        <h3 className="p-2"><strong>Our Location</strong></h3>
                     </div>
               
                {/* row for our map and right side form */}
            <div className="row">
                <div className="col-md-7">
                    <iframe class="embed-responsive-item" title="Location" src="https://www.google.com/maps/d/u/0/embed?mid=133GRqchpq518-hgJzuwB8IEmhaBr3xBo" style={{
                        border:'0',
                width:'100%', height:'315px',frameborder:'0' }} allowFullScreen ></iframe>
                <h4> Mailing Address</h4>
                <p style={{color: '#787878'}}>
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                      <strong>&nbsp; Address </strong>  <br/>
                        Office No.421, Floor F2 Jeff Heights 77 E1, Piwadhi Mor, Rawalpindi <br/>
                       
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <strong>&nbsp;Phone Number</strong>  <br/>
                        03001111111<br/>

                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <strong>&nbsp; Email</strong>  <br/>
                        support@easytickets.pk
                </p>
                </div>
            {/* column for form */}
                  <div className="col-md-5">
                        <h4><strong>Contact Us</strong></h4>
                        <form  method="post"  name="userRegistrationForm"  onSubmit= {this.submituserContactForm}>
                           <div className="form-group">
                               <input type="text" name="username" className="form-control" value={this.state.fields.username} onChange={this.handleChange} placeholder="Name" required="required"/>
                               <div className="errorMsg">{this.state.errors.username}</div>
                           </div>

                           <div className="form-group">
                               <input type="email" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} className="form-control" placeholder="Email" required="required"/>
                               <div className="errorMsg">{this.state.errors.emailid}</div>
                           </div>

                           <div className="form-group">
                               <input type="tel" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}  className="form-control" placeholder="Phone" required="required"/>
                               <div className="errorMsg">{this.state.errors.mobileno}</div>
                           </div>
                           <textarea className="form-control" cols="30" rows="5" placeholder="Message" required/>
                           <br/>
                        {/* <Link className="btn btn-outline-primary text-uppercase" mt-1 >
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <i className="fab fa-teleram-plane" aria-hidden/>
                        &nbsp;Send
                        </Link> */}
                        <input type="submit" className="btn btn-outline-primary text-uppercase" mt-1="true" value="Send"/>
                        </form>
                   </div>
            </div>
            </div>
        </section>
    )
}
}
export default Contactus;
