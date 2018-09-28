const db = require('../models');

module.exports = {
    loggedIn : function (req,res,next){
         if(req.isAuthenticated()){
             return next;
         }
         else{
             req.flash("u have to be logged in to continue!")
            res.redirect('/login');
         }
         
    }
};
