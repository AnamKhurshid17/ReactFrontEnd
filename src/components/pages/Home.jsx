import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import moment from 'moment'; //used to disable previous dates
// import DatePicker from 'DatePicker';
class Home extends Component {

  state = {
    startDate: new Date(),
  };



  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render(){
    
    return (
      <div className="parent_class">
      <div className="carouselcontainer">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 " src="assets/buses2.jpg" alt="1st slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 " src="assets/buses3.jpg" alt="2nd slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 " src="assets/buses4.jpg" alt="3rd slide"/>
              </div>
              
              </div>
            {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a> */}
          </div>

<div className="booking_form">
          <div className="vertical-center" style={{
                                                    minHeight: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    position: 'absolute',
                                                    width: '100%',
                                                    top: 60,
                                                    left:30
                                                    
                                                  }}>
              <div className="container-fluid" >
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <form style={{
                                    borderRadius: '15px 15px 15px 15px',
                                    padding: '25px',
                                    textAlign: "center",
                                    backgroundColor: 'rgba(237, 237, 237, 0.5)',
                                    width: '500px'
                                  }}>
                      <div className="form-group">
                      <h4><strong>Purchase Ticket</strong></h4>
                      </div>
                       <div className="form-group">
                            <label for="source">Departure</label>
                              <select className="form-control" id="source" >
                                <option value="Faisalabad">Faisalabad</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Multan">Multan</option>
                              </select>
                         </div>
                         <div className="form-group">
                              <label for="destination">Arrival</label>
                              <select className="form-control" id="destination" >                               
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Multan">Multan</option>
                                <option value="Faisalabad">Faisalabad</option>
                              </select>
                           </div>
                    <div className="form-group">
                    <DatePicker  selected={this.state.startDate}  onChange={this.handleChange}   
                          minDate={moment().toDate()}  placeholderText="Select departure day"  />
                           {/* disable the previous dates */}
                    </div>
                    <div class="form-group" >
                    <Link className="btn btn-dark text-uppercase" to="/schedule" mt-1  >
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <i className="fab fa-teleram-plane" aria-hidden/>
                        &nbsp;Send
                        </Link>
                        </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
          </div>
          {/* carousel ended here */}
          {/* About Us */}
        <div className="row mx-md-n5">
        <div className="col px-md-5">
          <h2 className="p-3">About Us</h2>
        </div>
        </div>
        
        <div className="d-inline-flex pl-3 pr-4">
        <p className="text-justify">
          Getting a bus ticket has never been a hassle free task. 
          Whether having to drive to the cinema or bus stand to book tickets in advance or standing in those 
          seemingly never ending queues is what we had to go through until easyticket.pk came into being. 
          Easyticket.pk has introduced online buying of bus tickets in metropolitan (Lahore , Karachi &amp;
           Islamabad) cities of Pakistan. It is a user friendly application where people can browse and review bus 
           schedule and reserve seat through Easyticket.pk. Bookme.pk is one of the widely used application in
          present generation for booking tickets through online web / application. Now there is no need of queue
           maintenance and rush, one can book the ticket of a bus from his or her smart phone and tablets.
          </p>
          </div>
      </div> 

    )

  }
}
  export default Home;

