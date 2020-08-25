import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class register extends Component{
    constructor(props){
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeCompany = this.onChangeCompany.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangePassword2 = this.onChangePassword2.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            firstName: '',
            lastname: '',
            company: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeCompany(e){
        this.setState({
            company: e.target.value
        })
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

    onChangePassword2(e){
        this.setState({
            password2: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            company: this.state.company,
            email: this.state.email,
            password: this.state.password
        }

        if(this.state.password === this.state.password2){
            axios.post('http://localhost:5000/register', user)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }else{

        }
    }

    render(){
        return (
            <Card style={{ width: '18rem' }}>
                {this.state.firstName}
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="First Name" 
                            onChange={this.onChangeFirstName}
                        />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Last Name" 
                            onChange={this.onChangeLastName}
                        />
                    </Form.Group>
                    <Form.Group controlId="company">
                        <Form.Label>Company</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Company"
                            onChange={this.onChangeCompany}
                        />
                    </Form.Group>
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

                    <Form.Group controlId="password2">
                        <Form.Label>Password Again</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password Again"
                            onChange={this.onChangePassword2}
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