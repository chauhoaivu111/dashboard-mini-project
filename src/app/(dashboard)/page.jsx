"use client";
import { Context } from "../components/AuthProvider";


export default function defaultDashboard() {
const {user} = Context();
  return (
    <div style={{marginLeft:"60px"}}>  
    {user}
    </div>
  );
}
