// https://www.youtube.com/watch?v=QExydkuuE30
var db=openDatabase("itemDB","1.0","itemDB",65535);
// console.log(db);
$(function(){
	$("#create").click(function(){
		db.transaction(function(transaction){
			// console.log("hello sql");
			var sql="CREATE TABLE items " + "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," 
				+ "item VARCHAR(100) NOT NULL," + "quantity INT(5) NOT NULL)";
			// console.log(sql);
			transaction.executeSql(sql,undefined,
				function(){alert("Table is created successfully");},
				function(){alert("Table is created successfully");}
			);
		});
	});

	// to remove
	$("#remove").click(function(){
		if(!confirm("Are you sure to delete this table?","")) return;;
		db.transaction(function(transaction){
			var sql="DROP TABLE items";
			transaction.executeSql(sql,undefined,
				function(){alert("Table is deleted successfully!");},
				function(transaction,err){alert(err.message);}

			);
		});
	});


	// to insert
	$("#insert").click(function(){
		var item=$("#item").val();
		var qty=$("#quantity").val();
		// console.log(item);
		console.log(qty);
		db.transaction(function(transaction){
			var sql="INSERT INTO items (item,quantity) VALUES(?,?)";
			// console.log(sql);
			transaction.executeSql(sql,[item,qty],
				function(){alert("New item is added successfully!");},
				function(transaction,err){alert(err.message);}
			);
		});
	});


	// to fetch
	$("#list").click(function(){
		loadData();
	});

	function loadData(){
		$("#itemlist").children().remove();
		db.transaction(function(transaction){
			var sql="SELECT * FROM items ORDER BY id DESC";
			console.log(sql);
			transaction.executeSql(sql,undefined,
				function(transaction,result){
					if(result.rows.length){
						for(var i=0;i<result.rows.length;i++){
							var row=result.rows.item(i);
							var item = row.item;
							var id= row.id;
							var quantity=row.quantity;
							$("#itemlist").append('<tr><td>'+id+'</td><td>'+item+'</td><td>'+quantity+'</td></tr>');
						}
					}
					else {
						$("#itemlist").append('<tr><td colspan="3" align = "center">No Item Found</td></tr>');
					}
					
				},
				function(transaction,err){alert(err.message);}
			);
		});
	}
});





