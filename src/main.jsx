import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// One flat design system (app.css), the icon set, and the #root layout shim.
import './styles/app.css';
import './styles/icons.css';
import './styles/root.css';

// Note: intentionally NOT wrapped in <React.StrictMode>. The player engine is
// imperative and mounts once; StrictMode's dev double-invoke would build the
// scene DOM twice. (mountPlayer also guards against this, but skipping
// StrictMode keeps the faithful single-mount behaviour obvious.)
createRoot(document.getElementById('root')).render(<App />);
