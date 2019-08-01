exports.run = (client, message, args) => {
  Number.prototype.round = function(places) {
    if (!("" + this).includes("e")) {
      return +(Math.round(this + "e+" + places) + "e-" + places);
    } else {
      var arr = ("" + this).split("e");
      var sig = ""
      if (+arr[1] + places > 0) {
        sig = "+";
      }
      return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
    }
    return this;
  }

  const {
    performance,
    PerformanceObserver
  } = require("perf_hooks");

  message.reply(`pong!\nPing ${client.ping}ms.`).catch(console.error);
}
