
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Registration from './Registration';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    
   <Provider  store= {store}>
   <ToastContainer/>
    <Registration />
    </Provider>
    </>
  );
}

export default App;
