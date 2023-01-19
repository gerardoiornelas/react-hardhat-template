import React, { useState } from "react";
import PropTypes from "prop-types";
import { ethers } from "ethers";
import { Modal, Typography, Button, ThemeProvider } from "@mui/material";

import { StyledWalletConnector, theme } from "./WalletConnector.styled";

const WalletConnector = ({ isOpen, handleClose }) => {
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await provider.listAccounts();
        setAddress(accounts[0]);
        setProvider(provider);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const connectToCoinbase = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await provider.listAccounts();
        setAddress(accounts[0]);
        setProvider(provider);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying Coinbase Wallet!"
      );
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledWalletConnector sx={{ border: "1px solid white" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={connectToMetaMask}
          >
            Connect to MetaMask
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={connectToCoinbase}
          >
            Connect to Coinbase Wallet
          </Button>
          {address && (
            <Typography variant="subtitle1">
              Connected to Ethereum account: {address}
            </Typography>
          )}
        </StyledWalletConnector>
      </Modal>
    </ThemeProvider>
  );
};

WalletConnector.propTypes = {
  children: PropTypes.node,
};

export default WalletConnector;
