import React from "react";
import Component from "./TaskContainer.module.css";
export default function TaskContainer({ children }) {
  return (<div className={Component.Parent}>
    {children}
    </div>);
}