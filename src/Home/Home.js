import React, { useEffect, useState } from "react";
import "./Home.css";
import audio from "../audio/music-1.mp3";
import Search from "../Components/Search";

// music start
let allMusic = [
  {
    name: "Harley Bird - Home",
    song: "entertainment"
  },
  {
    name: "Ikson Anywhere – Ikson",
    song: "entertainment"
  },
  {
    name: "Beauz & Jvna - Crazy",
    song: "entertainment"
  },
  {
    name: "Hardwind - Want Me",
    song: "educational"
  },
  {
    name: "Jim - Sun Goes Down",
    song: "educational"
  },
];
//  To get the data from localStorage
const getLocalItems = () => {
  let list = localStorage.getItem("key");
  // console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("key"));
  } else {
    return [];
  }
};
const Home = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItemClick, setEditItemClick] = useState(null);
  // const [filteSong, setFilterSong] = useState("");

  const changValue = (event) => {
    setInputData(event.target.value);
  };

  const addItem = () => {
    if (!inputData) {
      alert("Input Box is Empty! ");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === editItemClick) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setInputData("");
      setToggleSubmit(true);
      setEditItemClick(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItem = items.filter((element) => {
      return index !== element.id;
    });
    setItems(updatedItem);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setInputData(newEditItem.name);
    setToggleSubmit(false);
    setEditItemClick(id);
  };

  const removeAll = () => {
    setItems([]);
  };
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(items));
  }, [items]);

  //   Add Data to Local Storage


  const clickChangeSong  = (e)=>{
    // setFilterSong(e.target.getAttribute("data"));
    console.log(e.target.getAttribute("data"))
  };
  return (
    <>

      <Search
        addI={addItem}
        togglesubmit={toggleSubmit}
        inputdata={inputData}
        changedata={changValue}
      ></Search>
      <div className="music_bucket">
        <div className="filter_music">
        <div className="entertainment_videos music_videos" onClick={clickChangeSong} data = "Entertainment">Entertainment Videos</div>
        <div className="education_videos music_videos"  onClick={clickChangeSong} data = "Educational">Education Videos</div>
        </div>
        <div className="search_music">
          <input type="text" placeholder="Search Music"/>
          <i className="fa fa-search" ></i>
        </div>
      </div>
      <div className="history">
        <div className="history_icon" title="History">
        <i className="fa fa-history" aria-hidden="true"></i>
        </div>
      </div>
      <div className="show_items">
      {allMusic.map((value,index) => {
       
          return (
   
            <div className="eachItems" key={index}>
            
            
              <h3>{value.name.length>12?value.name.substring(0,13)+"...":value.name}</h3>
              <div className="todo_btn">
              
                <i
                  className="far fa-edit"
                  title="edit"
                  onClick={() => editItem(value.id)}
                ></i>
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => deleteItem(value.id)}
                ></i>
              </div>
              <p>auto</p>
              <div className="music_card">
                <img src={`https://picsum.photos/10${index}`} alt="" />
                <div className="music_play_details">
                  <audio src={audio} type="audio/mp3" controls></audio>
                </div>
              </div>
            </div>
        );
        })}
        {items.map((value,index) => {
          return (
            <div className="eachItems" key={value.id}>
            <h3>{value.name.length>12?value.name.substring(0,13)+"...":value.name}</h3>
              <div className="todo_btn">
                <i
                  className="far fa-edit"
                  title="edit"
                  onClick={() => editItem(value.id)}
                ></i>
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => deleteItem(value.id)}
                ></i>
              </div>
              <p>added</p>
              <div className="music_card">
              <img src={`https://picsum.photos/2${index}0`} alt="" />
           
                <div className="music_play_details">
                  <audio src={audio} type="audio/mp3" controls></audio>
                </div>
              </div>
            </div>
          );
        })}
        <div className="show_btn">
          <button className="btn" onClick={removeAll}>
            CHECK LIST
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
