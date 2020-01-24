import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ChartComp extends Component {
  		componentDidMount() {
	}
	
	render() {
		var limit = 50000;
		var y = 100;    
		var data = [];
		var dataSeries = {
			type: "line",
			xValueType: "dateTime"
		}
		var dataPoints = this.props.data;
		dataSeries.dataPoints = dataPoints;
		data.push(dataSeries);
		
		const spanStyle = {
			fontSize: '20px', 
			fontWeight: 'bold', 
			backgroundColor: '#d85757',
			padding: '2px 4px',
			color: '#ffffff'
		}
		
		const options = {
			zoomEnabled: true,
			animationEnabled: true,
			title: {
				text: "Price:Time Chart"
			},
			axisY: {
				includeZero: false
			},
			axisX: {
				valueFormatString: "DD MMM YY HH:mm:ss"
			},
			data: data  // random data
		}
				
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}
 
export default ChartComp;