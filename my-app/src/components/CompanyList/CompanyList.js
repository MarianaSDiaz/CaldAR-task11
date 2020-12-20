import React, { Component } from 'react'

export class CompanyList extends Component {
    render() {
        return (
            <div className='box'>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Company name</th>
                        <th>Cuit</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Fiscal Address</th>
                        <th>Boiler</th>
                        <th>Remove</th>
                    </tr>
                    <tr>
                        <td className="id">{this.props.company.id} </td>
                        <td>{ this.props.company.nameCompany}</td>
                        <td>{ this.props.company.cuit}</td>
                        <td>{ this.props.company.email}</td>
                        <td>{ this.props.company.phone}</td>
                        <td>{ this.props.company.fiscalAddress}</td>
                        <td>{ this.props.company.boilers}</td>
                        <button onClick={() => this.props.deleteCompany(this.props.id)} className="X">X</button>
                        <button onClick={() => this.props.handleEdit(this.props.company)}>Edit</button>
                    </tr>
                </table>
            </div>
        );
    }
}
export default CompanyList