/* The code works but is not secured - the client code can delete array element from outside. Fix this issue */

function getUsers() {
  const users = ["Bill"];

  return {
    addUser: function(name) {
      users.push(name);
      return users.slice(); 
    },

    getUsers: function() {
      return users.slice(); 
    }
  };
}

const u = getUsers();
u.addUser("Jim");
u.addUser("Paul");
console.log(u.getUsers()); 

u.getUsers().pop(); 
console.log(u.getUsers()); 
