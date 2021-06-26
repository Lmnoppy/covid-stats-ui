export const url = 'https://europe-west2-resanance-9a56d.cloudfunctions.net/api'

export function axiosHeaders(token) {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        },
    }

}