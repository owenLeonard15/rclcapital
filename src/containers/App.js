import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import CardList from '../components/CardList';
import LinkBar from '../components/LinkBar';
import Accordian from '../components/Accordian';
import ContactForm from '../components/ContactForm';
import TextCarousel from '../components/TextCarousel';

class App extends Component {
  constructor () {
    super()
    this.state = {
      textId : '0'
    }
  }

 onLinkClicked = (event) => {
   this.setState({textId : event.target.id});
 }
 
 componentDidMount  = () =>{
  let navList = document.getElementById('navlist');
  let list = navList.getElementsByClassName("nav-item");

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
      let current = navList.getElementsByClassName("active");
      console.log(current);
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
 }


  render() {

    const{textId} = this.state;
    
    return (
      <div>
        <NavBar/>
        <Header/>
        <div className="container-fluid banner text-center">
          <div className="row">
            <div className="col-lg-2"></div>
            <p className="bg-light col-lg-8" id="desc">
              RCL Capital Management is a service of Ronald C. Leonard, an independent,
              fee-only financial advisor from Wexford, Pennsylvania serving clients primarily
               in the Greater Pittsburgh Area.
            </p>
            <div className="col-lg-2"></div>
          </div>
          <h2 id="prospectus">Prospectus</h2>
        </div>
        <div className="bg-light list">
          <CardList/>
        </div>
        <div className="bg-dark" id="services">
          <LinkBar title="Services" linkClicked={this.onLinkClicked} />
        </div>
        <div className="bg-light">
        <TextCarousel currentItem={textId} />
        </div>
        <div>
          <h4 id="faq">FAQ's</h4>
          <Accordian />
        </div>
        <h6 id="contact" className="bg-dark">Contact</h6>
        <div style={{marginTop: '50px', marginBottom: '50px'}} className="row align-items-center text-center container-fluid">
          {/* <div className="col-lg-6">
            <ContactForm />
          </div> */}
          <div className="col-lg-5">
            <div className="container-fluid p-3 rounded-top" id="contact-us">
            <h6 id="contactHeader" className="text-white m-0">Reach us directly at</h6>
            </div>
            <p className="text-center shadow rounded-bottom bg-light p-3" id="contactMemo">
              ron@rclcapital.com<br></br>
              (724)-934-0981
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
