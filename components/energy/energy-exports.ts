// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { Cluster, PublicKey } from "@solana/web3.js";
import GreenvoltIDL from "../../target/idl/greenvolt.json";
import type { Greenvolt } from "../../target/types/greenvolt.ts";

// Re-export the generated IDL and type
export { Greenvolt, GreenvoltIDL };

// The programId is imported from the program IDL.
export const GREENVOLT_PROGRAM_ID = new PublicKey(GreenvoltIDL.address);

// This is a helper function to get the Greenvolt Anchor program.
export function getGreenvoltProgram(provider: AnchorProvider) {
  return new Program(GreenvoltIDL as Greenvolt, provider);
}

// This is a helper function to get the program ID for the GreenVolt program depending on the cluster.
export function getGreenvoltProgramId(cluster: Cluster) {
  switch (cluster) {
    case "devnet":
    case "testnet":
      // This is the program ID for the Greenvolt program on devnet and testnet.
      return new PublicKey("EQFrggsw8iKcU19EnRsCpqhGPK77Dz45ivXKzr6g36sF");
    case "mainnet-beta":
    default:
      return GREENVOLT_PROGRAM_ID;
  }
}
