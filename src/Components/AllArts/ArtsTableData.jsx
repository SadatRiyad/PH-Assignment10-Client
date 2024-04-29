/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ArtsTableData = ({ arts, idx }) => {
    const { image, item_name, price, rating, stockStatus, subcategory_Name, userName, _id } = arts;

    return (
        <tr>
            <td>
                <div className="flex items-center gap-6">
                    <p>{idx + 1}</p>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item_name}</div>
                        <div className="text-xs opacity-50">Published by: <span className="font-bold">{userName}</span></div>
                    </div>
                </div>
            </td>
            <td>
                {subcategory_Name}
                <br />
                <span className="badge badge-error text-white bg-red badge-sm">{stockStatus}</span>
            </td>
            <td>
                {rating} out of 5.0
                <br />
                <span className="font-bold">${price}  USD</span>
            </td>
            <th>
                <Link to={`/craftItemDetails/id/${_id}`} className="btn btn-ghost bg-red text-white btn-sm hover:bg-transparent hover:border-red hover:text-red">View Details</Link>
            </th>
        </tr>
    );
};

export default ArtsTableData;