import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
export default function CollapsedCard() {
  const toolsData = useSelector((state) => state?.tools?.items);
  console.log("toolsData", toolsData);
  return (
    <div className=" h-fit flex flex-row flex-wrap gap-6 items-center mt-9 mb-20 mr-5">
      {toolsData?.map((obj) => (
        <Card data={obj} />
      ))}

      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}
