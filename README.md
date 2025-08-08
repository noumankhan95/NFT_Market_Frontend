Here’s your README in proper Markdown formatting:

markdown
Copy
Edit
# NFT Marketplace Demo

## Getting Started

### Run the App
```bash
npm run dev
Run the Blockchain State
bash
Copy
Edit
anvil --load-state ./public/state.json
This command will automatically mint 100 USDC tokens to the default Anvil account:
0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

How It Works
The contract uses events to listen for blockchain activity.

For production-level indexing, tools like Rindexer can be used.

For demonstration purposes, events are sufficient.

Import NFT After Purchase
After buying an NFT, you can import it using:

NFT Contract Address: 0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0

Relevant Token ID: (Enter the Token ID you purchased)

Notes
Make sure to have your Anvil node running before starting the app.

USDC tokens are pre-minted for testing.
