$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/coding_md.json',
    dataType: 'jsonp',
    success: function(response) {
      
      var $courses = $('#response.courses.completed');
      var $badges = $('#badges');
      var $url = $('#url');

      courses.forEach(function(course) {

      	var $course = $('<div />', {
      		'class': 'course'
      	}).appendTo($badges);

      	$('<h3 />', {
      		text: course.title
      	}).appendTo($course);

      	$('<img src="$badges" />').appendTo($course);

      	$('<a href="$url" target="_blank" class="btn btn-primary"></a>', {
      		text: "See course"
      	}).appendTo($course);
      })

    }
  });

});
