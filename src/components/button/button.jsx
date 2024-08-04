
import './button.css';

export default function Button({ text, icon, type }) {
    return <button type={type} aria-label='button' className="button-card">
        {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
        {text}
    </button>
}