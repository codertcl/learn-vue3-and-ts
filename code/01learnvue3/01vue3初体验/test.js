var names = ["abc", "cba", "nba"];
var obj = {name: "why"};
names.forEach(function (item) {
    console.log(this); // 三次obj对象
    console.log(this.name); // why
}, obj);
names.forEach(function (item) {
    console.log(this); // 三次window
    console.log(this.names); // ["abc", "cba", "nba"];
});
