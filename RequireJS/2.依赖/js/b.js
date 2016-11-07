function B_H1() {
	return A_H3() + " " + A_H4;
}

function B_Click() {
	$("p").click(function() {
		alert($(this).text());
	});
}