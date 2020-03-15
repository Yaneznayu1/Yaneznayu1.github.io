var u=0,m,a=[],mas=[]; 
m=prompt('введите число m: ');
for (var i=0;i<m;i++){ a[i]=prompt(i+1+'-chislo: ');}
function randomBetween(min, max) {
    if (min < 0) {
        return min + Math.random() * (Math.abs(min)+max);
    }else {
        return min + Math.random() * max;
    }
}

for (var i = 0; i <m; i++){
	mas[i] = [];
	for (var j = 0; j <m; j++){
		mas[i][j] =Math.floor(randomBetween(-20, 20)) ;
}}
console.log(mas);
function ulala()
{
  for (var i=0;i<m;i++)
  {
    if (a[i]>0)
    {
      for (var j=0;j<m;j++)
      {
        if (mas[i][j]<0) u++
      }
    } 
  }
}
ulala();
alert('количество отрицательных чисел = '+u);