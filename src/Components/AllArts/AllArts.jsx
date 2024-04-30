import ArtsTableData from "./ArtsTableData";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AllArts = () => {
  const { data } = useContext(AuthContext);
  const allArts = data;

  return (
    <div className="mt-36 mx-4 my-12">
      <Helmet>
        <title>All Art & Craft Item | BB-Artistry</title>
      </Helmet>
      <h1 className="text-center text-2xl md:text-4xl mb-10 mt-6 font-extrabold">Total Arts & Craft Items : {allArts.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No. & Image : <span className="pl-4"> </span> Item Name & Published by :</th>
              <th>Subcategory Name & Stock Status :</th>
              <th>Rating & Price :</th>
              <th>View Details Button :</th>
            </tr>
          </thead>
          <tbody>
            {
              allArts.map((arts, idx) => <ArtsTableData
                key={idx}
                arts={arts}
                idx={idx}
              ></ArtsTableData>)
            }
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default AllArts;