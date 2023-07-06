import ReactDOM from 'react-dom/client'
import '~/assets/css/common.css'
import { BrowserRouter } from 'react-router-dom'
import App from '~/router'
import 'md-editor-rt/lib/style.css'
import './utils/flexible'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
)
