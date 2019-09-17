import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha'
class Captcha extends Component {
    constructor(props, context) {
        super(props, context); 
    }
    componentDidMount() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }
    onLoadRecaptcha = () =>{
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }
    verifyCallback = (recaptchaToken) => {
        this.props.input.onChange(recaptchaToken)
    }
    expiredCallback =(recaptchaToken) =>{
        this.props.input.onChange(recaptchaToken)
    }
    render() {
        return (
            <div>
                <Recaptcha
                    ref={(el) => { this.captchaDemo = el; }}
                    size="normal"
                    render="explicit"
                    sitekey={process.env.REACT_APP_SITEKEY}
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                    expiredCallback={this.expiredCallback}
                />
            </div>
        );
    };
};
export default Captcha;