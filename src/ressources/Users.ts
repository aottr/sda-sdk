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
    }).then(async (response) => {
      if (response.ok) {
        const resp = (await response.json()) as SuccessResponse;
        return resp.data as Array<UserSchema>;
      }
      const resp = (await response.json()) as ErrorResponse;
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
    }).then(async (response) => {
      if (response.ok) {
        const resp = (await response.json()) as SuccessResponse;
        return resp.data as UserSchema;
      }
      const resp = (await response.json()) as ErrorResponse;
      throw new Error(resp.message);
    });
  }

  async birthdays() {
    return fetch(`${this.client.baseUrl}/v2/users/birthdays`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.client.token || ''}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const resp = (await response.json()) as SuccessResponse;
        return resp.data as [
          {
            discord: string;
          },
        ];
      }
      const resp = (await response.json()) as ErrorResponse;
      throw new Error(resp.message);
    });
  }
}
