let AddressList;
let Address_List;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayRollList=getinputDatafromStorage();
    document.querySelector(".emp-count").textContent=AddressList.length;
createInnerHtml();
localStorage.removeItem('editEmp');
});

const getinputDatafromStorage=() =>{
    return createAddressJSON()
}
const createInnerHtml=()=>{
 const headerHTML="<th></th><th>Name</th><th>Pwd</th><th>Email</th><th>Number</th><th>Tel</th><th>Action</th>";
    if(AddressList.length==0)
    {
        let innerHTML=`${headerHTML}`;
        document.querySelector('#display').remove();
        let innerHTML1=`${headerHTML}`;
        
         document.querySelector('#display').innerHTML=innerHTML;

         return;
    }else{
    let innerHTML=`${headerHTML}`;
 for(const inputData of AddressList) {
    
    innerHTML=`${innerHTML}
    
        <tr>
            <td></td>
            <td>${inputData._pwd}</td>
            <td>${inputData._email}</td>
            <td>${inputData._tel}</td>
            <td>${inputData._number}</td>
            <td>${stringfyDate(inputData._search)}</td>
            <td><button onclick=remove(${inputData._name})>Remove</button>
            <td><button onclick=update(${inputData._name})>Update</button>
            </td>
        </tr>
        `;
    }

        document.querySelector('#display').innerHTML=innerHTML;
}
    
}

const createAddressJSON=()=>{
    let AddressListLocal=[
        {
            _pwd:14545,
            _email:'nirav@gmail.com',
            _number:'56465464',
            _tel:'455336',
            _search:'40'
            
              
              },
              
    ];

    return AddressListLocal;
}

const remove=(node) =>{
    let inputData=AddressList.find(adData => adData._name==node);
    if(!inputData) return;
    const index=AddressList.map(adData=>adData._name).indexOf(inputData._name);
  AddressList.splice(index,1);
  document.querySelector(".emp-count").textContent=AddressList.length;
  if(AddressList.length==0){
   
    createInnerHtml();
  }else{
  createInnerHtml();
  }

  


}

const update=(node) =>{
    let inputData=AddressList.find(adData => adData._name==node);
    if(!inputData) return;
    localStorage.setItem('editEmp'),JSON.stringify(inputData);
    window
}