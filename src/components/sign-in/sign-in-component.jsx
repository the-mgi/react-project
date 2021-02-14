import React from 'react';
import './sign-in.styles.scss';
import {Component} from "react/cjs/react.production.min";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (eventData) => {
        eventData.preventDefault();
    };

    handleChange = (eventData) => {
        const {value, name} = eventData.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        id='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        type="password"
                        id='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>

                        <CustomButton type='submit'
                                      isGoogleSignIn={true}
                                      onClick={signInWithGoogle}
                        >Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInComponent;
