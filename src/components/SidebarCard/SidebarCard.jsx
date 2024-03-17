
import PropTypes from 'prop-types';
const SidebarCard = ({ sidebarCard, index, handlePreparing }) => {
    const { recipe_name, preparing_time, calories, id } = sidebarCard
    return (
        <div className='max-w-[600px] flex bg-base-200 mb-5 rounded-lg items-center'>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200 font-fira text-sm text-[#878787]">
                            <th>{index + 1}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time} minutes</td>
                            <td>{calories} calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => handlePreparing(sidebarCard ,id)}
                className="px-4 py-1 bg-[#0BE58A] rounded-3xl text-[#150B2B] font-lexend"
            >Preparing</button>
        </div>
    );
};

SidebarCard.propTypes = {
    sidebarCard: PropTypes.object,
    index: PropTypes.number,
    handlePreparing: PropTypes.func
}
export default SidebarCard;