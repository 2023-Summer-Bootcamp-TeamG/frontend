import { RouterProvider } from 'react-router-dom';

import routers from './utils/router';

function App() {
  return (
    <div className=" bg-custom-grey h-screen">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
