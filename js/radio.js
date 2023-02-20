// ------------ incase of calc price depended on radio ------------ //
var totalPrice = 0
$("#price").attr('data-target', 0 );
$("#price").html(0)
if($("input[name=count-num]").length > 1){
    count = $("input[name=count-num]").val();
} else count = 1
function calcPrice(){
    var initPrice = 0
    var totalPrice = 0
    var checkRadio = $('input[type=radio]')
    for (let i = 0; i < checkRadio.length ; i++) {
        var id = $(checkRadio[i]).attr('id');
        if ($(checkRadio[i]).is(":checked")) {
            initPrice += Number($("label[for='" + id + "']").attr('data-target'));
        } else {
            initPrice += 0;
        }
        totalPrice = initPrice * count
        $("#price").attr('data-target', initPrice );
        $("#price").html(totalPrice)
    }
    if ($("#count-num").length > 0) {
        let countInp = document.getElementsByName('count-num')[0];
        let currentprice =  $("#price")
        countInp.addEventListener('input' , function calcPrice(e){
            count = e.target.value;
            let price=$("#price").attr('data-target');
            let newPrice = price * count ;
            console.log(newPrice)
            currentprice.text(newPrice);
        })
    }
}

var allRadios = document.querySelectorAll('input[type=radio]');
var booRadio;
var x = 0;
for(x = 0; x < allRadios.length; x++){
  allRadios[x].onclick = function() {
    if(booRadio == this){
      this.checked = false;
      booRadio = null;
    } else {
      booRadio = this;
    }
  };
}

$('input.inp-modal').click(function(){
    var id = $(this).attr('id');
    var bsModal = $("label[for='" + id + "']").attr('data-bs-target')
    var modal = bsModal.substring(1);
    var radio = $("div[id='" + modal + "'] input[type=radio]")
    if($(radio).filter(":checked").length ==1 ){
        $("input[id='" + id + "']").prop('checked', true);
    }
    else {$(this).prop('checked', false);}

    $(radio).click(function(){
        if($(radio).filter(":checked").length ==1 ){
            $("input[id='" + id + "']").prop('checked', true);
        }else{
            $("input[id='" + id + "']").prop('checked', false);
        }
        calcPrice()
    })
})
