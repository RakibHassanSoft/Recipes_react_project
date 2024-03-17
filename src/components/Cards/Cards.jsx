import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ datas ,handleList}) => {
    // console.log(datas)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-auto">
          {datas.map((data) => (
            <Card key={data.recipe_id} data={data} handleList={handleList}></Card>
          ))}
          {/* <Card></Card> */}
        </div>
      );
      
};
Cards.propTypes = {
    datas: PropTypes.array.isRequired,
    handleList: PropTypes.func,
  };
  
export default Cards;