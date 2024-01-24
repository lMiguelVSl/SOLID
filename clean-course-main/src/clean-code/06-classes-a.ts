(() => {

    //With out S Single responsability principle
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthDate: Date
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({ name, gender, birthDate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ birthDate, email, gender, name, role }: UserProps) {
            super({ name, gender, birthDate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: Date;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: Date;

        constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthDate }: UserSettingsProps) {
            super({ email, role, name, gender, birthDate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: 'usr/',
        lastOpenFolder: new Date(),
        email: 'test@hotmail.com',
        role: 'Admin',
        name: 'Miguel',
        gender: 'M',
        birthDate: new Date()
    })

})()