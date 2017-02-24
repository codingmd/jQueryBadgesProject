$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/coding_md.json',
    dataType: 'jsonp',
    success: function(response) {
      
      var $courses = $('#response.courses.completed');
      var $badges = $('#badges');
      

      courses.forEach(function(course) {

      	var $course = $('<div />', {
      		'class': 'course'
      	}).appendTo($badges);

      	$('<h3 />', {
      		text: course.title
      	}).appendTo($course);

      	$('<img />', {
      		src: course.badge 
      	})appendTo($course);

      	$('<a />', {
      		href= course.url,
      		target: '_blank',
      		'class': 'btn btn-primary',
      		text: 'See course'
      	}).appendTo($course);
      })

    }
  });

});
