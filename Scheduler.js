var a ;
function showme()
{
  if(a==1)
  {
      document.getElementById("Buy").style.display="inline";
    document.getElementById("Sell").style.display="none";
    return a=0;
  }
  else
  {
      document.getElementById("Buy").style.display="none";
    document.getElementById("Sell").style.display="inline";
    return a=1;
  }
}

// var b ;
// function dis()
// {
//   if (b==1)
//   {
//     document.getElementById("Timer").style.display="inline";
//     document.getElementById("Price").style.display="inline";
//     document.getElementById("Percentage1").style.display="inline";
//     return b=0;
//   }
//   else
//   {
//     document.getElementById("Timer").style.display="none";
//     document.getElementById("Price").style.display="none";
//     document.getElementById("Percentage1").style.display="none"; 
//     return b=1
//   }
// }