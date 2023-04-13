import React from 'react';
import barn from '../../images/barn.png';

const Nav: React.FC<{}> = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 navbar-inverse">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img className="img-fluid" src={barn} alt="logo" />
          </div>
          <div className="col-md-9">
            <a className="navbar-brand" href="https://drummondfarm.win">
              Drummond Farm
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
