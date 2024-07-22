export class Annuncement {
    id: number; // Example: Unique identifier for the community
    title: string;
    description: string;
    location: string;
    date: Date;
    phone: number;
    bio: string;
    communityId:number;

    constructor(id: number, title:string, description: string, location:string,
         date: Date,phone: number,bio: string, communityId:number){
        this.id = id;
        this.title = title;
        this.description = description;
        this.location=location;
        this.date=date;
        this.phone=phone;
        this.bio=bio;
        this.communityId=communityId;

    }
}
