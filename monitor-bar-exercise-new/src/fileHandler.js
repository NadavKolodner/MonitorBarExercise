import React, { PureComponent, useState } from 'react';
import CSVReader from 'react-csv-reader'
import ChartComp from './ChartComp.js'
var chartData;

function FileHandler(props){
    const [uploadedState, setUploadedState] = useState(false);
    const [uploadData, setUploadData] = useState([]);
    const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header =>
      header
        .toLowerCase()
    }

    function handleClick(){
        var staticChartData = uploadData;
        var tempChartData = []
        for (var i = 0; i < staticChartData.length; i++){
            var x = staticChartData[i].time*1000;
            var y = staticChartData[i].price;
            tempChartData.push({x,y});
        }
        chartData = tempChartData;
        setUploadedState(true)
    }

    function UploadComp(props){
        return(
            <div><CSVReader
                cssClass="csv-reader-input"
                label="Select CSV"
                onFileLoaded={data => setUploadData(data)}
                onError={console.log("error")}
                parserOptions={papaparseOptions}
                inputId="MyInput"
                inputStyle={{color: 'red'}}/>
                <button onClick={handleClick}>Click me</button></div>
        );
        }
    
    return (
        <div>
            {uploadedState ? <ChartComp data={chartData}/> : <UploadComp/>}
        </div>
    )
}

export default FileHandler;