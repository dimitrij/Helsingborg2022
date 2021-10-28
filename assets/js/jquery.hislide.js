(function($) {
   
    var slide = function(ele,options) {
        var $ele = $(ele);
       // console.log($ele);
        var setting = {
            speed: 1000,
            interval: 2000,
            
        };
    
        $.extend(true, setting, options);
     
        var states = [
            { $zIndex: 1, width: 150, height: 180, top: 69, left: 134, $opacity: 0.1 },
            { $zIndex: 2, width: 180, height: 220, top: 59, left: 0, $opacity: 0.5 },
            { $zIndex: 3, width: 200, height: 250, top: 35, left: 110, $opacity: 0.9 },
            { $zIndex: 4, width: 230, height: 300, top: 0, left: 300, $opacity: 1 },
            { $zIndex: 3, width: 200, height: 250, top: 35, left: 490, $opacity: 0.9 },
            { $zIndex: 2, width: 180, height: 220, top: 59, left: 670, $opacity: 0.5 },
            { $zIndex: 1, width: 150, height: 180, top: 69, left: 500, $opacity: 0.1 }
        ];

        var $lis = $ele.find('li');
        var timer = null;
        $ele.find('.next').on('click', function() {
            next();
        });
        $ele.find('.prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('z-Index', state.$zIndex).finish().animate(state, setting.speed).find('section').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
