(function start() {
    this.runFuntion = function() {
      alert("hey");
    };
  })();
  company = [];
  company.runFunction = function() {
    alert("hey");
  };
  company.database = {};
  const loadAssets = function() {
    $.getJSON("/api/company/", function(data) {
      company.database = data;
      company.init();
    });
  };
  

  company.init = function() {
    company.del();
    company.upd();
    company.addR();
    company.generateMarkup();
  };
  
  company.addR = function() {
    $(".addR").on("click", function() {
      $("#addR").show();
      window.location = "/addCompany";
    });
  };
  
  company.del = function() {
    $(".del").on("click", function() {
      //  console.log(id._id);
      url = "/api/company/" + id._id;
      //  console.log(url);
      $.post({
        url: url,
        method: "DELETE"
      });
      window.location = "/company";
    });
  };
  
  company.upd = function() {
    $(".update").on("click", function(e) {
      e.preventDefault();
      $("#addr2").show();
      $("#addr2").submit(function(e) {
        e.preventDefault();
        //    console.log(id._id);
        $.post({
          url: "/api/company/" + id._id,
          type: "PUT",
          data: {
            jobName: $("#id1").val(),
            jobWebsite: $("#id2").val(),
            jobLocation: $("#id3").val()
          }
        });
        window.location = "/company";
      });
    });
  };
  
  company.generateMarkup = function() {
    var template = "";
  
    template += '<div href="/addChallenges" class="addR btn btn-outline-dark">Add company</button></div>';
  
    $.each(company.database, function(index) {
      db = company.database;
      id = db[index];
    //   console.log(id);
  
      template += '<div class="cards" style="width: 18rem;">';
      template += '<img class="card-img-top" src="' + id.jobImage + '"></img>';
      template += '<div class="card-body">';
      template += '<h3 class="card-title">' + id.jobName + "</h3>";
      template += '<p  class="card-text">' + id.jobWebsite + "</p>";
      template += '<h5 class="fas fa-map-marker-alt">' + id.jobLocation + "</h5><br>";
      template += '<button class="update btn btn-outline-info">Edit Detials</button>';
      template += '<button class="del btn btn-outline-danger"">Delete</button>';

      template += "</div>";

      template += "</div>";

      template += "</div>";

      // template+= '<div class ="button btn btn-primary"><a href ="/addCompany">Add Company</a></button>'
      // template+= "</div>"
    });
    $(".content").append(template);
    company.del();
    company.upd();
    company.addR();
  };
  // on click
  
  loadAssets();
  