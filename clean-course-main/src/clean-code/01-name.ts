(() => {

    // Ejemplo
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    const filesToDelete = filesToEvaluate.map( file => file.flagged );
    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };

    const todayDate = new Date();
    
    const daysTranscurred: number = 23;
    
    const filesInDirectory = 33;
    
    const firstName = 'Fernando';
    
    const firstLastName = 'Herrera';

    const daysSinceModification = 12;
    
    const maxClassesByStudent = 6;


})();