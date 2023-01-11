import React, { useState } from "react";
const Search = (props) => {
    const [displayNone,setDisplayNone] = useState("block");
    const clickme=()=>{
        if(displayNone==="block"){

            setDisplayNone("none")
        }
        else{
            setDisplayNone("block")
        }
    };
  return (
    <>
      <div className="add_music" title="Add Music">
      {displayNone==="block"?<i className="fa fa-edit" onClick={clickme}></i>:
        <i className="fa fa-plus" onClick={clickme}></i>}
      </div>
      <div className="card_box" style={{display: displayNone}}>
        <figure>
          <img src="https://picsum.photos/500" alt="" />
          <figcaption>Add Edit Music Name</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍️ Add Edit Music..."
            name="items"
            value={props.inputdata}
            onChange={props.changedata}
          />
          {props.togglesubmit ? (
            <i className="fa fa-plus" title="Add Item" onClick={props.addI}></i>
          ) : (
            <i
              className="far fa-edit"
              title="Update Item"
              onClick={props.addI}
            ></i>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
