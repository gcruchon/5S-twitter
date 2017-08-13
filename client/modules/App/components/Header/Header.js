import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"><FormattedMessage id="siteTitle" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/clean-bots"><FormattedMessage id="menuCleanBots" /></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/manage-lists"><FormattedMessage id="menuManageLists" /></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
