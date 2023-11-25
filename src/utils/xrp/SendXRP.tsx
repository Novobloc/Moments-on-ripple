import React, { useEffect, useState } from "react";
// import { Client, xrpToDrops, dropsToXrp } from "xrpl";
import { View, Button, StyleSheet } from "react-native";
import { Box, Text } from "@/theme";

// A common flow of creating a test account and sending XRP
function SendXRP() {
  //   const [balance, setBalance]: any = useState(0);
  //   const [wallet, setWallet]: any = useState(null);
  //   const [client] = useState(new Client("wss://s.altnet.rippletest.net:51233"));
  //   const [paymentButtonText, setPaymentButtonText] = useState("Wait for the wallet to be funded...");
  //   const [statusText, setStatusText] = useState("");

  //   useEffect(() => {
  //     console.log("start connection");
  //     client.connect().then(() => {
  //       console.log("connected");
  //       console.log("funding wallet");

  //       client.fundWallet().then((fund_result) => {
  //         console.log(fund_result);
  //         setBalance(fund_result.balance);
  //         setWallet(fund_result.wallet);
  //         setPaymentButtonText("Send a 22 XRP Payment!");
  //       });
  //     });
  //   }, []);

  //   async function sendPayment() {
  //     console.log("Creating a payment transaction");
  //     setStatusText("Sending a payment for 22 XRP...");
  //     const tx: any = {
  //       TransactionType: "Payment",
  //       Account: wallet.address,
  //       Amount: xrpToDrops("22"),
  //       Destination: "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
  //     };

  //     // Submit the transaction --------------------------------------------
  //     console.log("Submitting the transaction (Takes 3-5 seconds)");
  //     const submitted_tx = await client.submitAndWait(tx, {
  //       autofill: true, // Adds in fields that can be automatically set like fee and last_ledger_sequence
  //       wallet: wallet
  //     });

  //     // Check transaction results -----------------------------------------
  //     console.log("Transaction result:", submitted_tx.result.meta.TransactionResult);
  //     setStatusText("Sent! (See logs for full details)");

  //     // Look up the new account balances by sending a request to the ledger
  //     const account_info: any = await client.request({
  //       command: "account_info",
  //       account: wallet.address
  //     });

  //     // See https://xrpl.org/account_info.html#account_info ---------------
  //     const balance = account_info.result.account_data.Balance;
  //     console.log(`New account balance: ${balance} drops`);
  //     const bal = dropsToXrp(balance);
  //     setBalance(bal);
  //   }

  return (
    <Box>
      <Text>Send XRP</Text>
      <View style={styles.container}>
        {/* <Text style={styles.headerText}>The new wallet currently has {balance} XRP</Text> */}
        {/* <Button title={paymentButtonText} onPress={sendPayment} /> */}
        <Text style={styles.infoText}>Watch the console to see the payment flow in action!</Text>
        {/* <Text style={styles.italicText}>{statusText}</Text> */}
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  infoText: {
    textAlign: "center",
    marginBottom: 10
  },
  italicText: {
    fontStyle: "italic"
  }
});

export default SendXRP;
