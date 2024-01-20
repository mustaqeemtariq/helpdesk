'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import ticketService from '@/services/ticket-service'

const TicketForm = () => {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const [ticketData, setTicketData] = useState({
		title: '',
		body: '',
		priority: 'low'
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		const payload: Omit<Ticket, 'id'> = { ...ticketData, user_email: 'mario@netninja.dev' }

		ticketService
			.createTicket(payload)
			.then(res => {
				if (res.status === 201) {
					router.refresh()
					router.push('/tickets')
				}
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<form onSubmit={handleSubmit} className="w-1/2 ">
			<label>
				<span>Title:</span>
				<input
					required
					type="text"
					onChange={e => setTicketData(prev => ({ ...prev, title: e.target.value }))}
					value={ticketData.title}
				/>
			</label>
			<label>
				<span>Body:</span>
				<textarea
					required
					onChange={e => setTicketData(prev => ({ ...prev, body: e.target.value }))}
					value={ticketData.body}
				/>
			</label>
			<label>
				<span>Priority:</span>
				<select
					onChange={e => setTicketData(prev => ({ ...prev, priority: e.target.value }))}
					value={ticketData.priority}>
					<option value="low">Low Priority</option>
					<option value="medium">Medium Priority</option>
					<option value="high">High Priority</option>
				</select>
			</label>
			<button className="btn-primary" disabled={isLoading}>
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Ticket</span>}
			</button>
		</form>
	)
}

export default TicketForm
