$(function(){$(".has-submenu a").on("click",function(t){t.preventDefault(),$(this).parent().find("ul").slideToggle()}),$(".btn-up").on("click",function(){$(this).parent().find(".btn-counter").text(parseInt($(this).parent().find(".btn-counter").text())+1)}),$(".btn-down").on("click",function(){$(this).parent().find(".btn-counter").text(parseInt($(this).parent().find(".btn-counter").text())>0?parseInt($(this).parent().find(".btn-counter").text())-1:0)}),$(".datepicker").on("click",function(){$(this).datepicker({format:"M dd, yy"})}),$(".btn-group-justified .btn-grp").on("click",function(t){t.preventDefault(),$(".btn-group-justified .btn-grp").removeClass("active"),$(this).addClass("active")}),$(".rotate .potrait").on("click",function(t){t.preventDefault(),$(".rotate .potrait").removeClass("active"),$(this).addClass("active")}),$(".activities-list li").on("click",function(t){t.preventDefault(),$(".activities-list li").removeClass("active"),$(this).addClass("active")}),$(".report-section li").on("click",function(t){t.preventDefault(),$(".report-section li").removeClass("active"),$(this).addClass("active")}),$("#activityprofileModal").modal("show"),$(function(){$("#datetimepicker6").datetimepicker(),$("#datetimepicker7").datetimepicker(),$("#datetimepicker8").datetimepicker({useCurrent:!1}),$("#datetimepicker6").on("dp.change",function(t){$("#datetimepicker7").data("DateTimePicker").minDate(t.date)}),$("#datetimepicker7").on("dp.change",function(t){$("#datetimepicker6").data("DateTimePicker").maxDate(t.date)})}),$("#chart").donut(),$("#char").donut(),$(".nstSlider").nstSlider({left_grip_selector:".leftGrip",value_changed_callback:function(t,e,i){$(this).parent().find(".leftLabel").text(e)}});var t="([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)",e=function(t){return $.trim((t.first_name||"")+" "+(t.last_name||""))};jQuery(".numbersOnly").keyup(function(){this.value=this.value.replace(/[^0-9\.]/g,"")}),$("#input-tags").selectize({delimiter:",",persist:!1,create:function(t){return{value:t,text:t}}}),$("#select-to").selectize({persist:!1,maxItems:null,valueField:"email",labelField:"name",searchField:["first_name","last_name","email"],sortField:[{field:"first_name",direction:"asc"},{field:"last_name",direction:"asc"}],render:{item:function(t,i){var s=e(t);return"<div>"+(s?'<span class="name">'+i(s)+"</span>":"")+(t.email?'<span class="email">'+i(t.email)+"</span>":"")+"</div>"},option:function(t,i){var s=e(t),a=s||t.email,n=s?t.email:!1;return'<div><span class="label">'+i(a)+"</span>"+(n?'<span class="caption">'+i(n)+"</span>":"")+"</div>"}},createFilter:function(e){var i=new RegExp("^"+t+"$","i"),s=new RegExp("^([^<]*)<"+t+">$","i");return i.test(e)||s.test(e)},create:function(e){if(new RegExp("^"+t+"$","i").test(e))return{email:e};var i=e.match(new RegExp("^([^<]*)<"+t+">$","i"));if(i){var s=$.trim(i[1]),a=s.indexOf(" "),n=s.substring(0,a),c=s.substring(a+1);return{email:i[2],first_name:n,last_name:c}}return!1}}),$(document).ready(function(){function t(){var t=$("#showHide");t.click(function(){"password"===$("#password").attr("type")?($("#password").attr("type","text"),$("#showHide .fa").removeClass("fa-eye").addClass("fa-eye-slash")):($("#password").attr("type","password"),$("#showHide .fa").addClass("fa-eye").removeClass("fa-eye-slash"))})}tinymce.init({selector:".mytextarea",theme:"modern",height:84,max_width:884.25,plugins:["advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker","searchreplace wordcount visualblocks visualchars  code fullscreen insertdatetime media nonbreaking","save table contextmenu directionality emoticons template paste textcolor"],toolbar:"bold italic underline strikethrough | link blockquote image code | bullist  numlist alignjustify aligncenter alignleft alignright",menubar:!1,statusbar:!1,resize:!1}),$("#example1").datepicker({format:"dd/mm/yyyy"}),$(".invoice-panel .btn-collapsable").on("click",function(){$(this).find(".caret-rotate").hasClass("fa-caret-down")?$(this).find(".caret-rotate").removeClass("fa-caret-down").addClass("fa-caret-up"):$(this).find(".caret-rotate").removeClass("fa-caret-up").addClass("fa-caret-down")}),$(document).ready(function(){"use strict";t()}),$('[data-toggle="tooltip"]').tooltip(),$("#upfile1").click(function(t){t.preventDefault(),$("#file1").trigger("click")}),$("#upfile2").click(function(t){t.preventDefault(),$("#file2").trigger("click")})}),$(document).ready(function(){$("#calendar").fullCalendar({customButtons:{},header:{left:"prev,next myCustomButton",center:"title",right:"month,agendaWeek,agendaDay"},eventLimit:!0,views:{agenda:{eventLimit:6}},droppable:!0,defaultView:"agendaDay",editable:!0,events:[{title:"Sara Birthday",color:"rgba(255, 120, 0, 0.1)",start:"2016-07-18"},{title:"Click for getbootstrap",start:"2016-07-15",textColor:"#354052",color:"rgba(38, 154, 243, 0.1)",url:"http://getbootstrap.com"},{title:"Jane Birthday",start:"2016-08-05",end:"2016-08-07",resources:[{id:"a",title:"Room A"},{id:"b",title:"Room B"},{id:"c",title:"Room C"},{id:"d",title:"Room D"}]},{title:"Steve",start:"2016-07-2"},{title:"Jane Appointment",start:"2016-10-05",color:"rgba(255, 120, 0, 0.1)",end:"2016-10-07"},{title:"Carl",start:"2016-07-26"},{title:"Maxx",color:"rgba(255, 120, 0, 0.1)",start:"2016-08-1"},{title:"Lisa",start:"2016-08-27 10:30:00",end:"2016-08-27 12:30:00",color:"rgba(255, 120, 0, 0.1)",allDay:!1},{title:"Geetha",start:"2016-08-29 10:30:00",description:"This is a cool event"}]}),$("#external-events .external-event").draggable({revert:!1,revertDuration:0})}),$(document).ready(function(){$(".numbersOnly").keypress(function(t){return 8!==t.which&&0!==t.which&&(t.which<48||t.which>57)?!1:void 0})}),$(document).ready(function(){$("#select_all").click(function(){this.checked?$(".checkbox1").each(function(){this.checked=!0}):$(".checkbox1").each(function(){this.checked=!1})}),$("#check_all").click(function(){this.checked?$(".check-box1").each(function(){this.checked=!0}):$(".check-box1").each(function(){this.checked=!1})}),$(".team-members-table tr").click(function(t){"checkbox"!==t.target.type&&$(":checkbox",this).trigger("click")})}),$(document).ready(function(){function t(t){return t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+e(t[1])+e(t[2])+e(t[3])}function e(t){return isNaN(t)?"00":s[(t-t%16)/16]+s[t%16]}$("#avatar").click(function(t){t.preventDefault(),$("#avatar-input").trigger("click")}),$(".calendar-switch").children(".cmn-toggle-round").is(":checked")?($(this).parents(".note-checked").find(".vivek").addClass("blur"),$(this).parents(".note-checked").find(".vivek").removeClass("highlight")):($(this).parents(".note-checked").find(".vivek").addClass("highlight"),$(this).parents(".note-checked").find(".vivek").removeClass("blur")),$(".calendar-switch ").on("click",function(){$(this).children(".cmn-toggle-round").is(":checked")?($(this).parents(".note-checked").find(".vivek").addClass("highlight"),$(this).parents(".note-checked").find(".vivek").removeClass("blur")):($(this).parents(".note-checked").find(".vivek").addClass("blur"),$(this).parents(".note-checked").find(".vivek").removeClass("highlight"))});var i=function(){var e=$(this).css("background-color");$(this).closest(".color-picker").find(".form-control").val(t(e)),$(this).closest(".color-picker").find(".color-box").css("background-color",e)};$(".color-shape").click(function(){var t=$(this).css("background-color");$(this).closest(".left-sidebar").css("background",t)}).hover(i);var s=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");$(".text-bold").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("text-dark")}),$(".text-italic").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("italic")}),$(".text-caps").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("text-uppercase"),$(".result-text").hasClass("text-lowercase")&&$(this).closest(".font-picker").find(".result-text").removeClass("text-lowercase")}),$(".text-smallcaps").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("text-lowercase"),$(".result-text").hasClass("text-uppercase")&&$(this).closest(".font-picker").find(".result-text").removeClass("text-uppercase")}),$(".text-bottomline").on("click",function(){$(this).closest(".font-picker").find("p").toggleClass("text-line"),$(".result-text").hasClass("text-strike")&&$(this).closest(".font-picker").find(".result-text").removeClass("text-strike")}),$(".text-strikethrough").on("click",function(){$(this).closest(".font-picker").find("p").toggleClass("text-strike"),$(".result-text").hasClass("text-line")&&$(this).closest(".font-picker").find(".result-text").removeClass("text-line")}),$(".make-left").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("text-left"),$(this).closest(".font-picker").find(".result-text").removeClass("text-center"),$(this).closest(".font-picker").find(".result-text").removeClass("text-right"),$(this).closest(".font-picker").find(".result-text").removeClass("text-justify")}),$(".make-center").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("text-center"),$(this).closest(".font-picker").find(".result-text").removeClass("text-right"),$(this).closest(".font-picker").find(".result-text").removeClass("text-left"),$(this).closest(".font-picker").find(".result-text").removeClass("text-justify")}),$(".make-right").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("text-right"),$(this).closest(".font-picker").find(".result-text").removeClass("text-center"),$(this).closest(".font-picker").find(".result-text").removeClass("text-left"),$(this).closest(".font-picker").find(".result-text").removeClass("text-justify")}),$(".make-justify").on("click",function(){$(this).closest(".font-picker").find(".result-text").toggleClass("text-justify"),$(this).closest(".font-picker").find(".result-text").removeClass("text-center"),$(this).closest(".font-picker").find(".result-text").removeClass("text-left"),$(this).closest(".font-picker").find(".result-text").removeClass("text-right")}),$("#jqxCalendar").jqxCalendar({width:"300px",height:"250px"}),$("#jqxcalendar").bind("valuechanged",function(t){var e=t.args.date;$("#log").text(e.toDateString())}),$(".switch").on("click",function(){$(this).children(".cmn-toggle").is(":checked")?$(this).parent().find(".text-toggle").addClass("text-selected"):$(this).parent().find(".text-toggle").removeClass("text-selected")}),$(".btn-cross").click(function(t){t.preventDefault(),$(this).parent().find(".mail,.btn-cross").hide(),$(this).parent().find(".btn-connect").show()}),$(".search-list li a .cross-icon").click(function(t){t.preventDefault(),$(this).parents("li").fadeOut(500)}),$(".layout-img").on("click",function(t){t.preventDefault(),$(this).siblings(".layout-img").removeClass("active"),$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")}),window.onload=function(){var t=new CanvasJS.Chart("chartContainer",{data:[{type:"column",dataPoints:[{y:80,label:"11"},{y:130,label:"12"},{y:149,label:"13"},{y:109,label:"14"},{y:40,label:"15"},{y:80,label:"16"},{y:149,label:"17"},{y:100,label:"18"},{y:130,label:"19"},{y:139,label:"20"},{y:179,label:"21"},{y:90,label:"22"},{y:149,label:"23"}]}]});t.render()}})});