$(document).ready(function(){
	
	//var todoslists = [];
	//var completedlists= [];
	var count;

	function lengthoflist() {
		
	}

	function addTodos(task) {
		//todoslists.push(task);

		$.post( "jdbc.php", { task: task, status:1 },function(data){

			$(".todos").append('<li class="ui-state-default tasklst tasksno'+data+'"><div class="checkbox"><label><input class="tasks" type="checkbox" value="'+data+'" />'+task+'</label></div></li>');
			$(".count-todos").html($('.tasklst').length );
		});
		
		//return todoslists.indexOf(task);

	}

	function completeTodos(index){
		if (index > -1) {
			completedlists.push(todoslists[index]);
			//console.log(index);
			//console.log(todoslists);
		   
		}

	}

	$(".add-todo").keypress(function(e){
		if(e.which ==  13){9
			var val = $(".add-todo").val();
			var id = addTodos(val);				
			$(".add-todo").val('');
		}
	});
	$(".not-done").on('click', '.tasks' ,function(){
		if( $(this).is(':checked') ){
			var id =$(this).val();
			console.log(id);
			$.post( "state.php", { id:id },function(data){
				console.log(data);

				$("#done-items").append('<li class="Donetaskno'+id+'" >'+data+' <button class="remove-item btn btn-default btn-xs pull-right" value="'+id+'"><span class="glyphicon glyphicon-remove" value="'+id+'"></span></button></li>');

			} );

			$(".tasksno"+id).remove();
			$(".count-todos").html($('.tasklst').length );
			
			completeTodos(id);
		}
	});


	$(".todolist").on('click', '.btn' ,function(){
		var va=$(this).val();

		console.log(va);		
		$.post("delete.php", {task:va},function(getId){
			console.log(getId);
			
			console.log("After click");
		});

	});
	/*$(".todolist").on('click', '.tasks' ,function(){
		if( $(this).is(':checked') ){
			var id =+$(this).val();
			console.log(id);
			$.post( "state.php", { id:id },function(data){
				console.log(data);
			} );

			
			//$("#done-items").append('<li>'+todoslists[id]+' <button class="remove-item btn btn-default btn-xs pull-right"><span class="glyphicon glyphicon-remove"></span></button></li>');
			//completeTodos(id);
		}
	});*/

	$(".todolist").on('click', '.btn' ,function(){
			var id =+$(this).val();
			console.log(id);
			 $.post( "delete.php", { id:id },function(data){
			 	console.log(data);
			 } );
			 $(".Donetaskno"+id).remove();
	});

});