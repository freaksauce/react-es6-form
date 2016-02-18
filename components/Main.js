import React from 'react';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const mainContentObj = this.props.mainContentData;

    let getFeatures = mainContentObj.features.map(function(item, i) {
      return (
        <div className="feature-col col-xs" key={"feature"+i}>
          <div className="feature box">
            <div className="feature-heading text-center">{item.heading}</div>
            <div className="feature-icon"><i className={item.icon}></i></div>
            <div className="feature-description">{item.description}</div>
          </div>
        </div>
      )
    });

    return (
            <main className="content cm-container">
              <h1 className="main-heading text-center">{mainContentObj.heading}</h1>
              <div className="features row">
                {getFeatures}
              </div>
            </main>
          )
  }

};
