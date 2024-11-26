import React from 'react';
import { Provider } from 'react-redux';
import { store } from './React-ReduxApplication(task3)/store/store';
import PostList from './React-ReduxApplication(task3)/components/PostList';
import PostForm from './React-ReduxApplication(task3)/components/PostForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
};

export default App;
