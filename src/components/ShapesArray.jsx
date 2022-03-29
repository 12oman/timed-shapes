import React from "react";
import ConsoleLog from "./ConsoleLog";
import Shape from "./Shape";

const ShapesArray = ({ colors, amount }) => {
    return (
        <div className="shapes-array" style={
            {
                
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                margin: "0 auto",
                justifyContent: "center",
                alighnItems: "middle",
                backgroundColor: "#c0ffee",
                color: "#facade",
                height: "27vh",
                width: "100vw",
            }
        }>
            {Array(amount).fill().map((_, i) => {
                return (
                    <>
                    
                    <Shape
                        key={i}
                        color={colors}
                        size={Math.random() * 50}
                    />
                    <ConsoleLog props={amount} />
                    </>

                )
            })}
        <h2>{"<ShapesArray />"}</h2></div> 
    );
};

export default ShapesArray;