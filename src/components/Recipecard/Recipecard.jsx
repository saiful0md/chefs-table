import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";


const Recipecard = ({ recipecard, handleWantToCook }) => {
    const { recipe_img, recipe_name, short_description, ingredients, preparing_time, calories } = recipecard;
    return (
        <div className=" md:max-w-[784px] ">
            <div className="card w-full h-[800px] bg-base-100 shadow-xl gap-6">
                <figure className="px-10 pt-10">
                    <img src={recipe_img} alt={`Cover image of the title ${recipe_name}`} className="rounded-xl" />
                </figure>
                <div className="card-body items-start gap-5">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='flex-grow-0 border-b pb-4'>{short_description}</p>
                    <div>
                        <h4>Ingredients: 6</h4>
                        <ul className='space-y-2 p-6'>
                            {
                                ingredients.map((ingredient, index) => <li className='list-disc' key={index}>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex md:gap-24 gap-14">
                        <div className="flex items-center gap-1">
                            <CiClock2></CiClock2>
                            <span>{preparing_time} minutes</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <RiFireLine></RiFireLine>
                            <span>{calories} Calories</span>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button
                            onClick={() => handleWantToCook(recipecard)}
                            className="btn bg-[#0BE58A] rounded-3xl"
                        >Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipecard.propTypes = {
    recipecard: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
}

export default Recipecard;