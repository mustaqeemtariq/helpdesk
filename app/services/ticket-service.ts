import { cache } from 'react'

import axios from '@/services/axios'

const getAllTickets = (): Promise<Ticket[]> => {
	return axios.get('/tickets').then(response => response.data)
}

const getTicketById = cache((id: string): Promise<Ticket> => {
	return axios.get(`/tickets/${id}`).then(response => response.data)
})

const ticketService = {
	getAllTickets,
	getTicketById
}

export default ticketService
