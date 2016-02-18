import React from 'react';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.handleMobileMenu = this.handleMobileMenu.bind(this);
    this.state = {
      mobileMenuState: 'mobile-menu'
    }
  }

  handleMobileMenu(e) {
    console.log('mobile-menu-trigger');
    if (this.state.mobileMenuState === 'mobile-menu mobile-menu-show') {
      this.setState({'mobileMenuState': 'mobile-menu'});
    }else{
      this.setState({'mobileMenuState': 'mobile-menu mobile-menu-show'});
    }
    e.preventDefault();
  }

  render() {

      return (
              <header className="header">
                <nav className="navbar">
                  <div className="row between-xs">

                    <div className="col-xs-3">
                      <div className="box box-container">
                        <a href="#" className="brand">
                          <img className="logo" src="assets/images/logo-pipeline.gif" alt="Pipeline"/>
                        </a>
                      </div>
                    </div>

                    <div className="col-xs-5 desktop-menu">
                      <div className="row menu">
                        <div className="col-xs">
                          <div className="box menu-item"><a href="/features">Features</a></div>
                        </div>
                        <div className="col-xs">
                          <div className="box menu-item"><a href="/pricing">Pricing</a></div>
                        </div>
                        <div className="col-xs-5 menu-item">
                          <div className="box"><a href="/case-studies">Case Studies</a></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xs-4 account desktop-menu">
                      <div className="box box-container float-right">
                        <a href="/signup" className="btn primary text-center float-right">Sign up</a>
                        <a href="/login" className="btn login float-right">Login</a>
                      </div>
                    </div>
                  </div>

                  {/*Mobile menu*/}
                  <div className="mobile-menu-trigger">
                    <a href="#" onClick={this.handleMobileMenu} className="btn primary text-center">MENU</a>
                  </div>
                  <div className={this.state.mobileMenuState}>
                    <ul>
                      <li><a href="/features">Features</a></li>
                      <li><a href="/pricing">Pricing</a></li>
                      <li><a href="/case-studies">Case studies</a></li>
                      <li><a href="/signup">Sign up</a></li>
                      <li><a href="/login">Login</a></li>
                    </ul>
                  </div>

                </nav>
              </header>
            )
  }

};
