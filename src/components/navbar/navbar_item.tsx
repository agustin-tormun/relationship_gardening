import Link from "next/link"
import styles from '../../styles/navbar/navbar_item.module.css'

interface NavItemProps {
	text: string
	href: string
	active: boolean
}

const NavItem: React.FC<NavItemProps> = ({text, href, active}) => {
	return (
		<Link href={href} className={styles.nav_item}>
			<p className={`${active ? "active" : ""}`}>
				{text}
			</p>
		</Link>
	)
}

export default NavItem