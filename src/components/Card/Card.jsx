import "./Card.css"
import PropTypes from 'prop-types';

const Card = ({ data ,handleList}) => {
    console.log(data)
    return (
        <div className="">
            <div className="card  w-96 bg-base-100 shadow-2xl pt-8">
                <figure><img className="h-[200px] w-[320px] rounded-xl" src={data.recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">{data.recipe_name}</h2>
                        <p className="text-[#878787]">{data.short_description}</p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-2 pb-4 pt-4">
                        <h1 className="text-xl font-bold">Ingredients: {data.ingredients_number}</h1>
                        <ul className="text-[#878787]">
                            {data.ingredients.map((ingredient, index) => (
                                <li className="flex  items-center gap-1 fira-sans-regular" key={index}><ion-icon name="radio-button-off-outline"></ion-icon>{ingredient}</li>
                            ))}
                            {/* <li className="flex "> <div><img className="asi" src="/icons/full-stop.png" alt="" /></div><h1>500g ground beef</h1></li>
                            <li className="flex "> <div><img className="asi" src="/icons/full-stop.png" alt="" /></div><h1>1 onion, chopped</h1></li>
                            <li className="flex "> <div><img className="asi" src="/icons/full-stop.png" alt="" /></div><h1>2 cloves garlic, minced</h1></li> */}
                        </ul>
                    </div>
                    <hr />
                    <div className="flex flex-row gap-10 pb-4 pt-3">
                        <div className="flex gap-2 items-center">
                            <img src="/icons/Frame.png" alt="" />
                            <p>{data.preparing_time}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/Vector (1).png" alt="" />
                            <p>{data.calories} </p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=> handleList(data)} className="btn bg-[#0BE58A] text-black rounded-full border-0 hover:bg-black hover:text-white">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );


};

Card.propTypes = {
    data: PropTypes.object.isRequired,
    handleList: PropTypes.func,
};

export default Card;