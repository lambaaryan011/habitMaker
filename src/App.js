import React, { useState } from "react";
import  './App.css';
import HabitInput from "./Components/HabitInput";
import TaskContainer from "./Components/TaskContainer";
import ShowHabits from "./Components/ShowHabits";
export default function App() {
  var temp = [];
  const [showHabits, setShowHabits] = useState([]);
  function addHabitData(habitData) {
    setShowHabits([...showHabits, habitData]);
  }
  function deleteHabit(index) {
    temp = showHabits;
    temp.splice(index, 1);
    setShowHabits([...temp]);
  }
  return (
    <div>
      {/* <h1 className="title"></h1> */}
      <TaskContainer>
        <HabitInput addHabitData={addHabitData} />
        <ShowHabits show={showHabits} deleteit={deleteHabit} />
      </TaskContainer>
    </div>
  );
}

