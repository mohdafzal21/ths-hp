challenges = {};
challenges.database = []

 challenges.loadAssests = function(){

$.getJSON('/challenges/',function(data){
    
     challenges.database =data;
    challenges.init();
    
})

};

challenges.init = function(){
    challenges.generateMarkup();
};

//build html markup
challenges.generateMarkup = function(){
    var template = '';
    
    $.each(challenges.database,function(index){
        var db = challenges.database;
        var id = db[index];
        console.log(id);
        
        
        template+= '<div class="card" style="width: 18rem;">';
        template += '<div img class="card-img-top">'+id.companyImage+'</img></div>';
        template += '<div class="card-body">';
        template += '<h3 class="card-title">'+id.companyName+'</h3>';
        template += '<p  class="card-text">'+id.position+'</p>';
        template += '<h4>'+id.jobAddress+'</h4>'; 
        template += '<h4>'+id.startTime+'</h4>';
        template += '<a href="#" class="btn btn-primary">Start</a>'; 
        template += '</div>';
        template += '</div>';
})
  $('.content').append(template);
}

challenges.loadAssests();