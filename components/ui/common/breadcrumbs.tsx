export const Breadcrumbs = () => (
  <nav aria-label="breadcrumb" className="flex flex-row-reverse pb-4 px-4 sm:px-6 lg:px-8">
    <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
      <li className="pr-4 font-medium text-gray-500 hover:text-gray-900">
        <a href="#">Buy</a>
      </li>
      <li className="px-4 font-medium text-gray-500 hover:text-gray-900">
        <a href="#">My Courses</a>
      </li>
      <li className="px-4 font-medium text-gray-500 hover:text-gray-900">
        <a href="#">Manage Courses</a>
      </li>
    </ol>
  </nav>
);
