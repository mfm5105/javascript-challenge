// from data.js
var tableData = data;

//select tbody

tbody=d3.select("tbody")

//utilizing object entries to retrieve key and value data in the table

function displayingData(data){
    tbody.text("")
    data.forEach(function(sighting){
    tr=tbody.append("tr")
    Object.entries(sighting).forEach(function([key,value]){
        td=tr.append("td").text(value)
        })
    })
}
displayingData(tableData)

//grabbing the users input and filter button

var dateInput=d3.select("#datetime")
var button=d3.select("filter-btn")

//filtering data

function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInput.property("value"));
    var newTable=tableData.filter(sighting=>sighting.datetime===dateInput.property("value"))
    displayingData(newTable)
}

//event handler 
dateInput.on("change", clickSelect)