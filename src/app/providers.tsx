'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
import BaseLayout from '@/components/BaseLayout'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <BaseLayout>{children}</BaseLayout>
    </Provider>
  )
}
