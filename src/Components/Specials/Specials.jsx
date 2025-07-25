import { useLoaderData } from "react-router-dom";



const Specials = () => {
    const specials = useLoaderData();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-amber-600 mb-4">Special's menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    specials.map(special => (
                        <div key={special.idMeal} className="card p-4 bg-orange-50 border border-orange-200 shadow-md shadow-orange-100 hover:bg-orange-100 hover:scale-105 transition duration-300">
                            <img src={special.strMealThumb} className="w-full h-32 object-cover rounded-t-lg" />
                            <h2 className="text-orange-700 font-bold mt-2">{special.strMeal}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Specials;