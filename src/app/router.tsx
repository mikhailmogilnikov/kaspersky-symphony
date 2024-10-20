import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { HomePage } from '@/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<>loading...</>}>
        <HomePage />
      </Suspense>
    ),
    errorElement: <p>Такого маршрута не существует</p>,
  },
]);
