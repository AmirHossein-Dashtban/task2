import './input.css'

export default function Input({ title, name, type, placeHolder, icon, className, onChange, onBlur, value }) {
    return <div className={'input-card ' + (className ? className : "")}>
        <div className='main-section'>
            <label>{title}</label>
            <input name={name} type={type} placeholder={placeHolder ? placeHolder : ''} onChange={onChange} onBlur={onBlur} value={value} />
        </div>
        {
            icon &&
            <div className='input-icon'>{icon}</div>
        }
    </div>
};