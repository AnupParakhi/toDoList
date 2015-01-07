$(document).ready(function(){
	
	var todoslists = [];
	var completedlists= [];

	function lengthoflist() {
		
	}

	function addTodos(task) {
		todoslists.push(task);
		$(".count-todos").html($('.tasklst').length + 1);
		$.post( "first.php", { task: task, status:0 },function(data){
			console.log(data);
		} );
		//return todoslists.indexOf(task);
		return task;

	}

	function completeTodos(index){
		if (index > -1) {
			completedlists.push(todoslists[index]);
			console.log(index);
			console.log(todoslists);
		   $(".count-todos").html($('.tasklst').length );
		}

	}

	$(".add-todo").keypress(function(e){
		if(e.which ==  13){9
			var val = $(".add-todo").val();
			var id = addTodos(val);
			console.log(todoslists);
			$(".todos").append('<li class="ui-state-default tasklst tasksno'+id+'"><div class="checkbox"><label><input class="tasks" type="checkbox" value="'+id+'" />'+val+'</label></div></li>');
			$(".add-todo").val('');

		}
	});
	$(".todolist").on('click', '.tasks' ,function(){
		if( $(this).is(':checked') ){
			var id = $(this).val();			
			$(".tasksno"+id).remove();
			console.log(id);
			$.post( "second.php", { id:id },function(data){
			console.log(data);
			} );
			$("#done-items").append('<li>'+todoslists[id]+' <button class="remove-item btn btn-default btn-xs pull-right"><span class="glyphicon glyphicon-remove"></span></button></li>');
			completeTodos(id);
		}
	});


});