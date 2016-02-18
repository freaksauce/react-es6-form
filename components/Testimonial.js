import React from 'react';

export default class Testimonial extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const testimonialObj = this.props.testimonialData;
    return (
            <section className="testimonial cm-container">
              <div className="row center-xs">
                <div className="col-xs-12 xol-sm-8">
                  <div className="box">
                    <div className="row">
                      <div className="testimonial-photo col-xs-6 col-sm-4"><img src={testimonialObj.photo} /></div>
                      <div className="col-xs-6">
                        <div className="testimonial-quote"><span className="quotemarks">“</span>{testimonialObj.quote}</div>
                        <div className="testimonial-name">{testimonialObj.name}, {testimonialObj.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
  }

};
