import './input.css'

export default function Input({ title, name, type, placeHolder, icon }) {
    return <div className='input-card'>
        <div className='main-section'>
            <label>{title}</label>
            <input name={name} type={type} placeholder={placeHolder ? placeHolder : ''} />
        </div>
        {
            icon &&
            <div className='input-icon'>{icon}</div>
        }
    </div>
};