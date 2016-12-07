
var passwd;
var validuser;

function signin()
{
	
    var usern=document.getElementById('user').value;
    var pswd=document.getElementById('pswd').value;

    var request = $.ajax(
    "https://arrowhc.herokuapp.com/profile/"+usern,
    {
        method: "GET",
        dataType: "json",
        crossDomain:"true"
    });            

    request.done(function( msg ) {

        var jsonOptions = JSON.parse(request.responseText);

        // Loop over the JSON array.
        if(jsonOptions.length!=0){
            jsonOptions.forEach(function(item) {

                passwd = item.password;

                if (pswd==passwd) {
                    window.open("patient_data.html?id="+item._id+"&profile="+item.profile,"_self");
                } else {
                    alert('Invalid password!');
                }
            });
        } else {
            alert('Invalid user!');
        }
        
    });  

}



