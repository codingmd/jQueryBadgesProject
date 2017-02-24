$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/coding_md.json',
    dataType: 'jsonp',
    async:false,
    success: function(response) {
    	console.log('response', response.courses);
      
      courses = response.courses.completed;
      progress = response.courses.in_progress;
      var $completed = $('#completed');
      var $progress = $('#progress');
      

      courses.forEach(function(course) {

      	var $course = $('<div />', {
      		'class': 'course'
      	}).appendTo($completed);

      	$('<h3 />', {
      		text: course.title
      	}).appendTo($course);

      	$('<img />', {
      		src: course.badge 
      	}).appendTo($course);

      	$('<a />', {
      		href: course.url,
      		target: '_blank',
      		'class': 'btn btn-primary',
      		text: 'See course'
      	}).appendTo($course);
      })

      progress.forEach(function(course) {

      	var $course = $('<div />', {
      		'class': 'course'
      	}).appendTo($progress);

      	$('<h3 />', {
      		text: course.title
      	}).appendTo($course);

      	$('<img />', {
      		src: course.badge 
      	}).appendTo($course);

      	$('<a />', {
      		href: course.url,
      		target: '_blank',
      		'class': 'btn btn-primary',
      		text: 'See course'
      	}).appendTo($course);
      })
    }
  });

});
