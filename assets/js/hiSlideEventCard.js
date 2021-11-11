
$(document).ready(function () {

    // Select Event Div And Create so-slide Div & prev Div & next Div & ul 
    let divEventCon = document.querySelector('#event');
    divEventCon.innerHTML = `
     <input type="date" id="dateEvent" name="dateEvent" data-date="" data-date-format="DD MM YYYY" value="2021-01-01" onchange="get_date_json()">
     <div class="so so-slide">
     <div class="prev"></div>
     <div class="next"></div>
     <ul class="event-ul" id="event-ul"></ul>
     </div>
     `;
    //Get Date And Json Data
    get_date_json();


    // HiSilide Function To Show And Animate Cards
    //Start Function
    (function ($) {
        var slide = function (ele, options) {
            var $ele = $(ele);
            var setting = {
                speed: 1000,
                interval: 2000,

            };

            $.extend(true, setting, options);

            var states = [
                //{ $zIndex: 1, width: 100, height: 180, top: 69, left: 134, $opacity: 0.1 },
                { $zIndex: 20, width: 180, height: 200, top: 59, left: 90, $opacity: 0.9 },
                { $zIndex: 30, width: 200, height: 220, top: 35, left: 140, $opacity: 0.9 },
                { $zIndex: 4000, width: 230, height: 300, top: 0, left: 250, $opacity: 1 },
                { $zIndex: 30, width: 200, height: 220, top: 35, left: 390, $opacity: 0.9 },
                { $zIndex: 20, width: 180, height: 200, top: 59, left: 470, $opacity: 0.9 },
                //{ $zIndex: 1, width: 150, height: 180, top: 69, left: 500, $opacity: 0.1 }
            ];

            var $lis = $ele.find('li');
            var timer = null;
            $ele.find('.next').on('click', function () {
                next();
            });
            $ele.find('.prev').on('click', function () {
                states.push(states.shift());
                move();
            });
            $ele.on('mouseenter', function () {
                clearInterval(timer);
                timer = null;
            }).on('mouseleave', function () {
                autoPlay();
            });

            move();
            autoPlay();

            function move() {
                $lis.each(function (index, element) {
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
        $.fn.hiSlide = function (options) {
            $(this).each(function (index, ele) {
                slide(ele, options);
            });

            return this;
        }
    })(jQuery);
    // End HiSlide Funacion

});

// Declair Arreys
let EVE = [];
let items = [];

//Object Event With Its Methods And Varaibles
const EVENT = {
    KEY1: 'added-eventsReq',  // For Requierd Event
    KEY2: 'added-events',    //  For Events That its not Requierd
    contents: [],           //   Array Out Of 5 Events
    contents1: [],         //    Array for Req Event
    contents2: [],        //     Array for not Req Events
    init() {
        let _contents1 = localStorage.getItem(EVENT.KEY1);
        let _contents2 = localStorage.getItem(EVENT.KEY2);
        if (_contents1 && _contents2) {

            EVENT.contents1 = JSON.parse(_contents1);
            EVENT.contents2 = JSON.parse(_contents2);

            if (EVENT.contents1.length > 0) {
                items = [];
                for (var i = 0; i <= 3; i++) {
                    items = items.concat(EVENT.contents2[Math.floor(Math.random() * EVENT.contents2.length)]);
                }
                EVENT.contents = [];
                EVENT.contents = EVENT.contents.concat(EVENT.contents1, items);
            } else {
                items = [];
                for (var i = 0; i <= 4; i++) {
                    items = items.concat(EVENT.contents2[Math.floor(Math.random() * EVENT.contents2.length)]);
                }
                EVENT.contents = [];
                EVENT.contents = EVENT.contents.concat(items);
            }

        }
        EVENT.showEvents();
    },

    showEvents() {
        EVE = EVENT.contents;
        var eventlist2 = document.querySelector('.event-ul');
        eventlist2.innerHTML = ''

        EVE.forEach(event2 => {
            var arry = event2.eveDate.split("-")
            var year2 = arry[0]
            var month = arry[1]
            var day = arry[2]
            // create li
            let list = document.createElement('li')
            // <section class="text--container">
            let section1 = document.createElement('section')
            section1.className = 'text--container'

            //<div class="head head--section">
            let DivHead = document.createElement('div')
            DivHead.className = 'head head--section'

            // create <h3 class="h-event">Event ></h3>
            let H3Head = document.createElement('h3')
            H3Head.className = 'h-event'
            H3Head.textContent = 'Event : ' + year2
            DivHead.append(H3Head)     //Close H3
            section1.append(DivHead)  // Close DivHead


            //create <div class=" event event--date">
            let Divevent = document.createElement('div')
            Divevent.className = ' event event--date'

            //create  <div class="text-date">
            let DivTextDate = document.createElement('div')
            DivTextDate.className = 'text-date'

            // create div date
            let Date1 = document.createElement('div')
            Date1.className = 'date'

            // create h3 date (day)
            let H3Day = document.createElement('h3')
            H3Day.className = 'font1'
            H3Day.textContent = day
            Date1.append(H3Day)             //close h3 day
            DivTextDate.append(Date1)      //close div date

            // create h2 date (Month)
            let H2Month = document.createElement('h2')
            H2Month.textContent = month
            DivTextDate.append(H2Month)   //close h2 Month
            Divevent.append(DivTextDate) //close text-date div


            //create  <div class="title"> inside Divevent
            let DivTitle = document.createElement('div')
            DivTitle.className = 'title'

            // create p for event inside div title
            let PEvent = document.createElement('p')
            PEvent.className = 'font3'
            PEvent.textContent = event2.title
            DivTitle.append(PEvent)        //close p event
            Divevent.append(DivTitle)     // close div DivTitle
            section1.append(Divevent)    // Close Divevent

            // create <div class="event event--des"> inside section
            let DivEventDes = document.createElement('div')
            DivEventDes.className = 'event event--des'

            // create p for description inside event--des
            let PDesc = document.createElement('p')
            PDesc.className = 'font2'
            PDesc.textContent = event2.desc
            DivEventDes.append(PDesc)      //close p desc
            section1.append(DivEventDes)  //close  event event--des

            //create   <div class="head footer--section"> inside section
            let DivFooter = document.createElement('div')
            DivFooter.className = 'head footer--section'

            // create p for Footer inside head footer--section
            let PFooter = document.createElement('p')
            PFooter.className = 'font3'
            PFooter.textContent = "Milad Al-Hilfi"
            DivFooter.append(PFooter)     //close p Footer


            section1.append(DivFooter) //close head footer--section
            list.append(section1)     //Append section to li
            eventlist2.append(list)  //Append li to ul
        });
        $('.so').hiSlide()
    }

}
// fUNCTIONS
function get_date_json() {
    let day_month_year = document.getElementById('dateEvent').value;
    readTextFile("assets/json/event.json?", function (text) {
        var data = JSON.parse(text);
        var data_filter_needed = data.filter(element => element.eveDate == day_month_year);
        var data_filter = data.filter(element2 => element2.eveDate != day_month_year);
        localStorage.removeItem('added-eventsReq');
        localStorage.removeItem('added-events');
        localStorage.setItem('added-eventsReq', JSON.stringify(data_filter_needed));
        localStorage.setItem('added-events', JSON.stringify(data_filter));
        EVENT.init();
        EVENT.showEvents(EVENT.contents);
    });

}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

