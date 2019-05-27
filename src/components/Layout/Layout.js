import React, {Component} from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  constructor(props){
    super(props);
    this.state={
      showSideDrawer: false
    }
  }
  sideDrawerClosed = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerOpen = () => {
    this.setState({showSideDrawer: true});
  }

  render() {
    return (
      <div>
        <Toolbar menu={this.sideDrawerOpen} />
        <SideDrawer
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosed}/>
        <main className="Content">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
