import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import { HomePage } from '@/pages/home';
import { Spinner } from '@/shared/ui/spinner';
import { View } from '@/shared/ui/view';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <View centered className='h-svh'>
            <Spinner />
          </View>
        }
      >
        <HomePage />
      </Suspense>
    ),
    errorElement: <Navigate to='/' />,
  },
]);
