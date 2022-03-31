import Sidebar from "../components/Sidebar";

export default function Base() {
  return (
    <div class="w-full max-w-3xl lg:max-w-4xl mx-auto">
      <Sidebar class="py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64" />

      <main class="flex-1 border-r border-l ml-20 md:ml-64 min-h-screen">
        <header class="flex space-x-6 items-center justify-between px-8 py-4 border-b">
          <div class="text-xl font-bold" v-text="route.name"></div>
        </header>
        {/* {children} */}
      </main>
    </div>
  );
}
