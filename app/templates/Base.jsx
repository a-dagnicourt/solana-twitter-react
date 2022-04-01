import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { toCapitalize } from '../utils/'

export default function Base({ children }) {
  const router = useRouter()
  const [routeName, setRouteName] = useState()

  useEffect(() => {
    setRouteName(toCapitalize(router.pathname))
    if (router.pathname === '/') setRouteName('Home')
    if (router.pathname === '/404') setRouteName('NotFound')
  }, [router.pathname])

  console.log(router.pathname)
  return (
    <div className="mx-auto w-full max-w-3xl lg:max-w-4xl">
      <Sidebar />

      <main className="ml-20 min-h-screen flex-1 border-r border-l md:ml-64">
        <header className="flex items-center justify-between space-x-6 border-b px-8 py-4">
          <div className="text-xl font-bold">{routeName}</div>
        </header>
        {children}
      </main>
    </div>
  )
}
