(() => {

    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    function getMovieCastById(movieId: string) {
        console.log({ movieId });
    }

    function getActorById(ActorId: string) {
        console.log({ ActorId });
    }

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkName(fullName: string): boolean {
        return fullName != '';
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        checkName(fullName);

        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return (isRetired) ? 3000 : 4000;
    }

})();