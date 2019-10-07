import React from "react";
import MyMenu from "./MyMenu";
import Banner from './Banner'
import '../styles/header.css'

export default function MyHeader() {
  return (
    <div className='my_header'>
      {/* <Banner /> */}
      <MyMenu />
    </div>
  );
}
