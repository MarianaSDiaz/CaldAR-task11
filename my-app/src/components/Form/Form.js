import React, {Component} from 'react';

export class Form extends Component {
    state = {
        companyName: '',
        cuit: Number,
        email: '',
        phone: Number,
        fiscalAddress: '',
        buildings: [Number]
    }

    onIdChange = (e) => this.setState({ id: e.target.value});
    onNameChange = (e) => this.setState({ companyName: e.target.value });
    onCuitChange = (e) => this.setState({ cuit: e.target.value });
    onEmailChange = (e) => this.setState({ email: e.target.value });
    onPhoneChange = (e) => this.setState({ phone: e.target.value });
    onAddressChange = (e) => this.setState({ fiscalAddress: e.target.value });
    onBuildingsChange = (e) => this.setState({ buildings: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.Form(this.state.title);
        this.setState({ title: ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="number" name="id" placeholder="Id" style={{flex: '10', padding: '5px'}} value={this.state.id} onChange={this.onIdChange} />
                <input type="text" name="companyName" placeholder="Company Name" style={{flex: '10', padding: '5px'}} value={this.state.companyName} onChange={this.onNameChange} />
                <input type="number" name="cuit" placeholder="Cuit..." style={{flex: '10', padding: '5px'}} value={this.state.cuit} onChange={this.onCuitChange} />
                <input type="text" name="email" placeholder="Contact Email" style={{flex: '10', padding: '5px'}} value={this.state.email} onChange={this.onEmailChange} />
                <input type="number" name="phone" placeholder="Phone" style={{flex: '10', padding: '5px'}} value={this.state.phone} onChange={this.onPhoneChange} />
                <input type="text" name="fiscalAddress" placeholder="Fiscal Address" style={{flex: '10', padding: '5px'}} value={this.state.fiscalAddress} onChange={this.onAddressChange} />
                <input type="submit" value="Submit" className="submitbtn" style={{flex: '1'}}/> 
            </form>
        )
    }
}

export default Form