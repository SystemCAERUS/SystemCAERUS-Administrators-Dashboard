import React from "react";

import "./msg.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Msg(props) {
  const history = useHistory();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/hr/${id}`);
      history.push("/");
      history.push("/hr");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="msgBox">
      <tr className="tr">
        <td className="date">
          <div className="divDate">{props.date.substring(0, 10)}</div>
        </td>
        <td className="msg">
          <div className="message">{props.message}</div>
        </td>
        <td className="updateSection">
          <button className="update">
            <Link
              to={`/hr/update/${props.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Update
            </Link>
          </button>
        </td>
        <td className="deleteSection">
          <button className="delete" onClick={() => handleDelete(props.id)}>
            DELETE
          </button>
        </td>
      </tr>
    </div>
  );
}

export default Msg;
