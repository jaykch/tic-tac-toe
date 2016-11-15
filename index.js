/**
 * Created by Jay on 11/14/2016.
 */
$(document).ready(function(){
    var subject = new selector("#x-selector");
    subject.$id.click(function(){
        console.log("clicked");
    });
});

function log (){
    console.log(arguments);
}

var selector = function (id){
    this.$id = $(id);
};





