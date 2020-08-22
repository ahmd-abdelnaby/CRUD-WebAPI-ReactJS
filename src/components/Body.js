import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'


const mystyle = {
    height: '80vh',
};

export class Body extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Carousel >
                    <Carousel.Item style={mystyle}>
                        <img style={mystyle}
                            className="d-block w-100"
                            src="react.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3><a href="https://reactjs.org/" style={{ color: 'white' }}>Learn React</a></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={mystyle}>
                        <img style={mystyle}
                            className="d-block w-100"
                            src="angular.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3><a href="https://angular.io/" style={{ color: 'white' }}>Learn Angular</a></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={mystyle}>
                        <img style={mystyle}
                            className="d-block w-100"
                            src="vue.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3><a href="https://reactjs.org/" style={{ color: 'white' }}>Learn Vue.js</a></h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br></br><br></br>
                <div className="row container-fluid">
                    <div className="col-md-4 col-sm-12">
                        <Card border="primary" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="react.png" />
                            <Card.Body style={{ background: 'white' }}>
                                <Card.Text >
                                    <h2>Ahmed Abdelnaby</h2>
                                    <h4>ahmdnaby01@gmail.com</h4>
                                    <h5>Egypt,Luxor,Tiba</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-12">

                        <Card border="primary" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="react.png" />
                            <Card.Body style={{ background: 'white' }}>
                                <Card.Text >
                                    <h2>Ahmed Abdelnaby</h2>
                                    <h4>ahmdnaby01@gmail.com</h4>
                                    <h5>Egypt,Luxor,Tiba</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-12">

                        <Card border="primary" style={{ width: '25rem', float: 'right' }}>
                            <Card.Img variant="top" src="react.png" />
                            <Card.Body style={{ background: 'white' }}>
                                <Card.Text >
                                    <h2>Ahmed Abdelnaby</h2>
                                    <h4>ahmdnaby01@gmail.com</h4>
                                    <h5>Egypt,Luxor,Tiba</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br></br><br></br>
                <div className="footer" bg="light" style={{background:'#4ad5ff',height:'15vh'}}>
                    <h3 style={{textAlign:'center',color:'white',paddingTop:'2vw'}}> CopyRights Reserved to 3bnby</h3>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Body
