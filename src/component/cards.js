import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className="container">
              <div className="row" style={{marginLeft: "-55px"}}>

                <div className="col-sm-3">
                    <div className="card" style={{width: "250px", marginLeft: "30px"}}>
                        <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr></hr>
                            <a href="#" className="btn btn-primary" style={{marginLeft: "35px"}}>Go somewhere</a>
                        </div>
                    </div>      
                </div>

                <div className="col-sm-3">
                    <div className="card" style={{width: "250px", marginLeft: "30px"}}>
                        <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr></hr>
                            <a href="#" className="btn btn-primary" style={{marginLeft: "35px"}}>Go somewhere</a>
                        </div>
                    </div>      
                </div>


                <div className="col-sm-3">
                    <div className="card" style={{width: "250px", marginLeft: "30px"}}>
                        <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr></hr>
                            <a href="#" className="btn btn-primary" style={{marginLeft: "35px"}}>Go somewhere</a>
                        </div>
                    </div>      
                </div>

                <div className="col-sm-3">
                    <div className="card" style={{width: "250px", marginLeft: "30px"}}>
                        <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr></hr>
                            <a href="#" className="btn btn-primary" style={{marginLeft: "35px"}}>Go somewhere</a>
                        </div>
                    </div>      
                </div>


              </div>
            </div>
        );
    }
}

export default Card;