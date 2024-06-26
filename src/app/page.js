"use client";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        <a href="/frame1">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
            Dashboard
          </button>
        </a>
        <a href="/frame2">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-300">
            Theme Selector
          </button>
        </a>
      </div>
    </div>
  );
}
