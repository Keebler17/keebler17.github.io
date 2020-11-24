words = [];
map = [];

highlight = [];

checked = [];

var xlen = 0;
var ylen = 0;

function solve() {
  console.log("Beginning to solve");
  parseWordList();
  console.log(words);
  parseSearchMap();
  console.log(map);
  search();
  console.log("Finished solving. Moving on to showing results.")

  let results = "";

  console.log(highlight);
  console.log(highlight.indexOf([0, 0]));

  for(let y = 0; y < ylen; y++) {
    contPlace: for(let x = 0; x < xlen; x++) {

      for(let i = 0; i < highlight.length; i++) {
        if(highlight[i][0] == x && highlight[i][1] == y) {
          results += "<mark>" + getCh(x, y) + "</mark>";
          console.log("h");
          continue contPlace;
        }
      }

      results += getCh(x, y);
    }
    results += "<br>";
  }

  document.getElementById("results").innerHTML = results;

  words = [];
  map = [];
  highlight = [];
  xlen = 0;
  ylen = 0;
}

function parseWordList() {
  console.log("Parsing word list");
  let listRaw = document.getElementById("wordList").value;
  words = listRaw.split("\n")
}

function parseSearchMap() {
  console.log("Parsing search map");
  let mapRaw = document.getElementById("map").value;
  let mapRawArr = mapRaw.split("\n");
  console.log(mapRawArr);
  for(let i = 0; i < mapRawArr.length; i++) {
    map.push([])
    for(let j = 0; j < mapRawArr[i].length; j++) {
      map[i].push(mapRawArr[i].charAt(j) + "");
    }
  }

  ylen = mapRawArr.length;
  xlen = mapRawArr[0].length;
}

function getCh(x, y) {
  if(x >= 0 && y >= 0 && x <= xlen-1 && y <= ylen-1) {
    return map[y][x];
  }
}

function search() {
  for(let x = 0; x < xlen; x++) {
    for(let y = 0; y < ylen; y++) {
      checked = [];
      checkIfWord(x, y);
    }
  }
}

function checkIfWord(x, y) {
  for(let i = 0; i < words.length; i++) {
    if(getCh(x, y) === words[i].charAt(0)) {
      if(words[i].length != 1) {
        checkIfSecondLetter(x, y, words[i]);
      } else {
        console.log("gg");
      }
    }
  }

}

function checkIfSecondLetter(x, y, word) {

  let wordLen = word.length;

  let xdir = 0;
  let ydir = 0;
  if(getCh(x-1, y-1) === word.charAt(1)) {
    checkIfFullWord(x, y, -1, -1, word);
  } else if(getCh(x-1, y) === word.charAt(1)) {
    checkIfFullWord(x, y, -1, 0, word);
  } else if(getCh(x-1, y+1) === word.charAt(1)) {
    checkIfFullWord(x, y, -1, 1, word);
  } else if(getCh(x, y+1) === word.charAt(1)) {
    checkIfFullWord(x, y, 0, 1, word);
  } else if(getCh(x+1, y+1) === word.charAt(1)) {
    checkIfFullWord(x, y, 1, 1, word);
  } else if(getCh(x+1, y) === word.charAt(1)) {
    console.log("x: " + x + ", y: " + y)
    console.log(getCh(x+1, y));
    checkIfFullWord(x, y, 1, 0, word);
  } else if(getCh(x+1, y-1) === word.charAt(1)) {
    checkIfFullWord(x, y, 1, -1, word);
  } else if(getCh(x, y+1) === word.charAt(1)) {
    checkIfFullWord(x, y, 0, 1, word);
  } else {
    return;
  }

}

function checkIfFullWord(x, y, xdir, ydir, word) {
  if(word.length == 2) {
    console.log(word)
    //highlight.push([x, y]);
    return;
  }

  checked.push([x, y]);

  checked.push([x+xdir, y+ydir]);

  x += xdir;
  y += ydir;

  for(let i = 2; i < word.length; i++) {
    x += xdir;
    y += ydir;
    // console.log("getch: " + getCh(x, y) + ", charAt: " + word.charAt(i));
    if(getCh(x, y) === word.charAt(i)) {
      checked.push([x, y]);
    } else {
      // fail :(
      //console.log("fail: getCh(x, y): " + getCh(x, y) + ", wanted: " + word.charAt(i) + ", word: " + word + ", x: " + x + ", y: " + y, ", xdir: " + xdir + ", ydir: " + ydir);
      return;
    }
  }

  console.log("gg");
  for(let i = 0; i < checked.length; i++) {
    highlight.push(checked[i]);
  }
}
