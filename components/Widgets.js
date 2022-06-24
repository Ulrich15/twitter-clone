import { SearchIcon } from "@heroicons/react/outline";

export default function Widgets() {
  return (
    <div className="xl:w-[600px]  hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky bg-white top-0 py-1.5 z-50">
        <div className="flex items-center p-3 bg-gray-200 rounded-full relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            type="text"
            className="absolute inset-0 rounded-full pl-11 border-gray-500 focus:shadow-lg focus:bg-white bg-gray-100 text-gray-700"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  );
}