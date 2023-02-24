import Client from '../Client';

test('Login', async () => {
  const client = new Client();
  //const token = await client.getToken('alex', '*******');
  //expect(token).not.toBeNull()
  expect(await client.getToken('TestUser', 'WrongPassword')).toBeNull();
});

test('Config', async () => {
  const api = new Client();
  expect((await api.getConfig()).apiVersion).toEqual('1.5.2');
})
