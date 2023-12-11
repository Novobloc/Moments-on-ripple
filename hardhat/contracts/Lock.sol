// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract PatientRecordContract {
    address public owner;

    // This will only runs when its deployed and so whoever deploys contract that wallet address will be set as owner
    constructor() {
        owner = msg.sender;
    }

    // Schema of a Record against a patient
    struct Record {
        string admissionNo;
        string hospital;
        string doctor;
        string therapeuticArea;
        string city;
        string name;
        string gender;
        uint8 age;
        uint256 timestamp;
        address userPublicKey;
        address issuerPublicKey;
        uint256 expiresAt;
    }

    struct User {
        address publicKey;
        string city;
        string name;
        string gender;
        uint8 age;
        bool isCreated;
    }

    struct Issuer {
        address publicKey;
        string typeOfIssuer; // college, university, rto, etc
        string org; //private or govt
        string name;
        bool isApproved;
        bool isActive;
        bool isCreated;
    }

    Record[] public recordsArray;
    mapping(address => User) public users;
    mapping(address => Issuer) public issuers;
    mapping(string => mapping(address => bool)) public accessList;

    function addUser(
        address _publicKey,
        string memory _city,
        string memory _name,
        string memory _gender,
        uint8 _age
    ) public returns (bool) {
        require(users[_publicKey].isCreated != true, "User already exists");
        users[_publicKey] = User(_publicKey, _city, _name, _gender, _age, true);
        return true;
    }

    /** 
        Hospitals can Enter patient Record whenever he visit to the hospitals using the publickey of patient
     */
    function addRecord(
        string memory _admissionNumber,
        string memory _hospital,
        string memory _doctor,
        string memory _therapeuticArea,
        string memory _city,
        string memory _name,
        string memory _gender,
        uint8 _age,
        address _publicKey,
        uint256 _expiresAt
    ) public returns (bool) {
        require(issuers[msg.sender].isActive == true, "Not a valid issuer");
        recordsArray.push(
            Record(
                _admissionNumber,
                _hospital,
                _doctor,
                _therapeuticArea,
                _city,
                _name,
                _gender,
                _age,
                block.timestamp,
                _publicKey,
                msg.sender,
                _expiresAt
            )
        );
        accessList[_admissionNumber][msg.sender] = true;
        return true;
    }

    function addIssuer(
        address _publicKey,
        string memory _typeOfIssuer,
        string memory _org,
        string memory _name
    ) public onlyOwner returns (bool) {
        require(issuers[_publicKey].isCreated != true, "Issuer already exists");
        issuers[_publicKey] = Issuer(
            _publicKey,
            _typeOfIssuer,
            _org,
            _name,
            true,
            true,
            true
        );
        return true;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "You dont have permission to run this function"
        );
        _;
    }

    function totalRecordsForUser() public view returns (Record[] memory) {
        Record[] memory myRecords = new Record[](recordsArray.length);
        for (uint256 i = 0; i < recordsArray.length; i++) {
            if (
                recordsArray[i].userPublicKey == msg.sender ||
                accessList[recordsArray[i].admissionNo][msg.sender]
            ) {
                myRecords[i] = (recordsArray[i]);
            }
        }
        return myRecords;
    }

    function getRecordsByIssuer() public view returns (Record[] memory) {
        Record[] memory myRecords = new Record[](recordsArray.length);
        for (uint256 i = 0; i < recordsArray.length; i++) {
            if (recordsArray[i].issuerPublicKey == msg.sender) {
                myRecords[i] = (recordsArray[i]);
            }
        }
        return myRecords;
    }

    function getUserData(address _address)
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            uint8,
            bool
        )
    {
        require(users[_address].publicKey != address(0), "No User Found");
        User memory myUser = users[_address];
        return (
            myUser.publicKey,
            myUser.city,
            myUser.name,
            myUser.gender,
            myUser.age,
            myUser.isCreated
        );
    }

    function getIssuerData(address _address)
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            bool,
            bool,
            bool
        )
    {
        require(issuers[_address].publicKey != address(0), "No Issuer Found");
        Issuer memory myIssuer = issuers[_address];
        return (
            myIssuer.publicKey,
            myIssuer.typeOfIssuer,
            myIssuer.org,
            myIssuer.name,
            myIssuer.isApproved,
            myIssuer.isActive,
            myIssuer.isCreated
        );
    }

    function shareRecord(string memory _admissionNo, address _userId)
        public
        returns (bool)
    {
        // share certificate with other users
        Record memory myRecord;

        for (uint256 i = 0; i < recordsArray.length; i++) {
            if (
                keccak256(abi.encode(recordsArray[i].admissionNo)) ==
                keccak256(abi.encode(_admissionNo))
            ) {
                myRecord = recordsArray[i];
            }
        }

        require(
            myRecord.userPublicKey == msg.sender,
            "Not the owner of the certificate"
        );

        accessList[_admissionNo][_userId] = true;

        return true;
    }

    function revokeSharedRecord(string memory _admissionNo, address _userId)
        public
        returns (bool)
    {
        Record memory myRecord;
        for (uint256 i = 0; i < recordsArray.length; i++) {
            if (
                keccak256(abi.encode(recordsArray[i].admissionNo)) ==
                keccak256(abi.encode(_admissionNo))
            ) {
                myRecord = recordsArray[i];
            }
        }

        require(
            myRecord.userPublicKey == msg.sender,
            "Not the owner of the certificate"
        );

        accessList[_admissionNo][_userId] = false;

        return true;
    }
}