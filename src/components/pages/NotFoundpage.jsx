import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
class NotFoundpage extends Component {
    render(){
    return (
        <ComponentNotFound className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!!!!!!</h1>
                        <h2>Error 404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error occured. The requested page was not found!
                        </div>
                        <div className="error-actions">
                            <Link to="/Home" className="class btn btn-outline-primary btn-lg">
                            <i class="fa fa-home" />
                            &nbsp;Back To Main
                            </Link>
                            <Link className="class btn btn-outline-secondary btn-lg">
                              <i className="fa fa-envelope"/>&nbsp;Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentNotFound>
    );
}
}
export default NotFoundpage;


const ComponentNotFound =styled.div`
.error-template {

    padding:40px 15px;
    text-align:center;
}

.error-actions-{
    margin-top: 15px;
    marign-bottom: 15px;
}

.btn{
    margin-right: 10px;
}
`;