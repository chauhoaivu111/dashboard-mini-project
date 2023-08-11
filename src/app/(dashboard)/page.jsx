"use client";
import { useContext } from "react";
import { Context } from "../components/AuthProvider";
import ToggleTheme from "../components/ToggleTheme";



export default function defaultDashboard() {
const {user} = Context();
  return (
    <>  
    {user}
    </>
  );
}
