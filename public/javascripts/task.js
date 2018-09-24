


(function start() {
    this.runFuntion = function() {
      alert("hey");
    };
  })();
  task = [];
  task.runFunction = function() {
    alert("hey");
  };
  task.database = {};
  const loadAssets = function() {
    $.getJSON("/api/task/", function(data) {
      task.database = data;
      task.init();
    });
  };
  
  task.init = function() {
    task.del();
    task.upd();
    task.addR();
    task.upl();
    task.timer();
    task.quz();
    task.generateMarkup();
  };
  
  task.addR = function() {
    $(".addR").on("click", function() {
      $("#addR").show();
      window.location = "/addtask";
    });
  };
  
  task.del = function() {
    $(".del").on("click", function() {
      //  console.log(id._id);
      url = "/api/task/" + id._id;
      //  console.log(url);
      $.post({
        url: url,
        method: "DELETE"
      });
      window.location = "/task";
    });
  };
  
  task.upd = function() {
    $(".update").on("click", function(e) {
      e.preventDefault();
      $("#addr2").show();
      $("#addr2").submit(function(e) {
        e.preventDefault();
        //    console.log(id._id);
        $.post({
          url: "/api/task/" + id._id,
          type: "PUT",
          data: {
            task: $("#id1").val(),
                      }
        });
        window.location = "/task";
      });
    });
  };
  task.upl = function (){
    $(".upl").on("click",function(){
      window.location ="/api/task/test/"
    })
  }

  task.quz=function(){
    $(".quz").on("click",function(){
      window.location ="/quiz"
    })
  }
  task.timer = function(){

  var deadline = new Date("sep 27, 2018 15:37:25").getTime();

  var x = setInterval(function() {
  
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML =days ;
  document.getElementById("hour").innerHTML =hours;
  document.getElementById("minute").innerHTML = minutes; 
  document.getElementById("second").innerHTML =seconds; 
  if (t < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "TIME UP";
      document.getElementById("day").innerHTML ='0';
      document.getElementById("hour").innerHTML ='0';
      document.getElementById("minute").innerHTML ='0' ; 
      document.getElementById("second").innerHTML = '0'; }
  }, 1000);
  
}
  task.generateMarkup = function() {
    var template = "";
   
    $.each(task.database, function(index) {
      db = task.database;
      id = db[index];
    //   console.log(id);

  
     
      template += '<textarea id="code-screen">' + id.task + "</textarea>";
      template += '<button class="update btn btn-primary">Add Task</button>';
      template += '<button class="del btn btn-primary">Delete</button>';
      template += '<button class="update btn btn-primary">Edit Detials</button>';
      template += '<button class="upl btn btn-primary">Upload Your File</button>';
      template += '<button class="quz btn btn-primary">Quiz</button>';
      
      
    });
    

    $(".content").append(template);
    task.del();
    task.upd();
    task.addR();
    task.upl();
    task.quz();
    // $("#demo").append(deadline);
    // task.timer();
  };
  // on click
  
  window.onload = task.timer();
  
  loadAssets();
  
  
  
  