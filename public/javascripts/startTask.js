console.log(challenges);
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
   
    $.getJSON('/api/challenges/', function(data) {
       
      challenges.database = data;
      challenges.init();
    });
        // showpage(number) ;
        // console.log(number);

  };
  
  challenges.init = function() {
    // challenges.del();
    // challenges.upd();
    // challenges.addR();
    // challenges.start();
    challenges.generateMarkup();
  };
  // task.timer = function(){

  //   var deadline =  new Date("oct 3, 2018 12:00:00").getTime();
  
  //   var x = setInterval(function() {
    
  //   var now = new Date().getTime();
  //   var t = deadline - now;
  //   var days = Math.floor(t / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  //   var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((t % (1000 * 60)) / 1000);
  //   document.getElementById("day").innerHTML =days ;
  //   document.getElementById("hour").innerHTML =hours;
  //   document.getElementById("minute").innerHTML = minutes; 
  //   document.getElementById("second").innerHTML =seconds; 
  //   if (t < 0) {
  //       clearInterval(x);
  //       document.getElementById("demo").innerHTML = "TIME UP";
  //       document.getElementById("day").innerHTML ='0';
  //       document.getElementById("hour").innerHTML ='0';
  //       document.getElementById("minute").innerHTML ='0' ; 
  //       document.getElementById("second").innerHTML = '0'; }
  //   }, 1000);
    
  // }
  /// challenges.task= function(){
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
  
  // challenges.start = function() {
  //   $(".start").on("click", function(e) {
  //     e.preventDefault();
  //        console.log(id._id);
  //        window.location = '/api/challenges/' + id._id;
  //   });
  // };
  
  // challenges.addR = function() {
  //   $(".addR").on("click", function() {
  //     $("#addR").show();
  //     window.location = "/addChallenges" ;
  //   });
  // };
  
  
  // challenges.del = function() {
  //   $(".del").on("click", function() {
  //     //  console.log(id._id);
  //     url = "/api/challenges/" + id._id;
  //     //  console.log(url);
  //     $.post({
  //       url: url,
  //       method: "DELETE"
  //     });
  //     window.location = "/challenges";
  //   });
  // };
  
  // challenges.upd = function() {
  //   $(".update").on("click", function(e) {
  //     e.preventDefault();
  //     $("#addr2").show();
  //     $("#addr2").submit(function(e) {
  //       e.preventDefault();
  //       //    console.log(id._id);
  //       $.post({
  //         url: "/api/challenges/" + id._id,
  //         type: "PUT",
  //         data: {
  //           companyName: $("#id1").val(),
  //           positon: $("#id2").val(),
  //           contestType: $("#id3").val()
  //         }
  //       });
  //       window.location = "/challenges";
  //     });
  //   });
  // };
  
  challenges.generateMarkup = function() {
    var template = "";
      id = challenges.database
    // template +=
    //   '<div href="/addChallenges" class="addR btn btn-primary">Add challenges</div>';
  
    // $.each(challenges.database, function(index) {
      // db = challenges.database;
      // id = db[index];
      // console.log(id);
      // template +=  '<div class="dataDiv" data-id ="'+id._id+'">'
      // template += '<div class="card" style="width: 18rem;">';

      
      template += '<div class="card mb-3">'
      template += '<img class="card-img-top" src="' + id.companyImage + '" alt="Card image cap"></div>' 
      template += '<div class="all">'   
      template += '<a href="/task" class="taskBtn btn btn-primary">Start</a>';
      template += '<h5 class="name">' + id.companyName+'</h5> ';
      template += '<h5 class="card-text">' + id.position +"  <b>" + id.contestType+'</b></h5>';
      template += '<div class="dateAndTime">'
      template += '<h5 class = "startTime">Start Time ' + id.startTime + "</h5>";
      template += '<h5 class ="endTime">End Time ' + id.endTime + "</h5>";
      template += '<h5 class ="startDate">Start Date ' + id.StartDate + "</h5>";
      template += '<h5 class ="endDate">End Date' + id.endDate + '</h5></div>';

      template += '<h5 class="fas fa-map-marker-alt">   ' + id.jobAddress + "</h5>";
     
      // template += '<button class="del btn btn-primary">delete</button>';
      // template += '<button class="update btn btn-primary">update</button>';
      template += '</div>'
      template += '</div>'
    
    $(".content").append(template);
    // challenges.del();
    // challenges.upd();
    // challenges.addR();
    // challenges.start();
  
}
   
  loadAssets();
  