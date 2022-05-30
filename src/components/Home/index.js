import React, { Component } from 'react';
import ToDoList from '../ToDoList/index';
import ToDoForm from '../ToDoForm';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.deleteItem = this.deleteItem.bind(this)
    }

    handleNameChange = (e) => {
        this.setState({
            nameText: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            dateValue: e.target.value
        })
    }

    handlePriorityChange = (e) => {
        this.setState({
            priorityValue: e.target.value
        }
        )
    }

    onSubmit = () => {
        this.setState({
            items: [
                ...this.state.items, {
                    'name': this.state.nameText,
                    'date': this.state.dateValue,
                    'priority': this.state.priorityValue
                }
            ]
        })
    }

    deleteItem(name) {
        const filteredItems = this.state.items.filter(item =>
            item.name !== name);
        this.setState({
            items: filteredItems

        })
    }
    onLogout = () => {
        localStorage.removeItem('token-login');
    }

    render() {
        return (
            <div className='container'>
                <ToDoForm
                    taskName={this.handleNameChange}
                    taskDeadline={this.handleDateChange}
                    taskPriority={this.handlePriorityChange}
                    onSubmit={this.onSubmit}
                    onLogout={this.onLogout}
                />
                <div>
                    <h1>List task</h1>
                    {this.state.items.map(item => {
                        return (
                            <ToDoList
                                data={item}
                                deleteItem={this.deleteItem}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}


