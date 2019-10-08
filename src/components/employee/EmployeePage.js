import React, { Component } from 'react';
import axios from 'axios';
import {Header} from "semantic-ui-react";
import EmployeeClasses from './EmployeeClasses'
import '../styles/employees.css'

export class EmployeePage extends Component {
    constructor(){
        super();
        this.state = {
            employeeData:[]
        };
    }

    componentDidMount(){
        console.log('hit')
        axios.get(`/api/teammember/${this.props.match.params.id}`).then(res => {
            console.log('res', res.data)
            this.setState({
                employeeData: res.data
            })
        })
    }

    render() {
        const { employeeData } = this.state;
        console.log(employeeData)
        const mappedEmployeeData = employeeData.map(employee => {
            return <div key={employee.user_id}>
                <Header as='h1'>{employee.first_name}</Header>
                <Header as='h2'>{employee.title}</Header>
                <Header as='h4'>{employee.phone_number}</Header>
                <Header as='h4'>{employee.email}</Header>
                <p >{employee.bio}</p>
                <EmployeeClasses userId={employee.user_id} />
            </div>
        })
        return (
            <div className="employee_page">
                Employee Page 
                {mappedEmployeeData}
               
            </div>
        )
    }
}

export default EmployeePage
