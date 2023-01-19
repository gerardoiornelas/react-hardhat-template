import { useEffect, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { ethers } from "ethers";

// Components
import { Navigation } from "../Navigation";
import { Loading } from "../Loading";
import { ColorPaletteGenerator } from "../ColorPaletteGenerator";
import { WalletConnector } from "../WalletConnector";

// ABIs: Import your contract ABIs here
// import TOKEN_ABI from '../../abis/Token.json'

// Config: Import your network config here
// import config from '../../config.json';

function App() {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const loadBlockchainData = async () => {
    // Initiate provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Fetch accounts
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);

    // Fetch account balance
    let balance = await provider.getBalance(account);
    balance = ethers.utils.formatUnits(balance, 18);
    setBalance(balance);

    setIsLoading(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isLoading) {
      loadBlockchainData();
    }
  }, [isLoading]);

  return (
    <Box>
      <Navigation account={account} />

      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Box p={3}>
            <Typography variant="h3" align="center">
              React Hardhat Template
            </Typography>
            <Typography align="center">
              <strong>Your ETH Balance:</strong> {balance} ETH
            </Typography>
            <Typography align="center">
              Edit App.js to add your code here.
            </Typography>
            <Box p={3}>
              <ColorPaletteGenerator />
            </Box>
            <Button onClick={handleOpen}>Wallet Connector</Button>
            <WalletConnector
              isOpen={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default App;
