var development = {
    env: global.process.env.APP_NODE_ENV || 'development',
    //conString: global.process.env.APP_POSTGRES_PATH || "postgres://caixauser:PlanetaCaixa1979@poupeoplaneta.csusfpg7wrxs.sa-east-1.rds.amazonaws.com/incentivolotericas",
    
    useHttps: false,
    httpPort: process.env.PORT || 8000,
    httpHost: global.process.env.APP_HTTP_HOST || 'localhost',
   
    //Colocar true para facilitar o desenvolvimento com o nodemon
    //Quando true, modifica a logica do autenticador.js para 
    //logar automaticamente com os dados do defaultUserData
    //disableAuthentication: false,
    //defaultUserData: {
    //    id: 4667,
    //    cnpj: "15839377000106",
    //    codCaixa: "110222954",
    //    nome: "WALLASSE MOREIRA E CIA LTDA",
    //    tipo: 'LOTERICA'
    //}
};

var production = {
    env: global.process.env.APP_NODE_ENV || 'production',
   conString: global.process.env.APP_POSTGRES_PATH || "postgres://caixauser:PlanetaCaixa1979@poupeoplaneta.csusfpg7wrxs.sa-east-1.rds.amazonaws.com/incentivolotericas",
    
    useHttps: false,
    httpPort: process.env.PORT || 8000,
    httpHost: global.process.env.APP_HTTP_HOST || '127.0.0.1',
   
    //Colocar true para facilitar o desenvolvimento com o nodemon
    //Quando true, modifica a logica do autenticador.js para 
    //logar automaticamente com os dados do defaultUserData
    //disableAuthentication: false,
    //defaultUserData: {
    //    idusuario: 1,
    //    cnpj: "17.429.072/0001-51",
    //    codCaixa: "123456789"
    //}
};

module.exports = global.process.env.APP_NODE_ENV === 'production' ? production : development;