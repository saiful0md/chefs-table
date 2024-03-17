import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipecard from '../Recipecard/Recipecard';

const RecipeCards = ({handleWantToCook}) => {
    const [recipeCards, setRecipeCards] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setRecipeCards(data))
    }, [])
    return (
            <div className='md:w-[700px] grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2'>
                {
                    recipeCards.map((recipeCard, index) => <Recipecard
                        key={index}
                        recipecard={recipeCard}
                        handleWantToCook={handleWantToCook}
                    ></Recipecard>)
                }
            </div>
    );
};

RecipeCards.propTypes = {
    handleWantToCook: PropTypes.func
}
export default RecipeCards;