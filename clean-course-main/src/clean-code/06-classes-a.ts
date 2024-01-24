(() => {

    type Gender = 'M' | 'F'
    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor(name: string, gender: Gender, birthDate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    const newPerson = new Person('Miguel', 'M', new Date);
    console.log('New Person', { newPerson });
})()