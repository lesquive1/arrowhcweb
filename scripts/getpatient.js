function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

function getpatients() {

    var mUrl;
    var mId=findGetParameter("id");
    var mProfile=findGetParameter("profile");

    switch(mProfile) {
        case "doctor":
            mUrl = "https://arrowhc.herokuapp.com/doctorpatients/"+mId;
            break;
        case "nurse":
            mUrl = "https://arrowhc.herokuapp.com/nursepatients/"+mId;
            break;
        case "patient":
            alert(findGetParameter("profile"));
            break;
        case "admin":
            alert(findGetParameter("profile"));
            break;
        default:
            alert(findGetParameter("not valid profile"));
    }    


    var request = $.ajax(
        mUrl,
    {
        method: "GET",
        dataType: "json",
        crossDomain:"true"
    });            

    request.done(function( msg ) {

        var dataList = document.getElementById('json-datalist');
        var jsonOptions = JSON.parse(request.responseText);

        // Loop over the JSON array.
        jsonOptions.forEach(function(item) {

            // Create a new <option> element.
/*
            var dItem = document.createElement('div');
                dItem.className = "list-group-item";
                dItem.id = item._id;
                // Add the <item> element to the <datalist>.
                dataList.appendChild(dItem);
*/

            var alink = document.createElement('a');
                alink.id = 'a'+item._id;
                alink.href = "clinicaldata.html?id="+item._id;
                dataList.appendChild(alink);

            var dAlink = document.getElementById('a'+item._id);
            var option = document.createElement('div');
                option.className = "list-group-item";
                option.id = item._id;
                // Add the <a> element to the <item>.
                dAlink.appendChild(option);

            var itemList = document.getElementById(item._id);

                option = document.createElement('p');
                option.className = "list-group-item-text col-xs-3";
                option.style="font-size:42px";
                option.textContent = item.patient_name;
                // Add the <P> element to the <item>.
                itemList.appendChild(option);
            

            var oH5 = document.createElement('h5');
                oH5.className = "list-group-item-heading pull-right";
                oH5.textContent = item.nurse_name;
                // Add the <h5> element to the <item>.
                itemList.appendChild(oH5);

            var oBR = document.createElement('br');
                // Add the <BR> element to the <item>.
                itemList.appendChild(oBR);


                oH5 = document.createElement('h5');
                oH5.className = "list-group-item-heading pull-right";
                oH5.textContent = item.room_no;
                // Add the <h5> element to the <item>.
                itemList.appendChild(oH5);

                oBR = document.createElement('br');
                // Add the <BR> element to the <item>.
                itemList.appendChild(oBR);

                oH5 = document.createElement('h5');
                oH5.className = "list-group-item-heading pull-right";
                oH5.textContent = item.department;
                // Add the <h5> element to the <item>.
                itemList.appendChild(oH5);

                oBR = document.createElement('br');
                // Add the <BR> element to the <item>.
                itemList.appendChild(oBR);




/*
            var mTR = document.createElement('tr');
                mTR.id = item._id;        
                dataList.appendChild(mTR);

                var dTR = document.getElementById(item._id);
                var alink = document.createElement('a');
                    alink.id = 'a'+item._id;
                    alink.href = "clinicaldata.html";
                    dTR.appendChild(alink);

                    var dLink = document.getElementById('a'+item._id);
                    var mTD = document.createElement('td');
                        mTD.textContent = item.patient_name;
                        dLink.appendChild(mTD);
                        mTD = document.createElement('td');
                        mTD.textContent = item.department;
                        dLink.appendChild(mTD);
                        mTD = document.createElement('td');
                        mTD.textContent = item.room_no;
                        dLink.appendChild(mTD);

            // Set the value using the item in the JSON array.
            //option.href = "javascript:jqload(" + item.id + ")";
            option.className = "list-group-item";
            //option.onclick(jqload(item.userId));
            option.textContent = item.patient_name;
            // Add the <option> element to the <datalist>.
            dataList.appendChild(option);
            */
        });
        
    });  

}

function mylist(){

            var request = $.ajax(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "GET",
                dataType: "json",
                crossDomain:"true"
            });
            

            request.done(function( msg ) {
                $( "#title" ).text( msg.title );
                $("#body").html(msg.body);
                jqloadAuthor(msg.userId);
                jqloadPhoto(id);


                var dataList = document.getElementById('json-datalist');
                var jsonOptions = JSON.parse(request.responseText);

                // Loop over the JSON array.
                jsonOptions.forEach(function(item) {
                //for (i = 0; i < jsonOptions.length(); i++)
                    // Create a new <option> element.
                    var option = document.createElement('a');
                    // Set the value using the item in the JSON array.
                    option.href = "javascript:jqload(" + item.id + ")";
                    option.className = "list-group-item";
                    //option.onclick(jqload(item.userId));
                    option.textContent = item.title;
                    // Add the <option> element to the <datalist>.
                    dataList.appendChild(option);
                });

            });
  


}