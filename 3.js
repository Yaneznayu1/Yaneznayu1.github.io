var a = [[24, 1, 19, 4, 17], [5, 2, 22, 20, 16], [18, 23, 8, 9, 7], [12, 14, 3, 21, 15], [6, 25, 13, 11, 10]];
alert(a);
var sum=65,strok=0,stolb=0,diag=0;
for (var i=0;i<5;i++)
{
var n=0;
for (var j=0;j<5;j++)
{
n=n+a[i][j];
}
if (n==sum) {strok++;}
}

for (var i=0;i<5;i++)
{
var n=0;
for (var j=0;j<5;j++)
{
n=n+a[j][i];
}
if (n==sum) {stolb++;}
}


var n=0;
for (var j=0;j<5;j++)
{
n=n+a[j][j];
}
if (n==sum) {diag++;}
n=0;
for (var j=0;j<5;j++)
{
n=n+a[j][4-j];
}
if (n==sum) {g=diag++;}


if ((strok== 5) && (stolb == 5) && (diag==2))
{
alert('Этот квадрат является магическим');
} else { alert('Этот квадрат не является магическим');}