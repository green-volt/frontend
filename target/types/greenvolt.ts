/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/greenvolt.json`.
 */
export type Greenvolt = {
  address: "EQFrggsw8iKcU19EnRsCpqhGPK77Dz45ivXKzr6g36sF";
  metadata: {
    name: "greenvolt";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "cancelTrade";
      discriminator: [124, 66, 91, 59, 175, 107, 208, 120];
      accounts: [
        {
          name: "energyTrade";
          writable: true;
        },
        {
          name: "signer";
          writable: true;
          signer: true;
        },
        {
          name: "buyer";
          writable: true;
        },
        {
          name: "escrowAccount";
          writable: true;
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [];
    },
    {
      name: "confirmEnergyDelivery";
      discriminator: [175, 23, 114, 140, 140, 93, 153, 248];
      accounts: [
        {
          name: "energyTrade";
          writable: true;
        },
        {
          name: "seller";
          writable: true;
          signer: true;
        },
        {
          name: "escrowAccount";
          writable: true;
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [];
    },
    {
      name: "confirmEnergyReceipt";
      discriminator: [53, 17, 105, 139, 16, 133, 135, 210];
      accounts: [
        {
          name: "energyTrade";
          writable: true;
        },
        {
          name: "buyer";
          writable: true;
          signer: true;
        },
        {
          name: "seller";
          writable: true;
        },
        {
          name: "escrowAccount";
          writable: true;
          signer: true;
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [];
    },
    {
      name: "createEnergyTrade";
      discriminator: [147, 51, 110, 47, 219, 77, 241, 158];
      accounts: [
        {
          name: "energyTrade";
          writable: true;
          signer: true;
        },
        {
          name: "buyer";
          writable: true;
          signer: true;
        },
        {
          name: "seller";
          writable: true;
          signer: true;
        },
        {
          name: "escrowAccount";
          writable: true;
          signer: true;
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        }
      ];
      args: [
        {
          name: "tradeId";
          type: "string";
        },
        {
          name: "description";
          type: "string";
        },
        {
          name: "paymentAmount";
          type: "u64";
        },
        {
          name: "energyAmount";
          type: "u64";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "energyTrade";
      discriminator: [32, 227, 29, 220, 159, 124, 179, 248];
    }
  ];
  types: [
    {
      name: "energyTrade";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "string";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "paymentAmount";
            type: "u64";
          },
          {
            name: "energyAmount";
            type: "u64";
          },
          {
            name: "buyer";
            type: "pubkey";
          },
          {
            name: "seller";
            type: "pubkey";
          },
          {
            name: "sellerConfirmed";
            type: "bool";
          },
          {
            name: "buyerConfirmed";
            type: "bool";
          },
          {
            name: "status";
            type: {
              defined: {
                name: "tradeStatus";
              };
            };
          }
        ];
      };
    },
    {
      name: "tradeStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "pending";
          },
          {
            name: "delivered";
          },
          {
            name: "completed";
          },
          {
            name: "cancelled";
          }
        ];
      };
    }
  ];
};
