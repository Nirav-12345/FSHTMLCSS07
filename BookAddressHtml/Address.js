class inputData{
    get pwd(){return this._pwd;}
    set pwd(pwd){
        this._pwd=pwd;
    }
    
    get email() {return this._email;}
    set email(email) {this._email=email;
    let nameRegex=RegExp('^[a-zA-Z0-9]{3,20}@gmail.com$');
    if(nameRegex.test(email))
    this._name=email;
    else throw 'Name is Incorrect';
    }
    
    get url(){return this._url;}
    set url(url){
        this._url=url;
    }
    get number(){return this._number;}
    set number(number){
        this._number=number;
    }
    
    get tel(){return this._tel;}
    set tel(tel){
        this._tel=tel;
    }
    
    get serach(){return this._serach;}
    set serach(serach){
        this._serach=serach;
    }
    
    
    
    
    toString(){
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate=!this.startDate ? "undefined": this.startDate.toLocaleDateString("en-US",options);
            return "id="+this.id+", name= "+this.name+",gender="+this.gender+", profilePic="+this.profilePic+", department="+this.department+
            ", salary="+this.salary+" , startDate="+this.empDate+", note="+this.note;
    }
    }