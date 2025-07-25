import { useLoaderData } from "react-router-dom";




const Home = () => {
  const homeItems = useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-amber-600 mb-4">Explore Meal Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homeItems.map(category => (
          <div key={category.idCategory} className="card p-4 bg-orange-50 border border-orange-200 shadow-md shadow-orange-100 hover:bg-orange-100 hover:scale-105 transition duration-300">
            <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-orange-700 font-bold mt-2">{category.strCategory}</h2>
            <p className="text-gray-700 font-medium">{category.strCategoryDescription.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;