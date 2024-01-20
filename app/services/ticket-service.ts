import { cache } from 'react'

import axios from '@/services/axios'

const getAllTickets = (): Promise<Ticket[]> => {
	return axios.get('/tickets').then(response => response.data)
}

const getTicketById = cache((id: string): Promise<Ticket> => {
	return axios.get(`/tickets/${id}`).then(response => response.data)
})

const createTicket = (data: Omit<Ticket, 'id'>) => {
	return axios.post('/tickets', data)
}

const ticketService = {
	getAllTickets,
	getTicketById,
	createTicket
}

export default ticketService
