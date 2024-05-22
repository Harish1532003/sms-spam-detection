const spamKeywords = [
    "win", "free", "prize", "click", "urgent", "congratulations", "claim", "money",
    "winner", "selected", "lottery", "reward", "cash", "offer", "exclusive", "act now",
    "don't miss", "call now", "limited time", "buy now", "deal", "guaranteed", "discount",
    "cheap", "lowest price", "order now", "miracle", "risk-free", "save big", "special promotion",
    "100% free", "bonus", "bargain", "big discount", "get it now", "trial", "won", "amazing deal",
    "promotion", "instant", "urgent", "hurry", "order today", "once in a lifetime", "free gift",
    "satisfaction guaranteed", "become a member", "gift card", "no purchase necessary", "easy terms",
    "free trial", "exclusive deal", "double your", "best price", "limited offer", "guaranteed success",
    "promise", "top offer", "do not delete", "apply now", "winner", "redeem now", "act fast",
    "new customers only", "no strings attached", "risk-free trial", "special offer", "save money",
    "urgent response needed", "free access", "instant savings", "win big", "act quickly", "once in a lifetime",
    "order now and save", "free consultation", "immediately", "no cost", "get started now", "best rates",
    "limited supplies", "sign up now", "apply today", "best deal", "today only", "lowest rates",
    "big savings", "do it today", "easy payments", "low cost", "free info", "get it free", "join free",
    "new customers", "no obligation", "test drive", "free membership", "exclusive access", "call now",
    "guaranteed results", "free quote", "just for you", "no risk", "special gift", "best value",
    "get now", "immediate action required", "instant access", "quickly", "save up to", "urgent action",
    "free service", "limited time offer", "subscribe now", "trial offer", "win now", "bonus gift",
    "special discount", "free shipping", "lowest price", "no hidden fees", "apply online",
    "best offer", "free bonus", "guaranteed satisfaction", "immediate delivery", "order now",
    "click here", "don't delay", "instant win", "lowest cost", "new offer", "special savings",
    "buy today", "limited supply", "respond now", "today only", "free trial offer", "order today",
    "free access", "save more", "act now"
]

function checkSpam() {
    const smsInput = document.getElementById("smsInput").value;
    const resultDiv = document.getElementById("result");

    if (isSpam(smsInput)) {
        resultDiv.textContent = "This message is Spam.";
        resultDiv.className = "result spam";
    } else {
        resultDiv.textContent = "This message is Not Spam.";
        resultDiv.className = "result not-spam";
    }
}

function isSpam(message) {
    const messageLower = message.toLowerCase();
    return spamKeywords.some(keyword => messageLower.includes(keyword));
}
