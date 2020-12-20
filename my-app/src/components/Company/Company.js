import React, { Component } from 'react';
import CompanyList from '../CompanyList/CompanyList';

class Company extends Component {
  render() {
    return this.props.Companies.map(company =>(
       <CompanyList
        key={company.id}
        company={company}
        deleteCompany = {this.props.deleteCompany}
        handleEdit = {this.props.handleEdit}
       />
    )) ;
  }
}

export default Company;