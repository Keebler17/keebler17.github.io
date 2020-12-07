var slope = 0
var pointSlope = ""
var slopeIntercept = ""

first = true

var elt
var calculator

function solve() {
  x1 = document.getElementById("x1").value
  x2 = document.getElementById("x2").value
  y1 = document.getElementById("y1").value
  y2 = document.getElementById("y2").value

  slope = getSlope(x1, x2, y1, y2)
  document.getElementById("slope").innerHTML = slope
  pointSlope = getPointSlope(x1, x2, y1, y2)
  document.getElementById("pointSlope").innerHTML = pointSlope
  slopeIntercept = getSlopeIntercept(x1, x2, y1, y2)
  document.getElementById("slopeIntercept").innerHTML = slopeIntercept


  if(document.getElementById("desmos").checked) {
    if(first) {
      elt = document.getElementById('calculator')
      calculator = Desmos.GraphingCalculator(elt)
      first = false
    }

    calculator.setExpression({ id: 'graph1', latex: pointSlope })
  }
}


function getSlope(x1, x2, y1, y2) {

  console.log("(" + y1 + "-" + y2 + ")/(" + x1 + "-" + x2 + ")")

  if(x1-x2 === 0) {
    return "undefined"
  }


  result = (y1-y2)/(x1-x2)

  return result
}

function getPointSlope(x1, x2, y1, y2) {
  return "x-" + x1 + "=" + getSlope(x1, x2, y1, y2) + "(y-" + y1 + ")"
}

function getSlopeIntercept(x1, x2, y1, y2) {
  slope = getSlope(x1, x2, y1, y2)
  yIntercept = y1-slope*x1
  return "y=" + slope + "x + " + yIntercept
}
