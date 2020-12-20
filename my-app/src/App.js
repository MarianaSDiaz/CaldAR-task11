import React, {Component} from 'react';
import './App.css';
import Companies from './Mocks/Companies.json';
import Form from './components/Form/Form';
//import CompanyList from './components/CompanyList/CompanyList';
import Company from './components/Company/Company';



class App extends Component {
  state = { 
    Companies,
    isEditing: false,
    companyToEdit:{},
  }

  AddCompany = ({id, nameCompany, cuit, email, phone, fiscalAddress, boilers}) =>{
    const newCompany = {
      id,
      nameCompany,
      cuit,
      email,
      phone,
      fiscalAddress,
      boilers
    }
    this.setState({ Companies: [...this.state.Companies, newCompany]})
  }

  editCompany = (company) => {
    this.setState({
      Companies: this.state.Companies.map(element => {
        if(element.id === company.id) {
          element.id = company.id
          element.firstName = company.firstName
          element.lastName = company.lastName
          element.email = company.email
          element.boilersTypeId = company.boilersTypeId
          element.professionalLevel = company.professionalLevel
          element.hourRate = company.hourRate
          element.monthlyCapacity = company.monthlyCapacity
        }
      return element;
      }),
      companyToEdit: {},
      isEditing: false
    })
  };

  deletecompany = (id) => {
    this.setState({Companies: [...this.state.Companies.filter(company => company.id !== id)]})
  }

  handleEdit = (company) => {
    this.setState({
      isEditing: !this.state.isEditing,
      companyToEdit: company,
    })
  }
  render() {
    return (
      <div className="App">
        <Form />
        <Company />
      </div>
    );
  }
}
export default App;
