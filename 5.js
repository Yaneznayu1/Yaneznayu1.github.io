function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var arr=[],n;
n=prompt('введите число n');
for(i=0;i<=n;i++)
{
  arr[i]=getRandomInt(10);
}
alert (arr);
var j=0;
for(i=0;i<=n;i++){
  j=j+arr[i];
  alert(j);
}