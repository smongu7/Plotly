
// syntax to retrieve data from external data file (instead of web API)
d3.json("samples.json").then(function(data){
    console.log(data);
});

//to extract wfreq and put into new array:
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// to sort wfreq array in descending order:

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// to delete null values:
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// WITH FOLLOWING CODE, CAN DISPLAY METADATA OF ANY INDIVIDUAL
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    console.log(data);
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}

// initialize dashboard
init();

function optionChanged(newSample) {
  //console.log(newSample);
  buildMetadata(newSample);
  buildCharts(newSample);
  }

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
  
    PANEL.html("");
    //Object.entries(result).forEach(([key, value]) => {
    PANEL.append("h6").text(result.location);
  });
}