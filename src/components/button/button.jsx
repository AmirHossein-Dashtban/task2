import { Link } from 'react-router-dom';
import './button.css';

export default function Button({ text, icon, type, link = null }) {
	return link !== null ? (
		<Link style={{ width: '100%' }} to={link}>
			<button type={type} aria-label="button" className="button-card">
				{icon && <span style={{ marginRight: 8 }}>{icon}</span>}
				{text}
			</button>
		</Link>
	) : (
		<button type={type} aria-label="button" className="button-card">
			{icon && <span style={{ marginRight: 8 }}>{icon}</span>}
			{text}
		</button>
	);
}
