import clsx from 'clsx'

import ticketService from '@/services/ticket-service'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export const generateStaticParams = async () => {
	const tickets = await ticketService.getAllTickets()
	return tickets.map(ticket => ({ id: ticket.id }))
}

export const revalidate = 60

const TicketDetails = async ({ params }: { params: { id: string } }) => {
	const ticketDetail = await ticketService.getTicketById(params.id)

	if (!ticketDetail) {
		notFound()
	}

	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
			</nav>
			<div className="card">
				<h3>{ticketDetail.title}</h3>
				<small>Created by {ticketDetail.user_email}</small>
				<p>{ticketDetail.body}</p>
				<div className={clsx('pill', ticketDetail.priority)}>{ticketDetail.priority} priority</div>
			</div>
		</main>
	)
}

export default TicketDetails
