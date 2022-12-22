import React, { useState } from 'react';
import { useContractRead, useAccount } from 'wagmi';
export function SendTransaction() {
  // Declare a new state variable, which we'll call "param"
  const [param, setParam] = useState("");

  const { data, isError, isLoading } = useContractRead({
    address: "0x7606aAe0feB68EC1eFCAca16ff4DA9bD0dA755e7",
    // 0x81d916D9909e25d45849a51fb11043289Ef202cf
    abi: [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "tkname",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sbl",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amt",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owr",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    functionName: "name",
    // args: ["10"]
  });
  const { address, isConnecting, isDisconnected } = useAccount()
  return (
    <div>
      {typeof(data)=='number' ? data:data.toString() }

      {isLoading && (
        <div>
          LOADING
        </div>
      )}
      {isError && (
        <div>
          ERROR
        </div>
      )}
      <br />
      {address}
    </div>
  );
}




// import * as React from 'react'
// import { useDebounce } from 'use-debounce'
// import {
//     usePrepareSendTransaction,
//     useSendTransaction,
//     useWaitForTransaction,
// } from 'wagmi'
// import { utils } from 'ethers'

// export function SendTransaction() {
//     const [to, setTo] = React.useState('')
//     const [debouncedTo] = useDebounce(to, 500)

//     const [amount, setAmount] = React.useState('')
//     const [debouncedAmount] = useDebounce(amount, 500)

//     const { config } = usePrepareSendTransaction({
//         request: {
//             to: debouncedTo,
//             value: debouncedAmount ? utils.parseEther(debouncedAmount) : undefined,
//         },
//     })
//     const { data, sendTransaction } = useSendTransaction(config)

//     const { isLoading, isSuccess } = useWaitForTransaction({
//         hash: data?.hash,
//     })

//     return (
//         <form
//             onSubmit={(e) => {
//                 e.preventDefault()
//                 sendTransaction?.()
//             }}
//         >
//             <input
//                 aria-label="Recipient"
//                 onChange={(e) => setTo(e.target.value)}
//                 placeholder="0xA0Cf…251e"
//                 value={to}
//             />
//             <input
//                 aria-label="Amount (ether)"
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="0.05"
//                 value={amount}
//             />
//             <button disabled={isLoading || !sendTransaction || !to || !amount}>
//                 {isLoading ? 'Sending...' : 'Send'}
//             </button>
//             {isSuccess && (
//                 <div>
//                     Successfully sent {amount} ether to {to}
//                     <div>
//                         <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
//                     </div>
//                 </div>
//             )}
//         </form>
//     )
// }



// address: '0xA8F27971cdAb33E8F6e2a32Bc75f47e24e46b6b7',
//         abi: [
//             {
//                 "inputs": [],
//                 "name": "print",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "pure",
//                 "type": "function"
//             }
//         ],
//         functionName: 'print',