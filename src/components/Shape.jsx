import React from "react";
import ConsoleLog from './ConsoleLog'

class Shape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            size: this.props.size,
            // pick a random speed between 10 and 2000
            speed: Math.floor(Math.random() * 3000) + 30,
            rotation: Math.floor(Math.random() * 360),
        }
    }

    componentDidMount() {

        this.timerID = setInterval(

            // randomly choose to shrink or grow,
            // and then call the appropriate function

            () => {
                // rotate the shape
                this.rotate();
                // if the shape is too big for the window, shrink it
                if (this.state.size > window.innerWidth / 5 ) {
                    this.shrink();
                } 
                    
                if (Math.random() > 0.50) {
                    this.grow();
                } else {
                    this.shrink();
                }
                // if th shape is too small, grow it
                if (this.state.size < 5) {
                    this.grow();
                }
            },
            this.state.speed
        ); 


        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    shrink() {
        this.setState({
            size: this.state.size / 1.618 / 1.618,
            speed: this.state.speed * 1.618,
        });
    }

    grow() {
        this.setState({
            size: this.state.size * 1.618,
            speed: this.state.speed / 1.618 * 1.618,
        });
    }

    rotate() {
        this.setState({
            // rotate the shape faster
            // if this.state.rotation is greater than 360,
            // set it back to 0
            rotation: this.state.rotation + Math.floor(Math.random() * 10) + 1,
            // rotation: this.state.rotation * this.state.speed / 1000,
        });
    }

    render() {
        return (

        <div style={{
            textAlign: "center",
            fontSize: this.state.size / 3 + "px",
            // space the shapes out evenly
            margin: "0 auto",
            padding: "10px",
            height: Math.floor(this.state.size) * 2 + "px",
            width: Math.floor(this.state.size) * 2 + "px",
            // rotate the shapes counter-clockwise
            transform: `rotate(${this.state.rotation}deg)`,
            // pick a random color from the style object
            backgroundColor: this.state.color[Math.floor(Math.random() * this.state.color.length)],
            // color the text
            color: this.state.color[Math.floor(Math.random() * this.state.color.length)],
            borderRadius: Math.floor(Math.random() * 82),
        }} ><h3>{"<Shape />"}</h3> </div>
        
    );
};
}

export default Shape;
