//targetelni a fv végén id alapján az elemeket
//scroll hatására eltűnik a szöveg
(function () {
    this.mg_scroll_animate = function() {
        this.scroll_animate = {
            options: {
                element  : [],
                property : [],
                from     : [],
                to       : [],
                posStart : [],
                posEnd   : []
            },
            scrollPos: null,
            element: null,
            step: null,
            state: false,
            init: function() {

                if(this.validate()) this.listener();

            },
            validate: function() {

                for (var option in this.options)
                    if (option === null || option == '') return false;

                return !((this.element = document.getElementById(this.options.element)) === null);

            },
            extendDefaults: function(properties) {

                for (var property in properties) {
                    if (properties.hasOwnProperty(property)) {
                        this.options[property] = properties[property];
                    }
                }

            },
            listener: function() {

                var $this = this;
                window.addEventListener('scroll',function(){
                    $this.scrollPosChange(window.pageYOffset || document.body.scrollTop);
                });

            },
            scrollPosChange: function(position) {

                for(var i=0; i<this.options.property.length; i++) {

                    var func = this.animate(i);
                    this.scrollPos = position;

                    if(position > this.options.posStart[i] && position < this.options.posEnd[i]) {
                        this[func](false, i);
                        this.state[i] = false;
                    } else if (position < this.options.posStart[i] && !this.state[i]) {
                        this[func](this.options.from[i], i);
                        this.state[i] = true;
                    } else if (position > this.options.posEnd[i] && !this.state[i]) {
                        this[func](this.options.to[i], i);
                        this.state[i] = true;
                    }

                }

            },
            animate: function(i) {

                switch(this.options.property[i]) {
                    case 'opacity':
                        return 'opacity';
                        break;
                    case 'pos.top':
                        return 'top';
                        break;
                    case 'pos.left':
                        return 'left';
                        break;
                    case 'pos.right':
                        return 'right';
                        break;
                    case 'pos.bottom':
                        return 'bottom';
                        break;
                }

            },
            opacity: function(value, i) {

                if(!value && typeof value === 'boolean') this.element.style.opacity = this.getNormalValue(i);
                    else this.element.style.opacity = value;

            },
            top: function(value, i) {

                if(!value && typeof value === 'boolean') this.element.style.top = this.getNormalValue(i)+'px';
                    else this.element.style.top = value+'px';

            },
            bottom: function(value, i) {

                if(!value && typeof value === 'boolean') this.element.style.bottom = this.getNormalValue(i)+'px';
                    else this.element.style.bottom = value+'px';

            },
            left: function(value, i) {

                if(!value && typeof value === 'boolean') this.element.style.left = this.getNormalValue(i)+'px';
                    else this.element.style.left = value+'px';

            },
            right: function(value, i) {

                if(!value && typeof value === 'boolean') this.element.style.right = this.getNormalValue(i)+'px';
                    else this.element.style.right = value+'px';

            },
            getNormalValue: function(i) {

                var options = this.options;
                return options.from[i] - ((options.from[i] - options.to[i]) / 100 *
                    ((this.scrollPos - options.posStart[i]) / ((options.posEnd[i]-options.posStart[i])/100)));

            }
        };

        if (arguments[0] && typeof arguments[0] === "object") {
            this.scroll_animate.extendDefaults(arguments[0]);
        }
        this.scroll_animate.init();
    }
}());

var vh = window.innerHeight,
    mg = new mg_scroll_animate({
        element  : 'foCimDiv',
        property : ['opacity','pos.top'],
        from     : ['1', '100'],
        to       : ['0', '300'],
        posStart : [vh/100*1, vh/100*1],
        posEnd   : [vh/100*30, vh/100*30]
    })/*,
    
    mg2 = new mg_scroll_animate({
        element  : 'projektH1Nev',
        property : ['opacity','pos.top'],
        from     : ['0', '-500'],
        to       : ['1', '0'],
        posStart : [vh/100*30, vh/100*30],
        posEnd   : [vh/100*60, vh/100*60]
    })*/;