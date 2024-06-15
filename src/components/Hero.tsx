export default function Hero() {
  return (
    <section className="container my-16 ">
      <h1 className="text-4xl bold text-center">Find your next dream job</h1>
      <p className="text-center text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat
        animi numquam obcaecati sit labore consectetur dolorum dolor,
      </p>
      <form className="flex gap-2 mt-4 max-w-md mx-auto">
        <input
          type="search"
          className="border w-full px-3 py-2 rounded-md border-gray-500 outline-none"
          placeholder="Search phrase.."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
