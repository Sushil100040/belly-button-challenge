//place url in a constant variable

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


//Fetch the JSON data and console log it
d3.jason(url).then(function (data) {
    console.log(data);
});

//function to that builds the bar graph

function updateBarChart(sample) {

// use D3 to retrive all of the data
    d3.json(url).then((data)=>{
        let samples = data.samples;
        let result = samples.filter(sampleObj => sampleObj.id==sample)[
            
        ]
    })
}

