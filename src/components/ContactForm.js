import React from 'react';

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: ''
        }
    }

    onNameChange = (event) =>{
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }

    onSubmitSignIn = () =>{
        fetch('https://aqueous-wave-78765.herokuapp.com/contact', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
            })
        })
            .then(response => response.json())
    }


    render(){
        return (
            <div className="row p-5 container-fluid">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-8">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            onChange={this.onEmailChange}>
                            </input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="name" 
                                className="form-control" 
                                id="name" 
                                placeholder="Full Name"
                                onChange={this.onNameChange}>
                            </input>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={this.onSubmitSignIn}>
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-lg-2">
                </div>
            </div>
        )
    }
}

export default ContactForm;