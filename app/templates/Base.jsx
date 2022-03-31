import Sidebar from '../components/Sidebar'

export default function Base({ children }) {
  return (
    <div className="mx-auto w-full max-w-3xl lg:max-w-4xl">
      <Sidebar />

      <main className="ml-20 min-h-screen flex-1 border-r border-l md:ml-64">
        <header className="flex items-center justify-between space-x-6 border-b px-8 py-4">
          <div className="text-xl font-bold" v-text="route.name">
            ola
          </div>
        </header>
        {children}
      </main>
    </div>
  )
}
