import PropTypes from 'prop-types';
import SidebarCard from '../SidebarCard/SidebarCard';
const SideBar = ({sidebar}) => {
    return (
             <div>
                <h2 className="text-2xl font-lexend font-bold text-center my-6 border-b border-[#28282826] pb-3">Want to cook: {sidebar.length}</h2>
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
                </div>
                {
                    sidebar.map((sidebarCard, index) => <SidebarCard className="space-y-5" sidebarCard={sidebarCard} key={index}></SidebarCard>)
                }
            </div>
    );
};
SideBar.propTypes = {
    sidebar: PropTypes.array.isRequired,
}
export default SideBar;