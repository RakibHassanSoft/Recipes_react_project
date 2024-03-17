import "./List.css"
import PropTypes from 'prop-types';

const List = ({ pandingDatas, submitList, finalData, totalTime, totalCalories }) => {
    // console.log(pandingDatas);
    return (
        <div className="for-boder w-fit  lg:w-2/5  p-6 rounded-xl bg-base-100 shadow-2xl h-5/6 m-auto lg:m-0">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-center mb-3">Want to cook: 01</h1>
                    <hr />
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
                            {pandingDatas && pandingDatas.length > 0 ? (
                                <tbody>
                                    {pandingDatas.map((ingredient, index) => (
                                        <tr className="bg-zinc-50 " key={index}>
                                            <td className="font-bold ">{ingredient[0]}</td>
                                            <td  className="p-1 text-center">{ingredient[1]}</td>
                                            <td  className="p-1 text-center">{ingredient[2]}</td>
                                            <td  className="p-1 text-center">{ingredient[3]}</td>
                                            <td><button onClick={() => submitList(ingredient)} className="btn bg-[#0BE58A] text-black rounded-full border-0 hover:bg-black hover:text-green-400">Preparing</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            ) : (
                                <tbody>
                                    <tr>
                                        <td>No data</td>
                                        <td>No data</td>
                                        <td>No data</td>
                                        <td>No data</td>
                                    </tr>

                                </tbody>
                            )}

                        </table>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-center mb-3">Currently cooking: 02</h1>
                    <hr />
                    <div className="overflow-x-auto mt-4">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th></th>
                                    <th className="p-1 text-center">Name</th>
                                    <th className="p-1 text-center">Time</th>
                                    <th className="p-1 text-center">Calories</th>
                                </tr>
                            </thead>
                            {finalData && finalData.length > 0 ? (
                                <tbody>
                                    {finalData.map((ingredient, index) => (
                                        <tr className="bg-slate-50 " key={index}>
                                            <td className="font-bold p-2" >{ingredient[0]}</td>
                                            <td  className="p-1 text-center">{ingredient[1]}</td>
                                            <td className="p-1 text-center">{ingredient[2]}</td>
                                            <td   className="p-1 text-center">{ingredient[3]}</td>
                                        </tr>
                                        
                                    ))}
                                    <tr >
                                        <td></td>
                                        <td></td>
                                        <td className="font-bold text-center">Total Time = {totalTime} munutes</td>
                                        <td  className="font-bold text-center">Total Calories = {totalCalories} calorie</td>
                                    </tr>
                                </tbody>
                            ) : (
                                <tbody>
                                    <tr>
                                        <td className=" p-2 text-center" >No data</td>
                                        <td className=" p-2 text-center">No data</td>
                                        <td className=" p-2 text-center">No data</td>
                                        <td className=" p-2 text-center">No data</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center">Total Time <br />= 0 min</td>
                                        <td  className="text-center">Total Calories <br />= 0 calories</td>
                                    </tr>
                                    


                                </tbody>
                            )}

                        </table> 
                    </div>
                </div>


            </div>
        </div>
    );
};
List.propTypes = {
    pandingDatas: PropTypes.array.isRequired,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number,
    finalData: PropTypes.array.isRequired,
    submitList: PropTypes.func,
};
export default List;