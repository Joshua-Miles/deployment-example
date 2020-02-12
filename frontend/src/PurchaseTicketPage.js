import React, { Component } from 'react';
import { NavBar } from './NavBar'
import { TicketContainer } from './TicketContainer'
import { BACKEND_HOST } from './constants';

export class PurchaseTicketPage extends Component {

    state = {
        availableTickets: []
    }

    componentDidMount(){
        fetch(`http://${BACKEND_HOST}/tickets`)
        .then(res => res.json())
        .then(tickets => {
            this.setState({
                availableTickets: tickets
            })
        })
    }

    selectTicket = (selectedTicket) => {
        this.setState({
            availableTickets: this.state.availableTickets.filter( ticket => selectedTicket != ticket)
        })
        this.props.purchaseTicket(selectedTicket)
    }

    render() {
        return (
            <div>
                <NavBar selectPage={this.props.selectPage}/>
                <h1>Purchase Tickets</h1>
                <TicketContainer 
                    selectTicket={this.selectTicket}
                    tickets={this.state.availableTickets} 
                />
            </div>
        );
    }
}