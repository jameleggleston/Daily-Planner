// This will display current day in the header

$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

const container = $(".container");

// This will add all the rows to the schedule container element

const addHours =() => {
    for (let i =0; i < 9; i++){
        const nextRow = $("<div>");
        nextRow.attr("class", "row");
        container.append(nextRow);

        const nextHour = $("<div>");
        nextHour.attr("class", "hour");
        nextHour.text(moment().hour(i + 9).format("hA"));    
   
        // need to Set text for each text area block from local storage if it's there, and leave it blank if not
        let nextText = $("<textarea>");
        nextText.attr("class", "time-block");
        nextText.text(localStorage.getItem(`textArea #${i+1}`) || "");

        let nextSave = $("<button>");
        nextSave.attr("class", "saveBtn");

        nextRow.append(nextHour);
        nextRow.append(nextText);
        nextRow.append(nextSave);

        // need to Add save a button icon to each save button
        let nextIconContainer = $("<i>");
        nextSave.append(nextIconContainer);
        let nextIcon = $("<img>");
        nextIcon.attr({
        src: "/Assets/Save-icon2.png",
        width: "15px",
        height: "15px",
        alt: "Floppy Disk icon"
        });
        nextIconContainer.append(nextIcon);

    }
} 

// Check the current time and apply styling to textarea elements based on whether they are past, present, or future
const checkTime =()=> {
    let rightNow = moment().hour();
    $("textarea").each(function(i) {
        let thisBlockHourValue = parseInt(moment().hour(i + 9).format("H"));
        if (thisBlockHourValue < rightNow) {
            $(this).addClass("past");
        } else if (thisBlockHourValue === rightNow) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}

// Create all elements on page load
addHours();
checkTime();
// need to add a event listener to each save button in order to set local storage
$(".saveBtn").each(function(i) {
    $(this).on("click", function() {
        let thisHourText = $(this).prev();
        localStorage.setItem(`textArea #${i+1}`, thisHourText.val());
    });
});