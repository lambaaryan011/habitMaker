import React, { useState } from "react";
import style from "./HabitInput.module.css";
export default function HabitInput({ addHabitData }) {
    // Initializes a state variable habitData using useState, which is an object containing properties what, where, why, and date.
  const [habitData, setHabitData] = useState({what:"",where:"",why:"" , date:""});
  function handleChange(e) {
    let temp = {...habitData};
    const {id} = e.target;
    temp = {...temp,[id] : e.target.value};
    setHabitData({...temp});
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(habitData).some((x) => x === "")) {
      alert("Please fill all the fields below before saving");
      return;
    }
    addHabitData(habitData);
    setHabitData({ what: "", where: "", why: "", date: "" });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="     What To Do ?"
          className={style.input}
          id = "what"
          value={habitData.what}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="     Where To Do?"
          className={style.input}
          id="where"
          value={habitData.where}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="     Why To Do?"
          className={style.input}
          id="why"
          value={habitData.why}
          onChange={handleChange}
        />
        <input
          type="date"
          id="date"
          value={habitData.date}
          className={style.input}
          onChange={handleChange}
        />
        <button className={style.savebtn}>Save</button>
      </form>
    </div>
  );
}