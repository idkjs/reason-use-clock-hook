// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var UseClock$ReasonUseClockHook = require("reason-use-clock-hook/src/UseClock.bs.js");

require("./AnalogClock.css");

function useClock(param) {
  var match = React.useState((function () {
          return Date.now();
        }));
  var setDate = match[1];
  React.useEffect((function () {
          var ticker = setInterval((function (param) {
                  return Curry._1(setDate, (function (param) {
                                return Date.now();
                              }));
                }), 1000);
          return (function (param) {
                    clearInterval(ticker);
                    return /* () */0;
                  });
        }));
  return match[0];
}

var UseClock2 = /* module */[/* useClock */useClock];

function AnalogClock(Props) {
  var date = UseClock$ReasonUseClockHook.useClock(/* () */0);
  console.log("Date", date);
  var secondstyle = ReactDOMRe.Style[/* unsafeAddProp */1]({ }, "--current-seconds", new Date(date).getSeconds().toString());
  var minutestyle = ReactDOMRe.Style[/* unsafeAddProp */1]({ }, "--current-minutes", new Date(date).getMinutes().toString());
  var hourstyle = ReactDOMRe.Style[/* unsafeAddProp */1]({ }, "--current-hours", new Date(date).getHours().toString());
  return React.createElement("svg", {
              className: "analogClock",
              viewBox: "0 0 40 40"
            }, React.createElement("circle", {
                  className: "analogClockFace",
                  cx: "20",
                  cy: "20",
                  r: "19"
                }), React.createElement("g", {
                  className: "marks"
                }, React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    }), React.createElement("line", {
                      x1: "15",
                      x2: "16",
                      y1: "0",
                      y2: "0"
                    })), React.createElement("line", {
                  className: "hour",
                  style: hourstyle,
                  x1: "0",
                  x2: "9",
                  y1: "0",
                  y2: "0"
                }), React.createElement("line", {
                  className: "minute",
                  style: minutestyle,
                  x1: "0",
                  x2: "13",
                  y1: "0",
                  y2: "0"
                }), React.createElement("line", {
                  className: "seconds",
                  style: secondstyle,
                  x1: "0",
                  x2: "16",
                  y1: "0",
                  y2: "0"
                }), React.createElement("circle", {
                  className: "pin",
                  cx: "20",
                  cy: "20",
                  r: "0.7"
                }));
}

var make = AnalogClock;

exports.UseClock2 = UseClock2;
exports.make = make;
/*  Not a pure module */
