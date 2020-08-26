import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:5000/login', user)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
    }

    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Email"
                            onChange={this.onChangeEmail}
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={this.onChangePassword}
                        />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        )
    }
}