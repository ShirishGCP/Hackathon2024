import { Annuncement } from "./annuncement.model";

export class Community {
    id: number; // Example: Unique identifier for the community
    name: string;
    description: string;
    location: string;
    email: string;
    phone: number;
    bio: string;
    city: string;
    announcements: Annuncement[];
    // Add more properties as needed

    constructor(id: number, name:string, description: string, location:string,
        email: string, phone: number, bio: string, city: string, announcements:Annuncement[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.location=location;
        this.email = email;
        this.phone = phone;
        this.bio = bio
        this.city = city
        this.announcements=announcements;
    }
}
