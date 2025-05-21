// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "lib/ERC721A/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CyronMinter is ERC721A, Ownable {
    uint256 public constant MAX_SUPPLY = 10;
    uint256 public constant MINT_PRICE = 0.01 ether;
    string public baseTokenURI;

    constructor(string memory _baseTokenURI) ERC721A("CyronMint", "CYRON") Ownable(msg.sender) {
        baseTokenURI = _baseTokenURI;
    }

    function mint() external payable {
        require(totalSupply() + 1 <= MAX_SUPPLY, "Max supply reached");
        require(msg.value >= MINT_PRICE, "Insufficient ETH");
        require(_numberMinted(msg.sender) < 2, "Max mints per wallet reached");

        _mint(msg.sender, 1);
    }
    
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseTokenURI = _newBaseURI;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Withdraw failed!");
    }

    function getTotalSupplyAndMaxSupply() public view returns (uint256, uint256) {
        return (totalSupply(), MAX_SUPPLY);
    }
}