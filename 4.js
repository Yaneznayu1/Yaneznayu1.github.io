function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

var n;
n=prompt('введите число n:');
for (i=2;i<2*n;i++){
if ((4*(factorial(i-1)+1)+i)%(i*(i+2))==0) alert(i+' '+(i+2));
}