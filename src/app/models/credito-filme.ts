export class CreditosFilme {
    
    character: string;
    name: string;
    profile_path: string
    filme_id: number

    constructor(Character: string, Name: string, Profile_Path: string, filme_id: number)
    {
        this.character = Character;
        this.name = Name;
        this.profile_path = Profile_Path;
        this.filme_id = filme_id;
    }
}