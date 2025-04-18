import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { router } from './router/router';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
