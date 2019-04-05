import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="container jumbotron">
               <h1 style={{fontSize: "80px"}}>Hello New Web</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
               <button className="btn btn-primary">Visit ReactJs</button>
            </div>
        );
    }
}

export default Header;