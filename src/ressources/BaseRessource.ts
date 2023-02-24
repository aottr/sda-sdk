import Client from '../Client';

export default abstract class BaseRessource {
  readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }
}
