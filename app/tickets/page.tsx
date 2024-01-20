import clsx from 'clsx'

import ticketService from '@/services/ticket-service'
import Link from 'next/link'

const Tickets = async () => {
	const ticketData = await ticketService.getAllTickets()

	return (
		<main>
			<div>
				<h2>Tickets</h2>
				<p>
					<small>Currently open tickets</small>
				</p>
			</div>
			{ticketData.length > 0 ? (
				ticketData.map(ticket => (
					<div key={ticket.id} className="card my-5">
						<Link href={`/tickets/${ticket.id}`}>
							<h3>{ticket.title}</h3>
							<p className="line-clamp-2 text-ellipsis overflow-hidden">{ticket.body}</p>
							<div className={clsx('pill', ticket.priority)}>{ticket.priority} priority</div>
						</Link>
					</div>
				))
			) : (
				<p className="text-center">There are no open tickets, yay!</p>
			)}
		</main>
	)
}

export default Tickets
