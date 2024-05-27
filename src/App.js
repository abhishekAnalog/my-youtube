import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <div>
        <Header/>
        <Body/>
      </div>
      </Provider>
    </div>
  );
}

export default App;
