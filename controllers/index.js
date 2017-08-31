module.exports = function (app) {

    app.get('/',function(req,res,next){
        res.render('index');
    });

    app.get('/login',function(req,res,next){
        res.render('login');
    });

    app.get('/signup',function(req,res,next){
        res.render('signup');
    });
};