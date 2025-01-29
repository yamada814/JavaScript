const greeting = require("./greeting-cjs.cjs");
const name = "田中";

// greeting.hello(name);
// greeting.goodMorning(name);
// greeting.goodEvening(name);
// greeting.goodNight(name);

const {
    hello: h,
    goodMorning: gm,
    goodEvening: ge,
    goodNight: gn
} = greeting;

h(name)
gm(name);
ge(name);
gn(name);