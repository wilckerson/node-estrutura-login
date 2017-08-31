var express = require('express'),
    load = require('express-load'),
    app = express(),
    cfg = require('./lib/config.js')
;

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

load('models')
.then('controllers')
//.then('routes')
.into(app);

app.listen(cfg.httpPort, function() {
    //var now = new Date();
    var pjson = require('./package.json');
    console.info("###########################################");
    console.info("##          SERVIDOR INICIADO            ##");
    console.info("###########################################");
    console.info('Ambiente: ', cfg.env, ' v', pjson.version);
    console.info('Endereço: ',cfg.httpHost+":"+cfg.httpPort);
    console.info("--------------------------------------------");
});