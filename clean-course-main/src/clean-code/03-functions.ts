(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    function getActorById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    function createMovie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();