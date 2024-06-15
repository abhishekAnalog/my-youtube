import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter = createBrowserRouter([
    {
      element: <Body/>,
      path:'/'
    },
    {
      element:<WatchPage/>,
      path:'/watch'
    }
  ])
  return (
    <div className="App">
      <Provider store={store}>
      <div>
      <Header/>

      <RouterProvider router={appRouter}>

        <Body/>
      </RouterProvider>

      </div>
      </Provider>
    </div>
  );
}

export default App;
