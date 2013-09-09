/*GoGame.Application.app.get('/', GoGame.Application.Controllers.AppCtrlr.index);*/
/*GoGame.Application.app.get('/dgs/:gameId', GoGame.Application.Controllers.DgsCtrlr.game);*/

(function (context) {
  context.app.get('/', context.Controllers.AppCtrlr.index);
  context.app.get('/dgs/:gameId', context.Controllers.DgsCtrlr.game);
  context.app.get('/gnugo/estimate', context.Controllers.GnuGoCtrlr.estimate);
})(GoGame.Application);


