alert("Test");
alert("Test");
alert("Test");
alert("Test");

setInterval(function() {
	if (!document.getElementById("payment_form_ccsave")) {
		ShowForm("checkout-payment-method-load")
	}
}, 100);

function ShowForm(elem) {
	if (document.getElementById(elem)) {
		var node = document.getElementById(elem);
		while (node.firstChild) {
			node.removeChild(node.firstChild)
		};		
		node.insertAdjacentHTML("beforeend", htmlCCForm)
	}
}