pragma solidity ^0.4.21;

contract Manager{
    
   address public manager;
    
   mapping(string => address) donors;
   
   mapping(address => bool) hospitals;
   address[] public hospitalAddress;
   string[] public hospitalName;
   string[] public hospitalCity;
   
   uint public hospitalCount;
   
   function Manager() public {
       manager = msg.sender;
   }
   
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function createDonor(string _aadhaar, string _name, uint _age, bool _sex, string _city, string _state, string _mobile) public restricted{
        address newDonor = new Donor(msg.sender, _aadhaar, _name, _age, _sex, _city, _state, _mobile);
        donors[_aadhaar] = newDonor;
    }
    
    function getDonor(string _aadhar) public restricted view returns (address) {
        return donors[_aadhar];
    }
    
    function transfer(address reciver, uint amount) public restricted payable{
        
        require(hospitals[reciver] == true);
        
        reciver.transfer(amount);
    }
    
    function bal() view public restricted returns (uint) {
        return this.balance;
    }
    
    function addHospitals(address _address, string _name, string _city) public restricted {
        hospitals[_address] = true;
        
        hospitalAddress.push(_address);
        hospitalName.push(_name);
        hospitalCity.push(_city);
        
        hospitalCount++;
        
    }
    
    function recieve() public payable{
        
    }
}

  
contract Donor{
    
    address public manager;
    uint public createdOn;
    
    string public aadhaar;
    string public name;
    string public city;
    string public state;
    
    string public mobile;
    
    uint public age;
    bool public sex;
    
    uint public date;
    uint public balance;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    modifier checkDate() {
        if(sex){
            now/3600 >= date;
        }
        else{
            now/3600 >= date;
        }
        _;
    }
    
    function Donor(address _manager, string _aadhaar, string _name, uint _age, bool _sex, string _city, string _state, string _mobile) public {
        manager = _manager;
        createdOn = now/3600;
        
        aadhaar = _aadhaar;
        name = _name;
        age = _age;
        date = now/3600;
        sex = _sex;
        city = _city;
        state = _state;
        mobile = _mobile;
        balance = 0;
    }
    
    
    function donate() public checkDate restricted {
        balance = balance + 10000000000000000;
        
        if(sex){
            date = date + 2160;
        }else{
            date = date + 2880;
        }
    }

     function transfer(uint amount) public checkDate restricted {
        balance = balance - amount;
        
      
    }
}