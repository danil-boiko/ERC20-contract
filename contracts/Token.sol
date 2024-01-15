// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UnistoryKoin is ERC20Capped, Ownable{

    constructor(address contractOwner, address[] memory initialAddresses, uint256 initialSupply, uint256 cap) 
    Ownable(contractOwner)
    ERC20Capped(cap)
    ERC20("UnistoryKoin", "UKoin") 
    {
        require(cap > 0, "Total supply cap must be greater than 0");
        require(initialSupply > 0, "Initial supply must be greater than 0");
        require(initialAddresses.length > 0, "Initial addresses array is empty");
        require(initialSupply * initialAddresses.length <= cap, "Exceeds total supply cap");

       for (uint256 i = 0; i < initialAddresses.length; i++) {
            require(initialAddresses[i] != address(0), "Invalid address in the initial addresses array");
            mint(initialAddresses[i], initialSupply);
        }
    
    }

   function mint(address account, uint256 amount) internal onlyOwner {
        _mint(account, amount);
    }
}