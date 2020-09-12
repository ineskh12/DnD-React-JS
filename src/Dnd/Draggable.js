import React from 'react';
import PropTypes from 'prop-types';
export default  class  Draggable extends React.Component {



    dragstart_handler(ev) {
        console.log("dragStart");

        // Change the source element's background color to signify drag has started
        ev.currentTarget.style.border = "dashed";
        // Add the id of the drag source element to the drag data payload so
        // it is available when the drop event is fired
        ev.dataTransfer.setData("transfer", ev.target.id);
        // Tell the browser both copy and move are possible
        ev.effectAllowed = "copyMove";
    }

    dragend_handler(ev) {
        console.log("dragEnd");
        // Restore source's border
        ev.target.style.border = "solid black";
        // Remove all of the drag data
        ev.dataTransfer.clearData();
    }
    noAllowDrop = (e) => {

        e.stopPropagation();
    }

    render() {

        return(
            <div id={this.props.id} draggable="true" onDragStart={this.dragstart_handler} onDragOver={this.noAllowDrop} onDragEnd={this.dragend_handler} style={this.props.style}>
                {this.props.children}


            </div>

        );

    }
}

Draggable.protoTypes ={
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,

}

