company = {};
company.database = []

 company.loadAssests = function(){

$.getJSON('/api/company/',function(data){
    
     company.database =data;
    company.init();
    
});

};

company.init = function(){
    company.generateMarkup();
};

//build html markup
company.generateMarkup = function(){
    var template = '';
    
    $.each(company.database,function(index){
        var db = company.database;
        var id = db[index];
        console.log(id);
        template += '<div class="Item">';
        template += '<div class="CN">';
        template += '<h5>"'+id.jobName+'"</h5>';
        template += '</div>';
        template += '<div class="Web">';
        template += '<h5>"'+id.jobWebsite+'"</h5>';
        template += '</div>';
        template += '<div class="Ln">';
        template += '<h5>"'+id.jobLocation+'"</h5>';
        template += '</div>';
        template += '<div class="left">';
        template += '<img src= "'+ id.jobImage +'">';
        template += '</div>';

    
    template += '</div>';
})
  $('.content').append(template);
}

company.loadAssests();