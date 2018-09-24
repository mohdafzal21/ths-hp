(function start() {
  this.runFuntion = function() {
    alert("hey");
  };
})();
challenges = [];
challenges.runFunction = function() {
  alert("hey");
};
challenges.database = {};
const loadAssets = function() {
  $.getJSON("/api/challenges/", function(data) {//id._id/
    challenges.database = data;
    challenges.init();
  });
};

challenges.init = function() {
  challenges.del();
  challenges.upd();
  challenges.addR();
  challenges.start();
  challenges.generateMarkup();
};

// challenges.task= function(){
//   $('.start').on('click', function(e){
//     e.preventDefault();
//     url = "/api/challenges/" + id._id;
//     $.post({
//       url : url,
//       method : "POST"
//     })
//     window.location='/startTest';
//   })
// }

challenges.start = function() {
  $(".datadiv").on("click", function() {
    
       let number = $(this).data("id");
      //  console.log(number);
       window.location = '/startTask/' + number;
  });
};

challenges.addR = function() {
  $(".addR").on("click", function() {
    $("#addR").show();
    window.location = "/addChallenges" ;
  });
};


challenges.del = function() {
  $(".del").on("click", function() {
    //  console.log(id._id);
    url = "/api/challenges/" + id._id;
    //  console.log(url);
    $.post({
      url: url,
      method: "DELETE"
    });
    window.location = "/challenges";
  });
};

challenges.upd = function() {
  $(".update").on("click", function(e) {
    e.preventDefault();
    $("#addr2").show();
    $("#addr2").submit(function(e) {
      e.preventDefault();
      //    console.log(id._id);
      $.post({
        url: "/api/challenges/" + id._id,
        type: "PUT",
        data: {
          companyName: $("#id1").val(),
          positon: $("#id2").val(),
          contestType: $("#id3").val()
        }
      });
      window.location = "/challenges";
    });
  });
};

challenges.generateMarkup = function() {
  var template = "";

  template +=
    '<div href="/addChallenges" class="addR btn btn-primary">Add challenges</div>';

  $.each(challenges.database, function(index) {
    db = challenges.database;
    id = db[index];
    console.log(id);
    template +=  '<div class="dataDiv" data-id ="'+id._id+'">'
    template += '<div class="card" style="width: 18rem;">';
    template += '<p>'+id._id+ '</p>'
    template +='<img class="card-img-top" src="' + id.companyImage + '"></img>';
    template += '<div class="card-body">';
    template += '<h3 class="card-title">' + id.companyName + "</h3>";
    template += '<p  class="card-text">' + id.position +"  <b>" + id.contestType+'</b></p>';
    template += '<h5 class="fas fa-map-marker-alt">' + id.jobAddress + "</h5><br>";
    template += '<button class="start btn btn-primary">Start</button>';
    template += '<button class="del btn btn-primary">delete</button>';
    template += '<button class="update btn btn-primary">update</button>';
    template += "</div>";
    template += "</div>";
    template += "</div>";
  });
  $(".content").append(template);
  challenges.del();
  challenges.upd();
  challenges.addR();
  challenges.start();
};

loadAssets();
