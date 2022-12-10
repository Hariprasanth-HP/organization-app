import React from "react";

const Body = ({ formData, handleChange }) => {
  return (
    <div>
      <Row formData={formData} handleChange={handleChange} />
    </div>
  );
};

export default Body;
const Row = ({ formData, handleChange }) => {
  return (
    <tbody>
      <tr>
        <td>
          <input
            style={{
              width: "160px",
            }}
            value={formData.S_NO}
            onChange={handleChange}
            placeholder="S_NO"
            type="text"
            className="input"
            name="S_NO"
            required
          />
        </td>
        <td
          style={{
            width: "160px",
          }}
        >
          <input
            style={{
              width: "160px",
            }}
            value={formData.Item_name}
            onChange={handleChange}
            placeholder="Item_name"
            type="text"
            className="input"
            name="Item_name"
            required
          />
        </td>
        <td
          style={{
            width: "160px",
          }}
        >
          <input
            style={{
              width: "160px",
            }}
            value={formData.GTIN}
            onChange={handleChange}
            placeholder="GTIN"
            type="text"
            className="input"
            name="GTIN"
            required
          />
        </td>
        <td
          style={{
            width: "160px",
          }}
        >
          <input
            style={{
              width: "160px",
            }}
            value={formData.Article_no}
            onChange={handleChange}
            placeholder="Article_no"
            type="text"
            className="input"
            name="Article_no"
            required
          />
        </td>
        <td
          style={{
            width: "160px",
          }}
        >
          <input
            style={{
              width: "160px",
            }}
            value={formData.Quantiy}
            onChange={handleChange}
            placeholder="Quantiy"
            type="text"
            className="input"
            name="Quantiy"
            required
          />
        </td>
        <td
          style={{
            width: "160px",
          }}
        >
          <input
            style={{
              width: "160px",
            }}
            value={formData.Price}
            onChange={handleChange}
            placeholder="Price"
            type="text"
            className="input"
            name="Price"
            required
          />
        </td>
      </tr>
    </tbody>
  );
};
