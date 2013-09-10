var Game = function (id) {
  var igoban = document.getElementsByTagName('igoban');
  var stones = document.getElementsByTagName('stone');
};

Number.prototype.times = function (func) {
  for (var i=0; i<this; ++i) {
    func();
  }
};

var $igoban1 = $('igoban:first');
var $igoban2 = $('igoban:last');
var stones;
function create_board(el) {
  var $el = $(el),
      table_id = $el.attr('id') || 'igoban-' + Math.random() * Math.pow(2,32),
      table_class = 'igoban ' + $el.attr('class'),
      board = '<div class="igoban" id="' + table_id + '" class="' + table_class + '">',
      board_size = $el.attr('dimension').split('x').map(function (v) {return parseInt(v,10);}),
      stones, i, j;

  function read_stones($el) {
    var s = {};
    $el.find('stone').each(function (i,stone) {
      //s[$(stone).attr('position').split(',').map(function (pos) {
        //return parseInt(pos, 10);
      //})] = $(stone).attr('player');
      s[$(stone).attr('position')] = $(stone).attr('player');
    });
    return s;
  }
  stones = read_stones(el);

  console.info(stones);

  for (i = 1; i <= board_size[0]; ++i) {
    row_id = "row-" + i;
    board += '<div class="left-of-field"></div>';

    for (j = 1; j <= board_size[0]; ++j) {
      board += '<div id="row-' + i + '-col-' + j + '" class="field ';
      //board += i + ' ';
      //board += j;
      if (stones[i + ',' + j]) {
        board += stones[i + ',' + j] + '-stone';
      }
      board += '">';
      board += '</div>';
    }

    board += '<div class="right-of-field"></div>';
  }

  board += '</div>'; //board
  return board;
}

$igoban1.replaceWith(create_board($igoban1));
$igoban2.replaceWith(create_board($igoban2));

