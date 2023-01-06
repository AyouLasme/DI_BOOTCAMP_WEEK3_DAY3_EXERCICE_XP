/**
 * @author: LASME Ayou Emeline
 * @param {*} e 
 */

function allowDrop(e) {
    e.preventDefault();
 
}

function drag(e) {
 
    // Add the target element's id to the data transfer object
    e.dataTransfer.setData("text", e.target.id);
 
}
 

 
function drop(e) {
    //CASE 1: Single drop effect is defined for this drop location
        e.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        let data = e.dataTransfer.getData("text");
 
        e.target.appendChild(document.getElementById(data));
}