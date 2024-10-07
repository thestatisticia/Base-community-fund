export const ABI=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isEligible",
				"type": "bool"
			}
		],
		"name": "UserRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_unemployed",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_monthlyIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_outstandingDebts",
				"type": "uint256"
			}
		],
		"name": "checkEligibility",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_unemployed",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_monthlyIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_outstandingDebts",
				"type": "uint256"
			}
		],
		"name": "registerAndCheckEligibility",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "unemployed",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "monthlyIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "outstandingDebts",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isEligible",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]