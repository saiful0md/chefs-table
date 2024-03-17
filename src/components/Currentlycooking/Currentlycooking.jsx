
import PropTypes from 'prop-types';
import CurrentlyCookingCard from '../CurrentlyCookingCard/CurrentlyCookingCard';
const Currentlycooking = ({ currentlyCooking ,totalCalories,totalPreparationTime}) => {

    return (
        <div>
            <h2 className="text-2xl font-lexend font-bold text-center my-6 border-b border-[#28282826] pb-3">Currently cooking: {currentlyCooking.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                </table>
                {
                    currentlyCooking.map((currentlyCookingCard, index) => (
                        <CurrentlyCookingCard
                            currentlyCookingCard={currentlyCookingCard}
                            index={index}
                            key={index}
                            currentlyCooking={currentlyCooking}
                            totalCalories={totalCalories}
                            totalPreparationTime={totalPreparationTime}
                        ></CurrentlyCookingCard>))
                }
            </div>
        </div>
    );
};

Currentlycooking.propTypes = {
    currentlyCooking: PropTypes.array,
    totalPreparationTime: PropTypes.number,
    totalCalories: PropTypes.number
}

export default Currentlycooking;