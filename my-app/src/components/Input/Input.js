import React, {Component} from 'react';

export class Input extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   value: 'Please write an essay about your favorite DOM element.'
        };

    render() {
        return (
            <div>
                <label>{props.label}</label>
                <input
                    type='text'
                    name=''
                />
            </div>
        )
    }
}

<Input label="nombre" />