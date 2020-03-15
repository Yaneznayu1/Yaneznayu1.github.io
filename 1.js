var sum=0;
for (var k=1;k<=10;k++)
{
  for (var l=1;l<=15;l++)
  {
    sum=sum+(Math.pow((k-l),2));
  }
  sum=sum*(Math.pow(k,3));
}
alert(sum);