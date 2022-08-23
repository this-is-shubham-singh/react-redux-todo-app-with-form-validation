import React, { useState } from "react";
import { add, remove, removeall } from "../Action/Action";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const list = useSelector((state) => state.Todoreducer.list);
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <div className="item-container">
        <h2>Add Your List Here</h2>
        <div className="action-container">
          <input
            type="text"
            placeholder="Add Items"
            value={inputdata}
            onChange={(event) => setinputdata(event.target.value)}
          />
          <button
            className="addbutton"
            onClick={() => dispatch(add(inputdata), setinputdata(""))}
          >
            +
          </button>
        </div>

        <div className="showitems">
          {list.map((elm) => {
            return (
              <div className="listitem-container" key={elm.id}>
                <p>{elm.data}</p>
                <button
                  className="listbutton"
                  onClick={() => dispatch(remove(elm.id))}
                >
                  -
                </button>
              </div>
            );
          })}
        </div>
        <div className="removealldiv">
          <button
            className="removebutton"
            onClick={() => dispatch(removeall())}
          >
            REMOVE ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
