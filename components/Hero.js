import React from 'react';

export default class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const heroObj = this.props.heroData;
    const iconClasses = "fade-in three slide-up "+heroObj.icon;
    return (
            <section className="hero text-center">
                <h1 className="fade-in one">{heroObj.heading}</h1>
                <p className="fade-in two">{heroObj.description}</p>
                <i className={iconClasses} />
            </section>
          )
  }

};
