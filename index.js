// const FlagGenerator = require('flag-generator');
//
// console.log(FlagGenerator('~wow~'));
// console.log(FlagGenerator.buildFlag());

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function randomHex() {
  // return '#'+Math.floor(Math.random()*16777215).toString(16);
  return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var convertHex = function(hex) {
  rgbObject = hexToRgb(hex);
  return 'rgb(' + rgbObject.r + ', ' + rgbObject.g + ', ' + rgbObject.b + ')';
}

// Flag Prototype
var Flag = function(ratio, baseColor, Canton, Divisions) {
// const Flag = (ratio, canton, fly, device, division) => {
    this.ratio = ratio ? ratio : { 'w': 500, 'h': 300 };
    this.baseColor = baseColor ? convertHex(baseColor) : convertHex('#ffffff');
    this.Canton = Canton ? Canton : false;
    this.Divisions = Divisions ? Divisions : false;
}

// Describes a flag's Canton
// Sometimes a canton is legitimately just another flag shoved into the canton.
// Sometimes a canton is a solid color
// Sometimes a canton has a device
// Sometimes a canton has a pattern (like a field on a CoA I guess?)
var Canton = function(embeddedFlag, color, device, pattern) {
  this.embeddedFlag = embeddedFlag ? embeddedFlag : false;
  this.color = color;
  this.device = device;
  this.pattern = pattern;
}

var Division = function(color, direction, offset, size) {
  this.color = convertHex(color);
  this.direction = direction;
  this.offset = offset;
  this.size = size;
}

// Division Generator
function divisionGenerator() {
  // What color should our division be?
  var divisionFillColor = randomHex();
  // Which direction should the division go?
  // Let's call 0 horizontal, 1 vertical, and 2 horizontal from topleft to bottomright.
  var divisionDirection = Math.floor(Math.random() * 3);
  // How big should the division be?
  // Let's standardize some sizes: 15%, 33%, and 50%
  var divisionSizeChoice = Math.floor(Math.random() * 3);
  var divisionSize;
  switch (divisionSizeChoice) {
    case 0:
      divisionSize = .15;
      break;
    case 1:
      divisionSize = .33;
      break;
    case 2:
      divisionSize = .5;
      break;
  }

  // How far should we offset our division across the flag?
  // Let's standardize a little bit: far left, far right, center.
  // Standards are a little different based on whether we're horizontal or
  // vertical.
  //
  // Randomly select a number between 0 and 2 to decide which of the 3
  // positions we'll choose, then set the offsets for vertical and horizontal
  // divisions based on that.
  var divisionPosition = Math.floor(Math.random() * 3);
  var divisionOffset = {};
  // divisionSizeChoice = 2;
  // divisionSize = .5;
  // divisionPosition = 0;
  // divisionDirection = 2;
  if (divisionSizeChoice === 0) { // 15% division width
    switch (divisionPosition) {
      case 0: // Left if vertical, top if horizontal
        if (divisionDirection === 1) {
            console.log('left align a vertical 15% division');
          var divisionOffset = {
            'x': 0,
            'y': 0,
          }
        } else if (divisionDirection === 0) {
            console.log('left align a horizontal 15% division');
          var divisionOffset = {
            'x': 0,
            'y': 0,
          }
        } else if (divisionDirection === 2) { // diagonal
          console.log('top-right align a diagonal 15% division from top left to bottom right');
            var divisionOffset = {
              'x': 250 - 15,
              'y': 0 - 15,
              'x2': 500 * 3,
              'y2': 150 * 5,
            }
        }
        break;
      case 1: // Center of the flag.
        if (divisionDirection === 1) {
          console.log('center a vertical 15% division');
          var divisionOffset = {
            'x': 212.5,
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          console.log('center a horizontal 15% division');
          var divisionOffset = {
            'x': 0,
            'y': ((300 / 2) - ((300 * .15) / 2)),
          }
        } else if (divisionDirection === 2) { // diagonal
            console.log('center a diagonal 15% division from top left to bottom right');
            var divisionOffset = {
                'x': 0,
                'y': 0,
            }
        }
        break;
      case 2: // Right if vertical, bottom if horizontal
        if (divisionDirection === 1) {
          console.log('right align a vertical 15% division');
          var divisionOffset = {
            'x': (500 - (500 * .15)),
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          console.log('bottom align a horizontal 15% division');
          var divisionOffset = {
            'x': 0,
            'y': (300 - (300 * .15)),
          }
        } else if (divisionDirection === 2) {
          console.log('bottom-left align a diagonal 15% division from top left to bottom right');
            var divisionOffset = {
                // 'x': -20,
                // 'y': 320 / 2,
                // 'x2': 520 / 2,
                // 'y2': 320,
              'x': 0 - 15,
              'y': 150 - 15,
              'x2': 250 * 5,
              'y2': 300 * 3,
            }
        }
        break;
    }
  } else if (divisionSizeChoice === 1) {
    switch (divisionPosition) {
      case 0: // Left if vertical, top if horizontal
        if (divisionDirection === 1) {
          var divisionOffset = {
            'x': 0,
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          var divisionOffset = {
            'x': 0,
            'y': 0,
          }
        } else if (divisionDirection === 2) { // diagonal
          console.log('!!top-right align a diagonal 33% division from top left to bottom right');
            // This is so hard to calculate, I can't do it.
            divisionOffset = {
                'x': 250 - 33,
                'y': 0 - 33,
                'x2': 500 * 3,
                'y2': 150 * 5,
            }
        }
        break;
      case 1: // Center of the flag.
        if (divisionDirection === 1) {
          console.log('center a vertical 33% division');
          var divisionOffset = {
            'x': ((500 / 2) - ((500 * .33) / 2)),
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          console.log('center a horizontal 33% division');
          var divisionOffset = {
            'x': 0,
            'y': ((300 / 2) - ((300 * .33) / 2)),
          }
        } else if (divisionDirection === 2) {
            console.log('center a diagonal 33% division from top left to bottom right');
            divisionOffset = {
                'x': 0,
                'y': 0,
            }
        }
        break;
      case 2: // Right if vertical, bottom if horizontal
        if (divisionDirection === 1) {
          console.log('right align a vertical 33% division');
          var divisionOffset = {
            // 'x': 333.3333333333,
            // 'x': -165,
            'x': (500 - (500 * .33)),
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          console.log('bottom align a horizontal 33% division');
          var divisionOffset = {
            'x': 0,
            'y': (300 - (300 * .33)),
          }
        } else if (divisionDirection === 2) {
            console.log('bottom-left align a diagonal 33% division from top left to bottom right');
            divisionOffset = {
                'x': 0 - 33,
                'y': 150 - 33,
                'x2': 250 * 5,
                'y2': 300 * 3,
            }
        }
        break;
    }
  } else if (divisionSizeChoice === 2) {
    switch (divisionPosition) {
      case 0: // Left if vertical, top if horizontal
        if (divisionDirection === 1) {
          console.log('left align a vertical 50% division');
          var divisionOffset = {
            'x': 0,
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          var divisionOffset = {
            'x': 0,
            'y': 0,
          }
        } else if (divisionDirection === 2) {
          console.log('top-right align a diagonal 50% division from top left to bottom right');
          divisionOffset = {
            // 'x': (500 / 2) - ((500 - 300) * .5) - (((500 - 300) * .5) / 2.15), // I did this without thinking and I can't figure out why it's perfect.
            'x': 250 - 50,
            'y': -50,
            'x2': (500 * 3) + -50,
            'y2': (150 * 5) + -50,
          }
        }
        break;
      case 1: // Center of the flag.
        if (divisionDirection === 1) {
          console.log('center a vertical 50% division');
          var divisionOffset = {
            'x': ((500 / 2) - ((500 * .5) / 2)),
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          console.log('center a horizontal 50% division');
          var divisionOffset = {
            'x': 0,
            'y': (300 - (300 * .5)),
          }
        } else if (divisionDirection === 2) {
            console.log('center a diagonal 50% division from top left to bottom right');
            var divisionOffset = {
                'x': 0,
                'y': 0,
                'x2': 500,
                'y2': 300,
            }
        }
        break;
      case 2: // Right if vertical, bottom if horizontal
        if (divisionDirection === 1) {
          console.log('right align a vertical 50% division');
          divisionOffset = {
            // 'x': 333.3333333333,
            'x': (500 - (500 * .5)),
            'y': 0,
          }
        } else if (divisionDirection === 0) {
          divisionOffset = {
            'x': 0,
            'y': 150,
          }
        } else if (divisionDirection === 2) {
            console.log('bottom-left align a diagonal 50% division from top left to bottom right');
            divisionOffset = {
                // 'x': (500 / 2) - ((500 - 300) * .5) - (((500 - 300) * .5) / 2.15), // I did this without thinking and I can't figure out why it's perfect.
                'x': -50,
                'y': 150 - 50,
                'x2': (250 * 5) + -50,
                'y2': (300 * 3) + -50,
            }
        }
        break;
    }

  }

  // Define the division's direction
    var friendlyDirection
    switch (divisionDirection) {
    case 0:
        friendlyDirection = 'horizontal';
        break;
    case 1:
        friendlyDirection = 'vertical';
        break;
    case 2:
        friendlyDirection = 'diagonal1';
        break;
    }

  // Let's create the division with what we know.
  var newDivision = new Division(divisionFillColor, friendlyDirection, divisionOffset, divisionSize);

  return newDivision;
}

// Flag Generator
function flagGenerator(subFlag) {
  // What're the parts of a flag?
  var flagParts = ['base', 'canton'];

  // We always need a base color:
  var baseColor = randomHex();

  // Do we want a Canton?
  // Let's generate a random boolean value to decide.
  var hasCanton = Math.round(Math.random());
  hasCanton = 1;
  // If we do want a Canton, let's build it.
  if (hasCanton) {
    // For now, let's just set a color. Ignore the other parts of a canton.
    var newCanton;
    if (!subFlag) {
      var embeddedFlag = flagGenerator(true)
      newCanton = new Canton(embeddedFlag, convertHex(randomHex()), false, false);
    } else {
      newCanton = new Canton(false, convertHex(randomHex()), false, false);
    }
  }

  // Do we want a division of some kind?
  // Let's do the same thing we did with the Canton to decide.
  var hasDivision = Math.round(Math.random());
  hasDivision = 1;

  if (hasDivision) {
    // Create a random number of divisions.
    var divisionCount = Math.floor(Math.random() * 3);
    var newDivisions = [];
    for (var i = 0; i < divisionCount; i++) {
      newDivisions.push(divisionGenerator());
    }
  }

  // Let's build a new flag using what we know.
  var newFlag = new Flag(false, baseColor, newCanton ? newCanton : false, newDivisions ? newDivisions : false);


  return newFlag;
}

// Builds the main flag shape using the aspect ratio
// var newFlag = new Flag(false, '#efe7be', '#000eff', '#d3d3d3', '#a33bb2');
// var newFlag = new Flag(false, randomHex(), randomHex(), randomHex(), randomHex());

var newFlag = flagGenerator();

console.log('The new Flag: ', newFlag);

function drawFlag() {
  var canvas = document.getElementById('flag-canvas');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // draw here.
    // ctx.fillStyle = 'rgb(200, 0, 0)';

    // Base / background
    if (newFlag.baseColor !== false) {
      ctx.fillStyle = newFlag.baseColor;
      ctx.fillRect(0, 0, newFlag.ratio.w, newFlag.ratio.h);
    }

    // Division(s)
    if (newFlag.Divisions !== false) {
      // We have a Division to draw!
      console.log('Drawing a division!', newFlag);

      for (var i = 0; i < newFlag.Divisions.length; i++) {

        ctx.fillStyle = newFlag.Divisions[i].color;

        if (newFlag.Divisions[i].direction === 'vertical') {
          ctx.fillRect(newFlag.Divisions[i].offset.x, newFlag.Divisions[i].offset.y, (newFlag.Divisions[i].size) * newFlag.ratio.w, newFlag.ratio.h);
        }
        if (newFlag.Divisions[i].direction === 'horizontal') {
          ctx.fillRect(newFlag.Divisions[i].offset.x, newFlag.Divisions[i].offset.y, newFlag.ratio.w, (newFlag.Divisions[i].size) * newFlag.ratio.h);
        }
          if (newFlag.Divisions[i].direction === 'diagonal1') {
              ctx.beginPath();
              console.log('Drawing division: ', newFlag.Divisions[i]);
              console.log('Moving to x: ', newFlag.Divisions[i].offset.x, ' y: ', newFlag.Divisions[i].offset.y);
              ctx.moveTo(newFlag.Divisions[i].offset.x, newFlag.Divisions[i].offset.y);
              if (newFlag.Divisions[i].offset.x2) {
                ctx.lineTo(newFlag.Divisions[i].offset.x2, newFlag.Divisions[i].offset.y2);
              } else {
                ctx.lineTo(500, 300);
              }
              ctx.lineWidth = ((500 - 300)) * newFlag.Divisions[i].size; // @TODO figure out the width of the diagonal lines. For now just use flag height - width.
              ctx.strokeStyle = newFlag.Divisions[i].color;
              ctx.stroke();
          }

      }
      // ctx.fillRect(newFlag.Division.offset.x, newFlag.Division.offset.y, (newFlag.ratio.w / newFlag.Division.size) * 100, (newFlag.ratio.h / newFlag.Division.size) * 100);
      // ctx.beginPath();
      // ctx.fillStyle = 'rgb(0, 0, 0)';
      // ctx.moveTo(250 - ((500 * .33) / 2), 0);
      // ctx.lineTo((250 - ((500 * .33) / 2) + (500 * .33)), 0);
      // // ctx.moveTo((500 / 2) - ((500 - 300) * .33), 0);
      // // ctx.lineTo((500 / 2) - ((500 - 300) * .33) + ((500 - 300) * .33), 0);
      // // ctx.lineTo(500, (300 / 2) - ((500 - 300) * .33));
      // // ctx.lineTo(500, ((300 / 2) - ((500 - 300) * .33)) + ((500 - 300) * .33));
      // ctx.lineTo(500, 150 - ((300 * .33) / 2));
      // ctx.lineTo(500, (150 - ((300 * .33) / 2)) + (300 * .33));
      // // ctx.lineTo(500, (300 / 2) + 54);
      // // half the height + half the calculated width (66);
      // ctx.fill();

    }

    // Canton
    if (newFlag.Canton !== false) {
      // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillStyle = newFlag.Canton.color;
      ctx.fillRect(0, 0, newFlag.ratio.w / 2, newFlag.ratio.h / 2);
      if (newFlag.Canton.embeddedFlag) {
        drawSubFlag(newFlag.Canton.embeddedFlag, ctx);
      }

    }

    canvas.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
}, false);


  } else {
    // if canvas isn't supported, do stuff here.
  }

  function drawSubFlag(flag, ctx) {
    ctx.fillStyle = flag.color;
    // We have a Division to draw!
    console.log('Drawing a division in a sub flag!', flag);

    for (var i = 0; i < flag.Divisions.length; i++) {

      ctx.fillStyle = flag.Divisions[i].color;

      if (flag.Divisions[i].direction === 'vertical') {
        ctx.fillRect((flag.Divisions[i].offset.x) / 2, (flag.Divisions[i].offset.y) / 2, ((flag.Divisions[i].size) * flag.ratio.w) / 2, (flag.ratio.h) / 2);
      }
      if (flag.Divisions[i].direction === 'horizontal') {
        ctx.fillRect((flag.Divisions[i].offset.x) / 2, (flag.Divisions[i].offset.y) / 2, (flag.ratio.w) / 2, ((flag.Divisions[i].size) * flag.ratio.h) / 2);
      }
      if (flag.Divisions[i].direction === 'diagonal1') {
        ctx.beginPath();
        console.log('Drawing division: ', flag.Divisions[i]);
        console.log('Moving to x: ', flag.Divisions[i].offset.x / 2, ' y: ', flag.Divisions[i].offset.y / 2);
        ctx.moveTo(flag.Divisions[i].offset.x, flag.Divisions[i].offset.y);
        if (flag.Divisions[i].offset.x2) {
          ctx.lineTo(flag.Divisions[i].offset.x2 / 2, flag.Divisions[i].offset.y2 / 2);
        } else {
          ctx.lineTo(500 / 2, 300 / 2);
        }
        ctx.lineWidth = (((500 - 300)) * flag.Divisions[i].size) / 2; // @TODO figure out the width of the diagonal lines. For now just use flag height - width.
        ctx.strokeStyle = flag.Divisions[i].color;
        ctx.stroke();
      }

    }
}

}