var elForm = document.querySelector(".form-box");
var elFormInput = elForm.querySelector(".form-box__input");
var elOptionCurrency = elForm.querySelector(".form-box__select");
var elFormOutput = document.querySelector(".currency-output-box");
var elCurrency = document.querySelector(".usd-sign");

// currency
var USD_CURRENCY = 11589;
var EURO_CURRENCY = 12805;
var RUBL_CURRENCY = 128;
var LIRA_CURRENCY = 430.11;
var AUSTRALIA_CURRENCY = 7840;
var QATAR_CURRENCY = 3180;
var BRAZIL_CURRENCY = 2451;
var CANADA_CURRENCY = 8796;
var CHINA_CURRENCY = 1621;
var TENGE_CURRENCY = 26.06;
var WON_CURRENCY = 9.08;
var UAE_CURRENCY = 3155;
var KUWAIT_DINAR_CURRENCY = 37764;


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var inputValue = elFormInput.value.trim();
  var selectValue = elOptionCurrency.value.trim();
  var selectTextContent = elOptionCurrency.textContent;
  console.log(selectTextContent);

  if(selectValue == "USD $") {
    elFormOutput.value = inputValue * USD_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "EURO") {
    elFormOutput.value = inputValue * EURO_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "RUBL") {
    elFormOutput.value = inputValue * RUBL_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "Qatar RIYAL") {
    elFormOutput.value = inputValue * QATAR_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "Brazil REAL") {
    elFormOutput.value = inputValue * BRAZIL_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "Canada DOLLAR") {
    elFormOutput.value = inputValue * CANADA_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "Australia DOLLAR") {
    elFormOutput.value = inputValue * AUSTRALIA_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "CHina YUAN") {
    elFormOutput.value = inputValue * CHINA_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "TENGE") {
    elFormOutput.value = inputValue * TENGE_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "Korea WON") {
    elFormOutput.value = inputValue * WON_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "UAE DIRHAM") {
    elFormOutput.value = inputValue * UAE_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "Kuwait DINAR") {
    elFormOutput.value = inputValue * KUWAIT_DINAR_CURRENCY;
    console.log(elFormOutput);
  }
  if(selectValue == "Turkey LIRA") {
    elFormOutput.value = inputValue * LIRA_CURRENCY;
    console.log(elFormOutput);
  }
  elCurrency.textContent = selectValue;
  console.log();
})

