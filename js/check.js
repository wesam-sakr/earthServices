// ------------ incase of calc price depended on chechbox ------------ //
var diff_date=1;
  $(".changeDate").change(function(){
    var selected_date_from=$('input[name=selected_date_from]').val();
    var selected_date_to=$('input[name=selected_date_to]').val();
    console.log(selected_date_to);
    if( (selected_date_from != NaN && selected_date_from != "") && (selected_date_to != NaN && selected_date_to != "")){
      diff_date = daysdifference(selected_date_to, selected_date_from) ;
      setTimeout(calcPrice(),1000) 
    }
  });
  
  function daysdifference(firstDate, secondDate){
    var startDay = new Date(firstDate);
    var endDay = new Date(secondDate);
    console.log(startDay);
    
    
    var millisBetween = startDay.getTime() - endDay.getTime();
    var days = millisBetween / (1000 * 3600 * 24);
    
    console.log(days);
    return Math.round(Math.abs(days));
}



  var totalPrice = 0
  $("#price").attr('data-target', 0 );
  $("#price").html(0)
  var checkGender=$("select[name='gender'] option:selected").val();
  if($("input[name=count-num]").length > 1){
      count = $("input[name=count-num]").val();
  } else count = 1

  function calcPrice(){
      var initPrice = 0
      var totalPrice = 0
      var checkInp = $('input[type=checkbox]')
      for (let i = 0; i < checkInp.length ; i++) {
          var id = $(checkInp[i]).attr('id');
          if ($(checkInp[i]).is(":checked")) {
            if(checkGender == 'male'){
                initPrice += Number($("label[for='" + id + "']").attr('data-male-target'));
              }else if(checkGender == 'female'){
              initPrice += Number($("label[for='" + id + "']").attr('data-female-target'));
            }
          }
          else {
            initPrice += 0;
          }
          totalPrice = initPrice * count 
          $("#price").attr('data-target', initPrice );
          $("#price").html(totalPrice)
      }
      if ($("#count-num").length > 0) {
          let countInp = document.getElementsByName('count-num')[0];
          countInp.addEventListener('input' , function (e){
              count = e.target.value;
              calcPrice()
          })
      }
  }
  $('input[type=checkbox]').click(calcPrice)
  $("select[name='gender']").on('change', function(){
      checkGender = $("select[name='gender'] option:selected").val();
      calcPrice()
  })
