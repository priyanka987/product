var categories=[{
	id: 1,
	name: 'cat1'
	}, {
	id: 2,
	name: 'cat2'
	}];
var products=[{
	id: 1,
	name: 'product1',
	category_id: 1
	}, {
	id: 2,
	name: 'product2',
	category_id: 1
	}, {
	id: 3,
	name: 'product3',
	category_id: 2
	}];
                              
var myFunction= function(){
        var table ="";
	for(var j = 0; j < products.length; j++){
		table += "<tr category_id="+ products[j].category_id +">"; 
		table += '<td>' + products[j].id + '</td>';
		table += '<td>' + products[j].name + '</td>';
		for(var i = 0; i < categories.length; i++){
			if(products[j].category_id === categories[i].id){
			table += '<td>' + categories[i].name + '</td>';
			}
		}
		table += "</tr>";		
	}
	document.getElementById("demo").innerHTML = table;
	var html ="<option value=''></option>";
	for(var k in categories){
	  	html += "<option value=" + categories[k].id + ">" + categories[k].name + "</option>";
	  	
	}
	document.getElementById("option").innerHTML = html;
}
var categories_selected= function(){
        //alert(document.getElementById("option").value);
          var selected = thisselect.options[thisselect.selectedIndex].value;
        categories_selected(selected);
		document.getElementById(document.getElementById("option").value).style.visibility = "hidden";
	
}


  	

                  
              
