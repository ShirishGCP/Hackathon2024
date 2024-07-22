export class Carer {
    id: number; // Example: Unique identifier for the community
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    experience: number;
    bio: string;
    city: string;
    userId: number
    // Add more properties as needed

    constructor(id: number, firstName: string, lastName: string, email: string,
        phone: number, experience: number, userId: number, city: string, bio: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.experience = experience;
        this.bio = bio
        this.city = city
        this.userId = userId
    }
}
