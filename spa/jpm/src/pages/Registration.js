import React from 'react';
import './style.css'

function Registration() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form_label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form_label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form_label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form_label" htmlFor="password">Password </label>
                  <input className="form_input" type="password" id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form_label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form_input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn">Register</button>
          </div>
      </div>      
    )       
}
export default Registration;