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
  
    // template +=
    //   '<div href="/addCompany" class="addR btn btn-primary"> <button>Add company</button></div>';
  
    $.each(company.database, function(index) {
      db = company.database;
      id = db[index];
    //   console.log(id);
  
      template += '<div class="card" style="width: 18rem;">';
      template +=
        '<img class="card-img-top" src="' + id.jobImage + '"></img>';
      template += '<div class="card-body">';
      template += '<h3 class="card-title">' + id.jobName + "</h3>";
      template += '<p  class="card-text">' + id.jobWebsite + "</p>";
      template +='<h5 class="fas fa-map-marker-alt">' + id.jobLocation + "</h5><br>";
      template +='<div id="hide">'
      template += '<button class="del btn btn-primary">Delete</button>';
      template += '<button class="update btn btn-primary">Edit Detials</button>';
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
  