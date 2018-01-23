import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Box extends React.Component{
	render(){
		return(<div>hello</div>
			)
	}

}

class Grid extends React.Component{
	render(){
		const width = this.props.cols * 14;
		var rowsArr = [];
		var boxClass = "";
		for(var i = 0; i < this.props.rows; i++){
			for(var j = 0; j < this.props.cols; j++){
				let boxId = i + "_" + j;
				boxClass = this.props.gridBool[i][j] ? "Box on" : "Box off";
				rowsArr.push(
					<Box 
						boxClass = {boxClass}
						key = {boxId}
						row = {i}
						col = {j}
						//selectBox {this.props.selectBox}

					/>
					)
			}
		}
		return(
			<div className = "grid" style = {{width : width}}>
				{rowsArr}
			</div>
		);
	}
}

class Main extends React.Component{
	constructor(){
		super();
		this.speed = 100;
		this.rows = 50;
		this.cols = 40;
		this.state = {
			generation: 0,
			gridBool: Array(this.rows).fill(Array(this.colss).fill(false))﻿
		}
	}
	render(){
		return(
			<Grid
				gridBool={this.state.gridBool}
				rows = {this.rows}
				cols = {this.cols}
				//selectBox = {this.selectBox}
			/>

			);

	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
