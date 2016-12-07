function show_search()
{
	alert("working");
	var name=document.getElementById("patient_name").val;
	$("s_name").html(name);
	$('searched_list').class({ display:block;});
}