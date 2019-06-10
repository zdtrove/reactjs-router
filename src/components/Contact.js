import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked : false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked : isChecked
        })
    }

    render() {
        var { isChecked } = this.state;
        return (
            <div>
                Trang Lien he<br />
                <button type="button" className="btn btn-default" onClick={ () => this.onClick(false) }>Cho phep</button>
                <button type="button" className="btn btn-default" onClick={ () => this.onClick(true) }>Khong cho phep</button>
                <Prompt 
                    when={ isChecked }
                    message={ location => (`Ban chac chac chan muon di den ${ location.pathname }`) }
                />
            </div>
        );
    }
}

export default Contact;
