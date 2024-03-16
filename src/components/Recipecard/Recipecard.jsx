import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";


const Recipecard = ({recipecard}) => {
    console.log(recipecard);
  
    return (
        <div className=" md:w-2/3 ">
            <div className="card max-w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMHN0aXIlMjBmcnl8ZW58MHx8MHx8fDA%3D" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start">
                    <h2 className="card-title">Spaghetti Bolognese</h2>
                    <p>Classic Italian pasta dish with savory meat sauce.</p>
                    <div>
                        <h4>Ingredients: 6</h4>
                        <ul>
                            <li>gfgfg</li>
                        </ul>
                    </div>
                    <div className="flex md:gap-24 gap-14">
                        <div className="flex items-center gap-1">
                            <CiClock2></CiClock2>
                            <span>30 minutes</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <RiFireLine></RiFireLine>
                            <span>30 minutes</span>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#0BE58A] rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipecard.propTypes = {
    recipecard: PropTypes.array
}

export default Recipecard;