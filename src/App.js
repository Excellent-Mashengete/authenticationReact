import { BrowserRouter as Router } from 'react-router-dom';
import Myroutes from './Myroutes';
import 'rsuite/dist/rsuite.min.css';
import './styles.scss';

function App() {
  return (
    <Router>
      <Myroutes />
    </Router>
  );
}

export default App;
