var buttonCounter = 0;
// var textBoxElement = document.getElementById("txtButtonContext");
var textBoxElement = document.getElementById("txtButtonContext");
var documentButton;
var BaseButton = /** @class */ (function () {
    function BaseButton(txt) {
        this.text = txt;
    }
    BaseButton.prototype.createBtn = function () {
        var btn = document.createElement('input');
        btn.type = "button";
        btn.setAttribute('ID', "Btn" + buttonCounter.toString());
        // btn.setAttribute('value', "Button" + buttonCounter.toString());
        btn.setAttribute('onclick', "AddedButtonClicked(" + buttonCounter + ")");
        btn.value = this.text;
        return btn;
    };
    return BaseButton;
}());
function addExtraButtons(text, clickFunc) {
    var btn = document.createElement('input');
    btn.setAttribute('value', text);
    btn.setAttribute('onclick', clickFunc);
    btn.setAttribute('type', 'button');
    return btn;
}
function addNewButton() {
    var div = document.createElement('div');
    div.setAttribute('ID', "div" + buttonCounter.toString());
    document.getElementsByClassName("AddedButtons")[0].appendChild(div);
    var btn = new BaseButton("New Button" + buttonCounter.toString() + "");
    var delButton = addExtraButtons("Delete", "deleteButton(" + div.getAttribute("ID") + ")");
    var editButton = addExtraButtons("Edit", "editButton(" + div.getAttribute("ID") + ")");
    div.appendChild(btn.createBtn());
    div.appendChild(delButton);
    div.appendChild(editButton);
    buttonCounter++;
    console.log(btn.id);
}
function deleteButton(div) {
    div.remove();
}
function editButton(div) {
    var btn = new BaseButton("Tester");
    btn = div.querySelector("#" + div.id + "");
    addedButtonClicked(btn);
    console.log(div.id);
}
function addedButtonClicked(btn) {
    documentButton = btn;
    textBoxElement.value = documentButton.value;
    textBoxElement.style.width = calculateWidthOnControl(textBoxElement);
    console.log(textBoxElement.style.width);
}
//How button looks/displays.
function calculateWidthOnControl(Control_Object) {
    var ControlWidth = Control_Object.value.length;
    console.log(ControlWidth);
    return (ControlWidth * 9 + 25 + 'px');
}
//
function textboxValueChanged() {
    documentButton.value = textBoxElement.value;
    textBoxElement.style.width = calculateWidthOnControl(textBoxElement);
    console.log(textBoxElement.style.width);
}
