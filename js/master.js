// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
		skipStartButton: true,
		preventUnanswered: true,
		perQuestionResponseMessaging: false,
		perquestionResponseAnswers: false,
		disableScore: true,
		nextQuestionText: "NEXT QUESTION",
		completeQuizText: "SUBMIT"
	});
	

	//Apply background images for first question
	for (var i = 0; i < 6; i++) {
		var answerLi = $('li[id="question0_'+i+'"]');
		var imageName = $('li[id="question0_'+i+'"]').attr('image');
		var bg = "url(images/"+imageName+")";
		$('li[id="question0_'+i+'"]').css("background-image",bg);
		$('li[id="question0_'+i+'"]').css("background-size",'100% 100%');
	}
	
	
	//Checkbox Functionality
	$("ul[class='answers'] li").click(function(){
		var $$ = $(this);
		var questionId1 = $$.attr('id');
		var questionClass = $$.attr('class').split(' ')[0];
		if( !$$.is('.checked')){
				//li group
				var group = "."+questionClass;
				$(group).removeClass("checked");
				$(group).find('#answerCheckBox img').css('display','none');
				
				//checkbox group
				var group1 = "input:checkbox[name='" + questionClass + "']";
				$(group1).prop("checked", false);
				
			$('input[id="'+questionId1+'"]').prop('checked', false); 
			$$.addClass('checked');
			$('input[id="'+questionId1+'"]').prop('checked', true);  //Make checkbox true
			$$.find('#answerCheckBox img').css('display','block');  //Add checkmark image
			$$.parent().siblings('#buttonDiv').css('background-color','#eca154'); 
			$$.parent().siblings('#buttonDiv').css('border','1px solid #eca154');
		}else {
            $$.removeClass('checked');
			$('input[id="'+questionId1+'"]').prop('checked', false);  //Make checkbox true
            $$.find('#answerCheckBox img').css('display','none');  //Remove checkmark image
			$$.parent().siblings('#buttonDiv').css('background-color','#b7b7b7'); 
			$$.parent().siblings('#buttonDiv').css('border','1px solid #b7b7b7');
			
        }
	});
	
	
	//Add BreadCrumb for first question
	/*$("#questionHeader").append('<div id="breadcrumb"></div>');
	for (var i = 0; i < 7; i++) {
		var html = "<li></li>";
		$("#breadcrumb").append(html);
	}
	*/
	
	var current = $('li[id="question0"] .questionCount .current').html() - 1;
	$('li[id="question0"] #questionHeader #breadcrumb li:eq('+current+')').css('background-color','white');

});
