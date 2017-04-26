$(document).ready(function() {
  $("#form").submit(function(event) {
    var nameInput = $("input#name-input").val();
    var telInput = $("input#tel-input").val();
    var emailInput = $("input#email-input").val();
    var addressInput = $("input#address-input").val();
    var addressInput2 = $("input#address-input2").val();
    var cityInput = $("input#city-input").val();
    var stateInput = $("input#state-input").val();
    var zipInput = $("input#zip-input").val();
    var shippingInput = $("select#shipping-input").val();

    $(".name").text(nameInput);
    $(".tel").text(telInput);
    $(".email").text(emailInput);
    $(".address").text(addressInput);
    $(".address2").text(addressInput2);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".shipping").text(shippingInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
