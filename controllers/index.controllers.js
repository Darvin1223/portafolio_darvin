

class Index {
    home(req,res){
        res.render("index", {
            layout:false
        });
    };
    login(req,res){
        res.render("login",{
            layout: false
        })
    }
}

module.exports = new Index();