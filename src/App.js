
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Registration from './Registration';

function App() {
  return (
   <Provider  store= {store}>
    <Registration />
    </Provider>
  );
}

export default App;
