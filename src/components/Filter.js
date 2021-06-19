import React from "react";

const Filter = (props) => {
  const { changeSort, sortBy, brand, changeBrand } = props;
  return (
    <div className="filter">
      <h2>Filter</h2>
      <div>
        <label style={{ paddingRight: "100px" }}>
          Order By
          <select
            style={{ marginLeft: "10px" }}
            value={sortBy}
            onChange={(e) => changeSort(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Lowest">Lowest to Highest</option>
            <option value="Highest">Highest to Lowest</option>
          </select>
        </label>
        <label>
          Brand
          <select
            style={{ marginLeft: "10px" }}
            value={brand}
            onChange={(e) => changeBrand(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Adidas">Adidas</option>
            <option value="Nike">Nike</option>
            <option value="Puma">Puma</option>
            <option value="Lux">Lux</option>
            <option value="Biba">Biba</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;
