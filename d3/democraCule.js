(function( $ ){
	
$.fn.democraCule = function() {
	
	alert('works plug');
	
	
	$.getScript('/src/d3play/d3/d3.v3.min.js', function(){
		
		var cwc = d3.select(".democraDiv")
	        .append("svg")
	        .attr({
	        		'width': 400,
	        		'height': 400
	        });    
		
		var citWork = cwc.append('circle')
	        .style({
	        	'stroke': '#F7853A',
			'stroke-width': '10px',
			'fill':'#E3EAF0'
	        })
	        	.attr({
				'r': 50,
				'cx': 200,
				'cy': 55
			});
			
			/*.on("mouseover", function(){d3.select(this)
	        		.transition()
	        		.duration(500)
	        		.attr("r", "80")
	        		.attr("cy", 200);})
	        .on("mouseout", function(){d3.select(this)
	        		.transition()
	        		.duration(500)
	        		.attr("r", "40")
	        		.attr("cy", 55);});*/
	});
		   

};

})( jQuery ); 
          