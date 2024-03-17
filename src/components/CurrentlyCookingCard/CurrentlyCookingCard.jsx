import PropTypes from 'prop-types';
const CurrentlyCookingCard = ({ currentlyCookingCard , index}) => {
    const { recipe_name, preparing_time, calories } = currentlyCookingCard;
    
    return (
        <div>
            <div className='max-w-[400px] flex bg-base-200 mb-5 rounded-lg items-center'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{recipe_name}</td>
                                <td>{preparing_time} minutes</td>
                                <td>{calories} calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
CurrentlyCookingCard.propTypes = {
    currentlyCookingCard: PropTypes.object,
    index: PropTypes.number
}
export default CurrentlyCookingCard;