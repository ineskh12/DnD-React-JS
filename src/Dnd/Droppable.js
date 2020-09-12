import React from 'react';
import PropTypes from 'prop-types';


export default  class  Droppable extends React.Component {

    dragover_handler(ev) {
        console.log("dragOver");
        // Change the target element's border to signify a drag over event
        // has occurred
        ev.currentTarget.style.background = "white";
        ev.preventDefault();
    }
    drop_handler(id_grid,ev) {
        console.log("Drop");
        console.log("Drop : "+ev.target.id);
        console.log("id : "+id_grid);
        ev.preventDefault();
        // Get the id of drag source element (that was added to the drag data
        // payload by the dragstart event handler)
        var id = ev.dataTransfer.getData("transfer");

        // Copy the element if the source and destination ids are both "copy"
        if ( (id == 'item3' || id=='item4') && ev.target.id == id_grid) {
            var nodeCopy = document.getElementById(id).cloneNode(true);
            console.log('nodeCopy : '+nodeCopy)
            nodeCopy.id = id;
            ev.target.appendChild(nodeCopy);
        }
    }
/*
    dragexit_handler(ev) {
        ev.currentTarget.style.background = "gray";
    }*/

    render(){


        return(
            <div id={this.props.id} onDrop={(e) => this.drop_handler(this.props.id,e)} onDragOver={this.dragover_handler} style={this.props.style}>

                {this.props.children}




                { console.log('ines style' +this.props.style) }



            </div>

        );


    }
}
Droppable.protoTypes ={
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,


}
