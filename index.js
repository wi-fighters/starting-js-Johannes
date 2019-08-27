function tellFortune(children, partnerName, location, job) {
  return `You will be a ${job} in ${location} and married to ${partnerName} with ${children} children.`;
}
console.log(tellFortune(3, "Steffi", "Berlin", "web developer"));
console.log(tellFortune(2, "Sabine", "Hamburg", "psychologist"));
console.log(tellFortune(4, "Karo", "Marburg", "teacher"));
