let bankBytecode =
	'0x608060405260008054600160a060020a031916331790556105bb806100256000396000f3006080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632e1a7d4d811461008757806341c0e1b5146100a157806368915353146100b65780637b83b50b146100c15780639cdfaa06146100e8578063a9059cbb146100f3578063d0e30db014610124575b600080fd5b34801561009357600080fd5b5061009f60043561012c565b005b3480156100ad57600080fd5b5061009f61023c565b61009f6004356102dd565b3480156100cd57600080fd5b506100d661036f565b60408051918252519081900360200190f35b61009f600435610382565b3480156100ff57600080fd5b5061009f73ffffffffffffffffffffffffffffffffffffffff6004351660243561042f565b61009f610537565b33600090815260016020526040902054670de0b6b3a76400008202908111156101b657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051339082156108fc029083906000818181858888f193505050501580156101e3573d6000803e3d6000fd5b5033600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b60005473ffffffffffffffffffffffffffffffffffffffff16ff5b336000908152600260209081526040808320348082556001918201869055925290912054101561030c57600080fd5b3360008181526002602090815260408083205460018352928190208054939093039092558151348152908101849052428183015290517f207377a59d2a4eb1bb9dda0efe301bf537684d925d562ecf2d3a1c95afe450629181900360600190a250565b3360009081526001602052604090205490565b336000908152600260205260408120600101548211156103b2573360009081526002602052604090206001015491505b5033600081815260026020818152604080842080546001808552838720805460648b85020490930192830190559484528582559301939093558251828152908101859052428184015291519092917fd95faae33502f0dfa63032b539818d9b3e918b6caf1462bfd5876b82900c8980919081900360600190a25050565b33600090815260016020526040902054670de0b6b3a76400008202908111156104b957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b3360008181526001602090815260408083208054869003905573ffffffffffffffffffffffffffffffffffffffff8716808452928190208054860190558051868152429281019290925280519293927fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd69281900390910190a3505050565b336000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a25600a165627a7a723058204883640d8db9080f9b372222e501b4eec4c15dbbb214065bfa21f24adde3741d0029'

let bankAbi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "BuyTimeDeposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "TimeDepositExpired",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "DepositEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "WithdrawEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "TransferEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "count",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BuyTimeDepositEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "count",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "TimeDepositExpiredEvent",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBankBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]