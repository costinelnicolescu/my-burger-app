import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import "./SideDrawer.css";
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
    let attachedClasses = 'SideDrawer Close';
    if(props.open){
        attachedClasses = 'SideDrawer Open';
    }
  return (
    <div>
        <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses}>
        <Logo height="11%" />
        <br />
        <nav>
          <NavItems />
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
