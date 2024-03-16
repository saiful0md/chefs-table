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
        <div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    recipeCards.map((recipeCard, index) => <Recipecard
                        key={index}
                        recipecard={recipeCard}
                        handleWantToCook={handleWantToCook}
                    ></Recipecard>)
                }
            </div>
        </div>
    );
};

RecipeCards.propTypes = {
    handleWantToCook: PropTypes.func
}
export default RecipeCards;