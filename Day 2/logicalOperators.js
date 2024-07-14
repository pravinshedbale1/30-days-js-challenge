let isAdhaarAvailable = true;
let isPanAvailable = true;
let is18Completed = false;
let isVotingCardAvailable = false;

if (isAdhaarAvailable && isPanAvailable) {
  console.log("You can open bank account");
}

if (isAdhaarAvailable || isVotingCardAvailable) {
  console.log("You have enough documents to prove Indian nationality");
}

if (!is18Completed) {
  console.log("You are not allowed to drive vehicle");
}
