let year =prompt('Год: ');
for (let i = 0; i < 12; ++i) {
let date = new Date(year, i, 1), date1 = new Date(year, i+1, 0),
weekday = date.getDay();
date.setDate(date1.getDate() -(3+date1.getDay())%7);
alert(date.toLocaleDateString(undefined, { day: "numeric", month: "long", weekday: "long" }))

}