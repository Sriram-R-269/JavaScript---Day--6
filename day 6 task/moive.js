//a

class movie {
    constructor (title , studio , rating){
        this.title= title;
        this.studio = studio;
        this.rating = rating;
    }
}
var a = new movie("iron man" , "marvel studio" , "PG");
 console.log(a);

//b



class movie1{
    constructor (title , rating){
        this.title= title;
        this.rating = rating;
    }
}
var a = new movie1("iron man" , "PG");
 console.log(a);


 
// c

class movie2{
    constructor(title,rating){
        this.title=title;
        this.rating=rating;

    }
    static getPG(movies){
        var pgmovies=[];
        for (var movie2 of movies){
            if(movie2.rating ==="PG"){
                pgmovies.push(movie2);
            }
        }
        return pgmovies;
    }
}
var flim1 = new movie("iron man", "u");
var flim2 = new movie("joker", "PG");
var flim3 = new movie("avatar","h");

var movies=[flim1,flim2,flim3];
console.log(movie2.getPG(movies));



//d

class movie3{
    constructor (title , studio , rating){
        this.title= title;
        this.studio = studio;
        this.rating = rating;
    }
}
var a = new movie3("Casino Royale","Eon Productions”, "PG13");
 console.log(a);