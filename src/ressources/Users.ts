import { SuccessResponse, ErrorResponse } from '../schemas/facileApi';
import { UserSchema } from '../schemas';
import BaseRessource from './BaseRessource';

export default class Users extends BaseRessource {
  async all() {
    return fetch(`${this.client.baseUrl}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.client.token || ''}`,
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const resp = await response.json() as SuccessResponse;
          return resp;
        }
        const resp = await response.json() as ErrorResponse;
        throw new Error(resp.message);
      });
  }

  async me(): Promise<UserSchema> {
    return fetch(`${this.client.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.client.token || ''}`,
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const resp = await response.json() as SuccessResponse;
          return resp.data;
        }
        const resp = await response.json() as ErrorResponse;
        throw new Error(resp.message);
      });
  }
}
