(function start() {
    this.runFuntion = function() {
      alert("hey");
    };
  })();
  company2 = [];
  company2.runFunction = function() {
    alert("hey");
  };
  company2.database = {};
  const loadAssets = function() {
    $.getJSON("/api/company/", function(data) {
      company2.database = data;
      company2.init();
     
    });
  };
  company2.init = function() {
    
    company2.generateMarkup();
  };

  company2.generateMarkup = function() {
    var template = "";
  
    // template +=
    //   '<div href="/addCompany2" class="addR btn btn-primary"> <button>Add company2</button></div>';
  
    $.each(company2.database, function(index) {
      db = company2.database;
      id = db[index];
    //   console.log(id);
  
      template += '<div class="card" style="width: 18rem;">';
      template +=
        '<img class="card-img-top" src="' + id.jobImage + '"></img>';
      template += '<div class="card-body">';
      template += '<h3 class="card-title">' + id.jobName + "</h3>";
      template += '<p  class="card-text">' + id.jobWebsite + "</p>";
      template +='<h5 class="fas fa-map-marker-alt">' + id.jobLocation + "</h5><br>";
     template += "</div>";
      template += "</div>";
    
    
    });
    
    $(".content").append(template);
   
  };
  // on click
  
  
  
  loadAssets();
  