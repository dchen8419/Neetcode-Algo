// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there
//  will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. 
// Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.


// Example 1:

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
// Example 2:

// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3


var numUniqueEmails = function(emails: string[]) {
    //create a new Set called emailSet that is strickly typed string
    const emailSet = new Set<string>();
    //create a for loop that will go through the length of the email string
    for ( let i = 0; i < emails.length; i ++ ) {
        //array destructuring emails
        const [local, domain] = emails[i].split("@");
        //create a veriable that replaced at the decimal or plus sign
        const newLocal = local.replace(/\./g,"").split("+");
        const uniqueEmail = newLocal[0]+"@"+domain;
        emailSet.add(uniqueEmail);
    }
    return emailSet.size;
};


/**
 * 1. Create empty set.
 * 2. Loop through emails.
 *      a. Create variable local name and domain name from split at '@'.
 *      b. Delete '.' from local name.
 *      c. Split local name from '+'.
 *      d. Create new uniqueEmail variable to hold local + '@' + domain name.
 *      e. Add uniqueEmail to set.
 * 3. Return the size of the set
 */
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])) //2
// console.log(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])) //3
