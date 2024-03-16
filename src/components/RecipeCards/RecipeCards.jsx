import { useEffect, useState } from 'react';

const RecipeCards = () => {
    const [recipeCard, setRecipeCard] = useState([])

    useEffect(() =>{
        fetch('fakedata.json')
        .then(res=> res.json())
        .then(data => setRecipeCard(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default RecipeCards;