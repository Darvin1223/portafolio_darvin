

class Index {

    // This methodt render the view of home == Index
    home(req,res){
        res.render("index", {
            layout:false,
            title: "Portafolio - Darvin Rodriguez"
        });
    };

    // This render the view of login 
    login(req,res){
        res.render("login",{
            layout: false
        })
    }
}

module.exports = new Index();