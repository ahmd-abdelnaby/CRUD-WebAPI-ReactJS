import React, { Component } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card';

export class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        Axios.get('https://reqres.in/api/users')
            .then(res => {
                this.setState({ users: res.data.data });
                console.log(this.state.users);
            }
            ).catch(err => { console.log(err); })
    }

    render() {
        return (
            
            <div className="row container-fluid">
                
                {this.state.users.map(user => <div className="col-md-4 col-sm-6"><br></br><br></br><Card border="primary" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={user.avatar} />
                    <Card.Body style={{ background: 'white' }}>
                        <Card.Text >
                            <h2>{user.first_name}</h2>
                            <h2><a href={"profile/" + user.id}>{user.email}</a></h2>
                        </Card.Text>
                    </Card.Body>
                </Card></div>)}
            </div>
        )
    }
}

export default Users
