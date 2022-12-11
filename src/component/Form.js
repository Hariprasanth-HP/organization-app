import { filledInputClasses } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import Body from "./Body";
const Form = () => {
  const [details, setDetails] = useState([]);
  const [clicked, setClicked] = useState(false);
  const initialvalue = {
    PO_number: "",
    PO_date: "",
    Buyer_GLN: "",
    Buyer_contact: "",
    Supplier_GLN: "",
    Supplier_contact: "",
    ShiptoGLN: "",
    Shiptocontact: "",
    S_NO: "",
    Item_name: "",
    GTIN: "",
    Article_no: "",
    Quantiy: "",
    Price: "",
    AmountToPay: "",
  };
  const [track, setTrack] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  console.log("contactnumber", contactnumber);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("dasa.json");
      const response = await data.json();
      setDetails(response.Details);
      setTrack(response.Details[0].address);
      // setContactnumber(response.Details[0].contact);
    };
    fetchdata();
  }, []);
  useEffect(() => {
    const fetchcontact = async () => {
      const cont = await details.filter((fil) => {
        if (fil.address === track) {
          return fil;
        }
      });
      console.log("cont", cont);
      setContactnumber(cont[0].contact);
    };
    fetchcontact();
  }, [track]);

  const [formData, setFormData] = useState(initialvalue);
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const inp = e.target.value;
    setFormData({ ...formData, [e.target.name]: inp });
  };
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(formData);
    setFormData(initialvalue);
    setClicked(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          color: "black",
        }}
      >
        <>
          <div>
            <label>PO Number</label>
            <input
              value={formData.PO_number}
              onChange={(e) => handleChange(e)}
              placeholder="PO number"
              type="text"
              name="PO_number"
              className="input"
              required
            />
            <label>PO Date</label>
            <input
              value={formData.PO_date}
              onChange={(e) => handleChange(e)}
              placeholder="PO Date"
              className="input"
              type="text"
              name="PO_date"
              required
            />
          </div>

          <div>
            <label>Buyer GLN</label>
            <select value={track} onChange={(e) => setTrack(e.target.value)}>
              {details.map((add) => {
                return <option key={add.contact}>{add.address}</option>;
              })}
            </select>

            <label>Buyer Contact</label>

            <input
              value={contactnumber}
              placeholder="Buyer_contact"
              type="text"
              className="input"
              name="Buyer_contact"
              required
            />
          </div>
          <div>
            <label>Buyer Contact</label>

            <input
              value={formData.Supplier_GLN}
              onChange={handleChange}
              placeholder="Supplier_GLN"
              type="text"
              className="input"
              name="Supplier_GLN"
              required
            />
            <label>Buyer Contact</label>

            <input
              value={formData.Supplier_contact}
              onChange={handleChange}
              placeholder="Supplier_contact"
              type="text"
              className="input"
              name="Supplier_contact"
              required
            />
          </div>
          <div>
            <label>Ship to GLN</label>

            <input
              value={formData.ShiptoGLN}
              onChange={handleChange}
              placeholder="ShiptoGLN"
              type="text"
              className="input"
              name="ShiptoGLN"
              required
            />
            <label>Ship to contact</label>

            <input
              value={formData.Shiptocontact}
              onChange={handleChange}
              placeholder="Shiptocontact"
              type="text"
              className="input"
              name="Shiptocontact"
              required
            />
          </div>

          <thead>
            <tr>
              <th
                style={{
                  paddingRight: "50px",
                  width: "160px",
                  border: "1px solid black",
                }}
              >
                S.NO
              </th>
              <th
                style={{
                  paddingRight: "50px",
                  width: "160px",
                  border: "1px solid black",
                }}
              >
                Item Name
              </th>
              <th
                style={{
                  paddingRight: "50px",
                  width: "160px",
                  border: "1px solid black",
                }}
              >
                GTIN
              </th>
              <th
                style={{
                  paddingRight: "50px",
                  width: "160px",
                  border: "1px solid black",
                }}
              >
                Article Number
              </th>
              <th
                style={{
                  paddingRight: "50px",
                  width: "160px",
                  border: "1px solid black",
                }}
              >
                Quantity
              </th>
              <th
                style={{
                  width: "160px",
                  paddingRight: "160px",
                  border: "1px solid black",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <div>
            {clicked && (
              <Body formData={formData} handleChange={handleChange} />
            )}
            <button style={{ width: "20%" }} onClick={() => setClicked(true)}>
              Add row
            </button>

            <button type="submit" style={{ width: "20%" }}>
              Start Generation
            </button>
          </div>
        </>
      </form>
      <h2>{Object.entries(state).PO_number}</h2>
      <div
        style={{
          border: "2px solid black",
          width: "50%",
          height: "40vh",
          overflow: "auto",
        }}
      >
        {Object.entries(state).map(([key, val]) => {
          console.log("key", key, val);
          return (
            <h6 key={key} style={{ color: "black" }}>
              {key}:{val}
            </h6>
          );
        })}
      </div>
    </>
  );
};

export default Form;