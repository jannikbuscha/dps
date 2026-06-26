import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Stylesheet order matters: tokens + components first, then the flat-theme
// override (which wins the cascade), then the #root layout shim.
import './styles/fonts.css';
import './styles/app.css';
import './styles/theme-flat.css';
import './styles/icons.css';
import './styles/root.css';
import './styles/redesign.css';

// Note: intentionally NOT wrapped in <React.StrictMode>. The player engine is
// imperative and mounts once; StrictMode's dev double-invoke would build the
// scene DOM twice. (mountPlayer also guards against this, but skipping
// StrictMode keeps the faithful single-mount behaviour obvious.)
createRoot(document.getElementById('root')).render(<App />);
