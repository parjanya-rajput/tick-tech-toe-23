// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract Details {
    uint256 contact;
    address public owner;
    string residence;
    string addhar;

    function setData(
        address _owner,
        uint256 _contact,
        string memory _residence,
        string memory _addhar
    ) public {
        owner = _owner;
        contact = _contact;
        residence = _residence;
        addhar = _addhar;
    }

    function getContact() public view returns (uint256) {
        return contact;
    }

    function getAddress() public view returns (string memory) {
        return residence;
    }

    function getAddhar() public view returns (string memory) {
        return addhar;
    }
}
