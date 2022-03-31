import Sidebar from "../components/Sidebar";

export default function Base({ children }) {
  return (
    <div className="w-full max-w-3xl lg:max-w-4xl mx-auto">
      {/* <Sidebar className="py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64" /> */}

      <main className="flex-1 border-r border-l ml-20 md:ml-64 min-h-screen">
        <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
          <div className="text-xl font-bold" v-text="route.name">
            ola
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
