import React from "react";

class Portfolio extends React.Component{

    render(){
        return(
            <div className="header-wrapper">
                <div className="main-info">
                    <h2>Here are some Youtube links to a few of my portfolio projects. You can also access the code on
                        my Github.</h2>
                    <br></br>
                    <a href="https://powerpill.herokuapp.com" className="btn-extlink" target="_blank" rel="noreferrer">Powerpill</a>
                    <a href="https://youtu.be/nX1EyzE3tzY" className="btn-extlink" target="_blank" rel="noreferrer">Know Soft Char Builder (Youtube)</a>
                    <a href="https://github.com/Carlj0666" className="btn-extlink" target="_blank" rel="noreferrer">Github</a>
                </div>

            </div>
        )
    }
}

export default Portfolio;