exports.GnuGoCtrlr = {
  estimate: function (req, res) {
    var spawn = require('child_process').spawn;
    var gnugo = spawn('gnugo', ['--mode', 'gtp']);
    gnugo.stdout.on('data', function (data) {
      res.send(data.toString('ascii'));
      console.log(data.toString('ascii'));
    });

    gnugo.stderr.on('data', function (data) {
      console.log('error: ', data.toString('ascii'));
    });

    gnugo.stdin.write('boardsize 9\n');
    gnugo.stdin.write('\n');
    gnugo.stdin.write('showboard\n');
    gnugo.stdin.write('play b c 3\n');
    gnugo.stdin.write('showboard\n');
    gnugo.stdin.write('play b c 3\n');
    gnugo.kill();
  },

  play:  function (req, res) {
    res.send(
      'nothing to see, yet\n' +
      'except, perhaps:\n' +
      this
    );
  }
};

