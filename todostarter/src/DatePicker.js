import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function DatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    
      <DatePicker
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling
      />

      
    
  );
}

export default DatePicker;