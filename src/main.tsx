import ReactDOM from 'react-dom/client'
import '~/assets/css/common.css'
import { BrowserRouter } from 'react-router-dom'
import App from '~/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
)
