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

var b;
function password()
{
    if(b==1)
    {
        document.getElementById("password").type="password";
        return b=0;
        
    }
    else
    {
        document.getElementById("password").type="text";
        return b=1;
    }
}
