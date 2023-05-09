

let gallery=new (function(){
    const CATCOUNT=5;
    let i=0;
    return {
        toLeft: function(){
            --i;
            if(!i)i=CATCOUNT-1;
        },

        toRight: function(){
            ++i;
            if(i==CATCOUNT)i=0;
        },

        getRef: function(){
            return "cat"+i;
        }
    };
})();

