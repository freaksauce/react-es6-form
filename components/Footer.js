import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const footerObj = this.props.footerData;
    return (
            <footer dangerouslySetInnerHTML={{__html: footerObj.text}}/>
          )
  }

  // Footer will never change so no need to ever re-render
  shouldComponentUpdate() {
    return false;
  }

};
