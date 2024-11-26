"use client";
import { getGreenvoltProgram, getGreenvoltProgramId } from "./energy-exports";
import { useWallet } from "@solana/wallet-adapter-react";
import { Cluster, Keypair, PublicKey } from "@solana/web3.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BN } from "@coral-xyz/anchor";
import { useAnchorProvider } from "../hooks/useAnchorProvider";

// Updated interface to match contract parameters
interface CreateEnergyTradeArgs {
  tradeId: string;
  description: string;
  paymentAmount: number;
  energyAmount: number;
  seller: PublicKey;
}

interface ConfirmDeliveryArgs {
  energyTradeAccount: PublicKey;
}

export function useEnergyProgram() {
  const { publicKey } = useWallet();
  const provider = useAnchorProvider();
  const programId = getGreenvoltProgramId("testnet" as Cluster);
  const program = getGreenvoltProgram(provider);

  // Fetch all energy trades
  const trades = useQuery({
    queryKey: ["energyTrade", "all", "testnet"],
    queryFn: () => program.account.energyTrade.all(),
  });

  // Create Energy Trade
  const createEnergyTrade = useMutation<string, Error, CreateEnergyTradeArgs>({
    mutationKey: ["energyTrade", "create", "testnet"],
    mutationFn: async ({
      tradeId,
      description,
      paymentAmount,
      energyAmount,
      seller,
    }) => {
      if (!publicKey) throw new Error("Wallet not connected");

      // Generate a new keypair for the energy trade account
      const energyTradeKeypair = Keypair.generate();

      // Derive escrow account
      const [escrowAccount] = PublicKey.findProgramAddressSync(
        [Buffer.from("escrow"), energyTradeKeypair.publicKey.toBuffer()],
        programId
      );

      return program.methods
        .createEnergyTrade(
          tradeId,
          description,
          new BN(paymentAmount),
          new BN(energyAmount)
        )
        .accounts({
          energyTrade: energyTradeKeypair.publicKey,
          buyer: publicKey,
          seller: seller,
          escrowAccount: escrowAccount,
        })
        .signers([energyTradeKeypair])
        .rpc();
    },
    onSuccess: (signature) => {
      console.log(signature);
      toast.success("Energy trade created successfully");
      trades.refetch();
    },
    onError: (error) => {
      toast.error(`Error creating energy trade: ${error.message}`);
    },
  });

  // Confirm Energy Delivery
  const confirmEnergyDelivery = useMutation<string, Error, ConfirmDeliveryArgs>(
    {
      mutationKey: ["energyTrade", "confirm-delivery", "testnet"],
      mutationFn: async ({ energyTradeAccount }) => {
        if (!publicKey) throw new Error("Wallet not connected");

        return program.methods
          .confirmEnergyDelivery()
          .accounts({
            energyTrade: "",
            escrowAccount: "",
          })
          .rpc();
      },
      onSuccess: (signature) => {
        toast.success(signature);
        trades.refetch();
      },
      onError: (error) => {
        toast.error(`Error confirming delivery: ${error.message}`);
      },
    }
  );

  // Confirm Energy Receipt
  const confirmEnergyReceipt = useMutation<string, Error, ConfirmDeliveryArgs>({
    mutationKey: ["energyTrade", "confirm-receipt", "testnet"],
    mutationFn: async ({ energyTradeAccount }) => {
      if (!publicKey) throw new Error("Wallet not connected");

      return program.methods
        .confirmEnergyReceipt()
        .accounts({
          energyTrade: "",
          seller: "",
        })
        .rpc();
    },
    onSuccess: (signature) => {
      toast.success("Energy receipt confirmed");
      trades.refetch();
    },
    onError: (error) => {
      toast.error(`Error confirming receipt: ${error.message}`);
    },
  });

  // Cancel Trade
  const cancelTrade = useMutation<string, Error, ConfirmDeliveryArgs>({
    mutationKey: ["energyTrade", "cancel", "testnet"],
    mutationFn: async ({ energyTradeAccount }) => {
      if (!publicKey) throw new Error("Wallet not connected");

      return program.methods
        .cancelTrade()
        .accounts({
          energyTrade: "",
          buyer: "",
          escrowAccount: "",
        })
        .rpc();
    },
    onSuccess: (signature) => {
      toast.success("Trade cancelled successfully");
      trades.refetch();
    },
    onError: (error) => {
      toast.error(`Error cancelling trade: ${error.message}`);
    },
  });

  return {
    program,
    trades,
    createEnergyTrade,
    confirmEnergyDelivery,
    confirmEnergyReceipt,
    cancelTrade,
    programId,
  };
}
