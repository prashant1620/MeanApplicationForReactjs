import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
   if(window.confirm("user registerd")){
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:5000/api/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }
  }
  onIndex= e =>{
    if (this.props) {
      this.props.history.push("/index");
    }
  }
 
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
            <h3 align="center">Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="input-field col s12">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="input-field col s12">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                     
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register " 
                      className="btn btn-primary"
                      />
                </div>
                <div className="form-group">
                    <input type="button" 
                      value="Open Table" onClick={this.onIndex}
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
  }
}