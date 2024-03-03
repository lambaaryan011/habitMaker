import React from "react";
import style from "./ShowHabits.module.css";
export default function ShowHabits({ show, deleteit }) {
  let showTask;
  if (show.length !== 0) {
    showTask = show.map((task, index) => (
      <tr className={style.row} key={index}>
        <td className={style.data}>{task.what}</td>
        <td className={style.data}>{task.where}</td>
        <td className={style.data}>{task.why}</td>
        <td className={style.data}>{task.date}</td>
        <td className={style.data}>
          <button onClick={() => deleteit(index)} className={style.btn}>Delete</button>
        </td>
      </tr>
    ));
  } else {
    showTask = (
      <tr className={style.row}>
        <h1 className={style.nodata}>You Have No Tasks</h1>
      </tr>
    );
  }
  return (
    <div>
      <table>{showTask}</table>
    </div>
  );
}