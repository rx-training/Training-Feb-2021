export interface Student{
    Name :{
        FirstName:string, 
        MiddleName:string,
        LastName:string
    };
    DOB:Date;
    PlaceOfBirth:string;
    FirstLanguage:string;
    Address:{
        City:string,
        State:string,
        Pin:number
    };
    Father:{
        Name:{
            FirstName:string,
            MiddleName:string,
            LastName:string
        },
        Email:string,
        EducationQualification:string,
        Profession:string,
        Designation:string,
        Phone:string

    };
    Mother:{
        Name:{
            FirstName:string,
            MiddleName:string,
            LastName:string
        },
        Email:string,
        EducationQualification:string,
        Profession:string,
        Designation:string,
        Phone:string

    };
}
export interface Emergency{
    Relation:string,
    Number:string
}
export interface ReferenceDetails{
    ReferenceThrough:string,
    Address:{
        City:string,
        TelNo:string
    }
}


// let s:Student = {Name :{FirstName:"jay",MiddleName:"s",LastName:"pra"}}
