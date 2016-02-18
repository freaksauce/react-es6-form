import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Main from './Main';
import Testimonial from './Testimonial';
import Form from './Form';
import Footer from './Footer';

require('../sass/app.scss');

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jsonObj: props.jsonObj}

    const _self = this;
    fetch(this.props.source)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            _self.setState({jsonObj: data});
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

  }

  render() {

    if (this.state.jsonObj) {
      const heroData = this.state.jsonObj.hero;
      const mainContentData = this.state.jsonObj.mainContent;
      const testimonialData = this.state.jsonObj.testimonial;
      const footerData = this.state.jsonObj.footer;
      return (
              <div>
                <Nav />
                <Hero heroData={heroData}/>
                <Main mainContentData={mainContentData} />
                <Testimonial testimonialData={testimonialData}/>
                <Form />
                <Footer footerData={footerData}/>
              </div>
            )
    }else{
      return (
        <p>Loading...</p>
      )
    }
  }

};

App.defaultProps = {};
