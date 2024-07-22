export class Patient {
    id: number; // Example: Unique identifier for the community
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    experience: number;
    medicalHistory: string;
    city: string;
    userId: number;
    age: number
    // Add more properties as needed

    constructor(id: number, firstName: string, lastName: string, email: string,
        phone: number, experience: number, userId: number, city: string, medicalHistory: string, age:number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.experience = experience;
        this.medicalHistory = medicalHistory
        this.city = city
        this.userId = userId
        this.age = age
    }
}

