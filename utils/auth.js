export const createProfile = async (data) => {
  const {id, token, ...other} = data;

  const response = await fetch(
    `http://localhost:5001/home-care-12315/us-central1/api/users/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(other),
    },
  );

  console.log(response.json);

  return await response.json();
};
