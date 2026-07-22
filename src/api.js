export async function fetchSampleUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    console.log("Finished fetching users.");
  }
}

export function fetchSampleUsersPromise() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users =>
      users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email
      }))
    )
    .catch(error => {
      console.error(error);
      return [];
    });
}