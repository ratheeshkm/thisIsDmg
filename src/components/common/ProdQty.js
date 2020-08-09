import React from 'react';

const ProdQty = () => {
  const handleChange = (event) => {
    return event.target.value;
  };
  return (
    <div className="input-group">
      <input
        type="button"
        value="-"
        className="button-minus"
        data-field="quantity"
        onChange={handleChange}
      />
      <input
        type="number"
        step="1"
        max=""
        value="1"
        name="quantity"
        className="quantity-field"
        onChange={handleChange}
      />
      <input
        type="button"
        value="+"
        className="button-plus"
        data-field="quantity"
        onChange={handleChange}
      />
    </div>
  );
};

export default ProdQty;
