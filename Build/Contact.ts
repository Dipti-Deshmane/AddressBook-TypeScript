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

       

}
export default Contact;