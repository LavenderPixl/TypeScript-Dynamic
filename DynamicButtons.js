var buttonCounter = 0;
var textBoxElement;
var documentButton;
function SetupDOMElements() {
    textBoxElement = document.getElementById("txtButtonContext");
}
var Button = /** @class */ (function () {
    function Button() {
        this.id = ++buttonCounter;
        var btn = document.createElement("button");
        btn.setAttribute('ID', "Btn" + buttonCounter.toString());
        btn.setAttribute('value', "displayButton" + buttonCounter.toString());
        btn.setAttribute('onclick', "AddedButtonClicked(" + buttonCounter + ")");
    }
    return Button;
}());
function AddExtraButtons(text, clickFunc) {
    var btn = document.createElement('input');
    btn.setAttribute('value', text);
    btn.setAttribute('onclick', clickFunc);
    btn.setAttribute('type', 'button');
    return btn;
}
function addNewButton() {
    var div = document.createElement('div');
    div.setAttribute('ID', "btn" + buttonCounter.toString());
    document.getElementsByClassName("ButtonsAdded")[0].appendChild(div);
    // var button = new Button("New Button");
    // var delButton = new Button("Delete");
    // var editButton = new Button("Edit");
}
//How button looks/displays.
function AddedButtonClicked(btn) {
    documentButton = btn;
    textBoxElement.value = documentButton.value;
    textBoxElement.style.width = CalculateWidthOnControl(textBoxElement);
    console.log(textBoxElement.style.width);
}
function CalculateWidthOnControl(Control_Object) {
    var ControlWidth = Control_Object.value.length;
    console.log(ControlWidth);
    return (ControlWidth * 9 + 25 + 'px');
}
function TextboxValueChanged() {
    documentButton.value = textBoxElement.value;
    textBoxElement.style.width = CalculateWidthOnControl(textBoxElement);
    console.log(textBoxElement.style.width);
}
// function EditButton(div)
// {
//     TextBoxElement.style.visibility = "visible";
//     var btn = div.querySelector("#"+div.id+"");
//     AddedButtonClicked(btn);
// }
// var d = new Button("Dynamic Button - " + buttonCounter);
console.log(buttonCounter);
