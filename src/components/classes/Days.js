import React from "react";

export default function Days(props) {
  const { theDays } = props;
  let arr;
  let newStr;
  if (theDays.indexOf(",") > -1) {
    arr = theDays.split(",");
    newStr = "";
    arr.map((day, index) => {
      if (index < arr.length - 1) {
        newStr += day + ", ";
      } else {
        newStr += day;
      }
    });
  }
  if (theDays.indexOf("-") > -1) {
    newStr = ''
    console.log("hit:", theDays);
    arr = theDays.split("-");
    arr.map((day, index) => {
      if (index < arr.length - 1) {
        newStr += day   + ' - '

      } else {
        newStr += day
      }
    });

    return newStr;
  }
  return <div style={{ display: "inline" }}>{newStr || theDays}</div>;
}
