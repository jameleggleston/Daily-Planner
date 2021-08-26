// This will display current day in the header

$("#currentday").text(moment().format("dddd, mmmm Do, YYYY"));

const container = $(".container");

// This will add all the rows to the schedule container element

const addHours = () => {
    for (let i =0; i < 9; i++){
        const nextRow = $("<div>");
        nextRow.attr("class", "row");
        container.append(nextRow);

        const nextHour = $("<div>")
    }

 // Set text for each textarea block from local storage if it's there, and leave it blank if not

 // need to Add save a button icon to each save button

} 

// Check the current time and apply styling to textarea elements based on whether they are past, present, or future

// Create all elements on page load

// need to add a event listener to each save button in order to set local storage