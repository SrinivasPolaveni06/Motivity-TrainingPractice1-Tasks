let kgfMovie=document.getElementById('kgfMovie');
let kgfMoviePlay=document.getElementById('kgfMoviePlay');
let kgfMoviePause=document.getElementById('kgfMoviePause');

let maariMovie=document.getElementById('maariMovie');
let MaariMoviePlay=document.getElementById('MaariMoviePlay');
let MaariMoviePause=document.getElementById('MaariMoviePause');

let vikramMovie=document.getElementById('vikramMovie');
let vikramMoviePlay=document.getElementById('vikramMoviePlay');
let vikramMoviePause=document.getElementById('vikramMoviePause');

let audioValue=false;

kgfMoviePlay.addEventListener('click',function(){
    
    kgfMovie.play();
    maariMovie.pause();
    vikramMovie.pause();
    
});
kgfMoviePause.addEventListener('click',function(){
    
    kgfMovie.pause();
    
});

MaariMoviePlay.addEventListener('click',function(){
    kgfMovie.pause();
    maariMovie.play();
    vikramMovie.pause();
    
});
MaariMoviePause.addEventListener('click',function(){
    maariMovie.pause();
    
});

vikramMoviePlay.addEventListener('click',function(){
    vikramMovie.play();
    kgfMovie.pause();
    maariMovie.pause();
    
});
vikramMoviePause.addEventListener('click',function(){
    vikramMovie.pause();
    
});