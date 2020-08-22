import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export class about extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <Jumbotron>
                    <h1>About ITI!</h1>
                    <p>
                        Information Technology Institute is a pioneering national institute with 
                        a regional influence and international linkage. Since it was established in 1993, 
                        ITI has been devoted to provide a large pool of promising youth with world-class human
                         capacity building programs and empirical learning approach to profoundly scale up 
                         the impact of the aspiring Egyptian youth in the ICT workplace. While moving to 
                         a future where everyone is acquainted with technology and is capable to contribute
                          in shaping the future of the ICT industry, the ITI provides Egyptians 
                          from 12 year olds till 60 year olds with the needed support. It offers Egyptians
                           free scholarships and training in the different areas of the market.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default about
