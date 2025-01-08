export default function SearchBar() {
  return (
    <input
      placeholder="search for 'Flat Tyre'"
      id="searchbar"
      type="text"
      className="bg-white bg-opacity-65 border-[0.5px] border-gray-100 rounded-md flex w-full text-lg py-2 px-6 text-center text-secondary backdrop-blur-2xl focus:outline-none placeholder:text-gray-400"
    />
  );
}
