import { RouterProvider } from 'react-router-dom';

import routers from './utils/router';

function App() {
  return (
    <div className="h-full  bg-custom-grey">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
