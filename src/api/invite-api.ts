
const BASE_URL = 'https://hraviratoms-server.onrender.com';

export const sendInviteRequest = async (values: any) => {
  return await fetch(
    `${BASE_URL}/api/arshak-qristine-wedding/create`,
    {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
};

export const getGuests = async () => {
  return await fetch(
    `${BASE_URL}/api/arshak-qristine-wedding/guests`
  );
};
