'Use strict';
class Admin{

    index(req,res){
        res.render("layouts/index",{
            title: "Dashboard"
        });
    };
}

module.exports = new Admin();