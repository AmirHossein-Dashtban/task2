import './page-container.css';

export default function PageContainer({ children }) {
    return <div className="main-container">
        {children}
    </div>
}