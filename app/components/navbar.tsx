import Image from 'next/image'
import Link from 'next/link'

import { DojoLogo } from '@/assets/icons'

type NavItem = {
	label: string
	link: string
}

interface NavbarProps {
	navItems: NavItem[]
}

export const Navbar = ({ navItems }: NavbarProps) => {
	return (
		<nav>
			<Image src={DojoLogo} alt="Dojo Helpdesk logo" width={70} placeholder="blur" quality={100} />
			<h1>Dojo Helpdesk</h1>
			{navItems.map(item => (
				<Link className="hover:underline" key={item.label} href={item.link}>
					{item.label}
				</Link>
			))}
		</nav>
	)
}
