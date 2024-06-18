class Contact{

    private firstName:string;
    private lastName:string;
    private address:string;
    private city:string;
    private state:string;
    private zip:number;
    private phoneNo:number;
    private email:string | number;

    constructor(firstName:string,lastName:string,address:string,city:string,state:string,zip:number,phoneNo:number,email:string | number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNo=phoneNo;
        this.email=email;
    }

    
    getDetails():string{
        return `${this.firstName} ${this.lastName} - ${this.address}, ${this.city}, ${this.state},${this.zip} ,${this.phoneNo}, ${this.email}`;
        }

    firstAndLastName():string{
        return `${this.firstName} ${this.lastName}`;
    }
    getFirstName():string{
        return this.firstName;
    }
    getLastName():string{
        return this.lastName;
    }
    getAddress():string{
        return this.address;
    }
    getCity():string{
        return this.city;
    }
    getState():string{
        return this.state;
    }
    getZip():number{
        return this.zip;
    }
    getPhoneNo():number{
        return this.phoneNo;
    }
    getEmail():string|number{
        return this.email;
    }
       

}
export default Contact;