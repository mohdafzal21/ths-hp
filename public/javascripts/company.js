company = {};
company.database = []

 company.loadAssests = function(){

$.getJSON('/api/company/',function(data){
    
     company.database =data;
    //  company.database();
    company.init();
    
});

};

company.init = function(){
    company.btn();

    company.generateMarkup();
};
// on click

company.btn= function(){
    $('.btn').on("click",function(e){
        e.preventDefault();
        console.log("clicked");
        // console.log(id._id);
        url = "/" + id._id 
        console.log(url);
        $.post({
            url: url,
            method: "DELETE"
        })
         window.location = '/company'
         
       
    });
}

//build html markup
company.generateMarkup = function(){
    var template = '';
    
    $.each(company.database,function(index){
        var db = company.database;
        var id = db[index];
        console.log(id);
        template+= '<div class="card" style="width: 18rem;">';
        template += '<img class="card-img-top" src="'+id.jobImage+'"></img>';
        template += '<div class="card-body">';
        template += '<h3 class="card-title">'+id.jobName+'</h3>';
        template += '<p  class="card-text">'+id.jobWebsite+'</p>';
        template += '<h5 class="fas fa-map-marker-alt">'+id.jobLocation+'</h5><br>'; 
        template += '<p  class="btn btn-primary">Edit Details</p>'; 
        template += '<p class="btn btn-primary">Delet</p>'; 
        template += '</div>';
        template += '</div>';
})

$('.content').append(template);
company.btn();
}

company.loadAssests();