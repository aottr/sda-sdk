export default class Client {
  baseUrl: string;

  token: string | undefined;

  constructor(baseUrl = 'https://shadedoes3d.com/api', token = '') {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  /* eslint @typescript-eslint/no-unsafe-return: "off" */
  async getToken(username: string, password: string): Promise<string | null> {
    interface ErrorResponse {
      status: string;
      message: string;
    }

    interface SuccessResponse {
      status: string;
      data: any;
    }

    const config = {
      method: 'POST',
      headers: {
        /* eslint quote-props: "off" */
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };

    return fetch(`${this.baseUrl}/auth`, config)
      .then(async (response) => {
        try {
          const resp = await response.json() as SuccessResponse;
          if (resp.status === 'success') {
            /* eslint @typescript-eslint/no-unsafe-member-access: "off" */
            return resp.data.token as string;
          }
        } catch (_) {
          console.log('no');
        }
        return null;
      });
  }
}
