import React, { Component } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            id: Number
        }

    }

    componentDidMount() {
        Axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ user: res.data.data });
                console.log(this.state.user);
            }
            ).catch(err => { console.log(err); })
    }

    render() {
        return (
            <div className="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.user.avatar} />
                    <Card.Body>
                        <Card.Title>{this.state.user.first_name} {this.state.user.last_name}</Card.Title>
                        <Card.Text>
                        {this.state.user.email}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Profile
