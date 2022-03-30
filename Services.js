var sun = document.getElementById("sun");
sun.onclick = function(){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")){
        sun.src = "assets/\img/\sun.png";
    } 
    else
    {
        sun.src = "assets/\img/\moon.png";
     }

}
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

$(document).ready(function () {
  $("#checkAll").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
  });
  $('.chk').on('click', function () {
    if ($('.chk:checked').length == $('.chk').length) {
      $('#checkAll').prop('checked', true);
    } else {
      $('#checkAll').prop('checked', false);
    }
  });
});
$(document).ready(function() {
  $("#checkID").change(function() {
    $('.check').prop('checked', $(this).prop("checked"));
    });
  $("#checkID").click(function() {
    if($('.check:checked').length == $('.check').length){
      $('#checkID').attr('checked', true);
    }
    else
    {
      $("#checkID").attr("checked", false);
    }
    });
});
