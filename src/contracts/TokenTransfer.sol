pragma solidity ^0.8.10;
pragma experimental ABIEncoderV2;

import {
  IPoolAddressesProvider
} from "./IPoolAddressProvider.sol";
import { IPool } from "./IPool.sol";
import { SafeMath } from "./SafeMath.sol";


abstract contract PoolExchangeSimple {
    using SafeMath for uint256;
    IPoolAddressesProvider public immutable override ADDRESSES_PROVIDER;
    IPool public immutable override POOL;

    constructor (IPooAddressProvider provider) {
        ADDRESSES_PROVIDER = provider;
        POOL = IPool(provider.getPool());
    }

}

contract TokenTransfer is PoolExchangeSimple {
    using SafeMath for uint256;
}

