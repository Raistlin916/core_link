define(function(require){
    'use strict';
    var extend = function ( defaults, options ) {
        var extended = {};
        var prop;
        for (prop in defaults) {
            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                extended[prop] = defaults[prop];
            }
        }
        for (prop in options) {
            if (Object.prototype.hasOwnProperty.call(options, prop)) {
                extended[prop] = options[prop];
            }
        }
        return extended;
    };

    function EventEmitter() {
        this.__events = {};
    }
    EventEmitter.prototype = {
        on: function( name, cb ) {
            this.__events[name] || (this.__events[name] = []);
            this.__events[name].push(cb);
            return this;
        },
        emit: function( name ) {
            var arr = this.__events[name],
                argus = Array.prototype.slice.call( arguments, 1 ),
                self = this;
            if (arr) {
                arr.forEach(function(cb) {
                    cb.apply( self, argus );
                })
            }
        },
        removeListener: function( name, fn ){
            if(this.__events[name] == undefined){
                return;
            }
            var index;
            if( fn ){
                index = this.__events[name].indexOf(fn);
                if(index > 0){
                    this.__events[name].splice(index, 1);
                }
            } else {
                delete this.__events[name];                
            }
        }
    };

    var prefix = (function () {
        var styles = window.getComputedStyle(document.documentElement, ''),
            pre = (Array.prototype.slice
                .call(styles)
                .join('') 
                .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
            )[1],
            dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
        return {
            dom: dom,
            lowercase: pre,
            css: '-' + pre + '-',
            js: pre[0].toUpperCase() + pre.substr(1)
        };
    })();

    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || 
                                function(callback, element){
                                    return window.setTimeout(callback, 1000 / 60);
                                };
    
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
                                window.webkitCancelAnimationFrame || window.msRequestAnimationFrame ||
                                function(id) {
                                    clearTimeout(id);
                                };

    return {
        extend: extend,
        EventEmitter: EventEmitter,
        prefix: prefix,
        requestAnimationFrame: requestAnimationFrame,
        cancelAnimationFrame: cancelAnimationFrame
    };
});