import React from 'react';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.modalShow}>
      <div className="md-modal md-effect">
        <div className="md-content">
          <h3>{this.props.message.title}</h3>
          <div>
            <p>{this.props.message.details}</p>
            <button className="md-close" onClick={this.props.hideModal}>Close</button>
          </div>
        </div>
      </div>
      </div>
    )
  }

}
