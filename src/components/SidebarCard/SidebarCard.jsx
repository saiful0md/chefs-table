
import PropTypes from 'prop-types';
const SidebarCard = ({ sidebarCard }) => {
    const { recipe_name, preparing_time, calories, id } = sidebarCard
    return (
        <div className='flex bg-base-200 mb-5 rounded-lg items-center'>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>{id}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time} minutes</td>
                            <td>{calories} calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
        </div>
    );
};

SidebarCard.propTypes = {
    sidebarCard: PropTypes.object
}
export default SidebarCard;