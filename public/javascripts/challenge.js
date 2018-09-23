challenge = {};
challenge.database = [];

challenge.loadAssests= function(){
    $.getJSON('/challenge/', function(data){
        challenge.database = data;
        console.log(data);
        challenge.init();
    });
};

challenge.init = function(){
    challenge.generateMarkup();
};

challenge.generateMarkup = function (){
    var template = '';
    $.each(challenge.database, function(index){
        var db=challenge.database;
        var id = db[index];
        console.log(id);

        template += '<h4>'+id.companyName+'</h4>'; 



    })
    $('.content').append(template);
}
challenge.loadAssests();