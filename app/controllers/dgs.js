exports.DgsCtrlr = {
  game: function (req, res) {
    var sgf_data = '';
    http.get('http://www.dragongoserver.net/sgf.php?gid=' + req.params.gameId, function(client_response) {
      client_response.on('data', function(data) {
        sgf_data += data;
      }).on('error', function(e) {
        console.error(e);
      }).on('end', function () {
        res.send(sgf_data);
      });
    });
  }
};

