pragma solidity ^0.6.0;

contract Registration{

    address public owner;
    uint256 index;
    uint256 amount; // new Registration amount
    uint256 chng_amount; // change registration amount

    constructor() public{
        owner = msg.sender;
        index = 0;
        amount = 3;
        chng_amount = 1;
    }

    struct newRegistration{

        address owner;
        uint256 hand;
        string vehicleno;
        string owner_name;
        string vehicle_type;
        uint256 chassis;
        bool pending;
        uint256 Index;
        uint amount;

    }

    mapping(uint256 => newRegistration) public registration;

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    function propose_newRegistration(string memory _ownername,string memory _vehicletype,uint256 _chassis)public payable{
        require(msg.sender != owner);
        require(msg.value >= amount);
        index++;
        newRegistration memory regi = newRegistration({

            owner : msg.sender,
            hand : 1,
            vehicleno : "null",
            owner_name : _ownername,
            vehicle_type : _vehicletype,
            chassis : _chassis,
            pending : true,
            Index : index,
            amount : msg.value


        });

        registration[index] = regi;


    }


    function confirm_newRegistration(uint _index,string memory _vehicleno)public onlyOwner{

        registration[_index].vehicleno = _vehicleno;
        registration[_index].pending = false;
        (bool success, ) = owner.call.value(
                        registration[_index].amount
                    )("");



    }

    function reject_Registration(uint _index)public onlyOwner{
        (bool success,) = registration[_index].owner.call.value(
            registration[_index].amount
            )("");
    }

    function change_registrationproposal(uint _index,string memory _ownername,address _owner)public payable{
        require(msg.sender == registration[_index].owner);
        require(msg.value >= chng_amount);
        (bool success,) = owner.call.value(
             msg.value
        )("");
        registration[_index].owner = _owner;
        registration[_index].owner_name = _ownername;
        registration[_index].hand++;

    }





}
