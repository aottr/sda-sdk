export default class Client {

    baseUrl: string;
    token: string | undefined;

    constructor(baseUrl = 'https://shadedoes3d.com/api', token = '') {
        this.baseUrl = baseUrl;
        this.token = token;
    }

    async getToken(username: string, password: string) {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }

        return fetch(`${this.baseUrl}/auth`, config)
            .then(async (response) => {
                let resp: any = {};
                try {
                    resp = await response.json();
                } catch (_) {

                }
                if (resp.status === 'success')
                    return resp.data.token;

                return null;
            });
    }
}