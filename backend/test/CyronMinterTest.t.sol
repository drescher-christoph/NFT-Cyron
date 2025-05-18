// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import {CyronMinter} from "../src/CyronMinter.sol";

contract CyronMinterTest is Test {
    CyronMinter public minter;
    address public owner;
    address public user1;
    address public user2;

    function setUp() public {
        owner = address(1);
        user1 = address(2);
        user2 = address(3);

        vm.startPrank(owner);
        minter = new CyronMinter(
            "ipfs://afybeicwyuop4ts5yajlgdh6wgvs6ivjfcc3cfcxc2fsdrrpe3la7tqaqy"
        );
        vm.stopPrank();
    }

    function testMintToken() public {
        vm.startPrank(user1);
        vm.deal(user1, 2 ether);
        minter.mint{value: 0.01 ether}();
        vm.stopPrank();

        assertEq(minter.balanceOf(user1), 1);
        assertEq(minter.totalSupply(), 1);
        assertEq(minter.ownerOf(0), user1);
    }

    function testMintFailsMaxMinted() public {
        vm.startPrank(user1);
        vm.deal(user1, 2 ether);
        minter.mint{value: 0.01 ether}();
        minter.mint{value: 0.01 ether}();
        vm.expectRevert("Max mints per wallet reached");
        minter.mint{value: 0.01 ether}();
        vm.stopPrank();

        assertEq(minter.balanceOf(user1), 2);
        assertEq(minter.totalSupply(), 2);
    }

    function testMintFailsWithInsufficientETH() public {
        vm.startPrank(user1);
        vm.deal(user1, 1 ether);
        vm.expectRevert("Insufficient ETH");
        minter.mint{value: 0.001 ether}();
        vm.stopPrank();
    }
}
