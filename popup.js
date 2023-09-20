document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", handler); // Change 'click' to 'submit' for the form
});

function handler(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private_key").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;
    // Use 'test_a' consistently for the test address
    const test_a = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    // PROVIDER
    const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K"
    );

    let wallet = new ethers.Wallet(private_key, provider); // Remove extra space

    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };
    var a = document.getElementById("link");
    a.href = "somelink url";
    
    wallet.sendTransaction(tx).then((txObj) => {
        console.log("txHash", txObj.hash);
        document.getElementById("center").style.display = "none";
        const a = document.getElementById("link");
        a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`; // Use backticks for string interpolation
        document.getElementById("link").style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("check_balance").addEventListener("click", checkBalance); // Change 'check_blance' to 'checkBalance'
});

function checkBalance() {
    document.getElementById("center").style.display = "flex";

    // PROVIDER
    const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/Bawa485pp83Dww2fTjrSCg7yHLZECw-K"
    );
    
    const address = document.getElementById("address").value;
    provider.getBalance(address).then((balance) => {
        // Convert a currency unit from wei together
        const balanceInEth = ethers.utils.formatEther(balance);
        document.getElementById("check_balance").innerText = `Your Balance: ${balanceInEth} MATIC`; // Use backticks for string interpolation
        console.log(`balance: ${balanceInEth} ETH`); // Use backticks for string interpolation
        document.getElementById("center").style.display = "none";
    });
}
