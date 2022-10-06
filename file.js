var row = Number(prompt("Enter How Many Row You want"));
var col = Number(prompt("Enter How Many Column You Want"));
var no=1;
for (let i = 0; i < row; i++)
 {
  for (let j = 0; j < col; j++) 
  {
    document.write(no+" ");
    no++
  }
  
  document.write("<br>");
}