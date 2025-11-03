function genrateEmail() {
  const date = Date.now();
  const getGmailId = `ostad_user_${date}@gmail.com`;
  return { getGmailId, date };
}

const newEmail = genrateEmail();
// console.log(newEmail);
