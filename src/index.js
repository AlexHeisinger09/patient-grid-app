import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Esta línea es crucial

const root = createRoot(document.getElementById('root'));
root.render(<App />);