import React from "react";

const Greeting = () => {
  const name = "Bharvi"; 
  const currentDate = new Date().toDateString(); // Get the current date

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today's date is: {currentDate}</p>
    </div>
  );
};

export default Greeting;
