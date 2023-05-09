const galleryImg=document.getElementById('gallery-img');//.attributes.item('src');

let gallery=new (function(){
    const CATCOUNT=5;
    let i=0;
    return {
        toLeft: function(){
            --i;
            if(i<0)i=CATCOUNT-1;
        },

        toRight: function(){
            ++i;
            if(i==CATCOUNT)i=0;
        },

        getRef: function(){
            return `assets/img/cats/cat${i}.jpg`;
        }
    };
})();


previous.onclick=function(event){
    gallery.toLeft();
    galleryImg.src=gallery.getRef();
}

next.onclick=function(event){
    gallery.toRight();
    galleryImg.src=gallery.getRef();

}