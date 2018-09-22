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
        
        template += '<div>';
        template += '<h5>"'+id.companyName+'"</h5>';

    
    template += '</div>';
})
  $('.content').append(template);
}

challenges.loadAssests();