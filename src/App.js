import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Toaster /> */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
