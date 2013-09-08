global.GoGame = require('./boot');
GoGame.Application.Controllers = GoGame.Application.Helpers.require_tree(GoGame.Application.root + '/app/controllers');
GoGame.Application.Models = GoGame.Application.Helpers.require_tree(GoGame.Application.root + '/app/models');
GoGame.Application.Routes = require('./routes');

GoGame.Application.main = function() {
  this.app.set('port', process.env.PORT || 3000);
  this.app.set('views', GoGame.Application.root + '/app/views');
  this.app.set('view engine', 'jade');
  this.app.use(express.favicon());
  this.app.use(express.logger('dev'));
  this.app.use(express.bodyParser());
  this.app.use(express.methodOverride());
  this.app.use(this.app.router);
  this.app.use(require('less-middleware')({ src: GoGame.Application.root + '/app/views/stylesheets' }));
  this.app.use(express.static(path.join(GoGame.Application.root + '/public')));

  if ('development' == this.app.get('env')) {
    this.app.use(express.errorHandler());
  }
  //this.app.get('/', Controllers.AppCtrlr.index);
  //this.app.get('/dgs/:gameId', Controllers.DgsCtrlr.game);


  (function(context) {
    http.createServer(context.app).listen(context.app.get('port'), function () {
      console.log('Express server listening on port ' + context.app.get('port'));
    });
  })(this);
};

exports.Application = GoGame.Application;
