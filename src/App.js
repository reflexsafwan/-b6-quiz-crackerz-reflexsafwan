import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage';
import Graph from './components/Graph';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import Root from './Root/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <HomePage></HomePage>
        },
        {
          path: '/Graph',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Graph></Graph>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        },
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
