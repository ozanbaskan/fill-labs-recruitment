import config from "../config";

/**
 * 
 * @returns { Promise<{ name: string, email: string, phone: string, CreatedAt: string, UpdatedAt: string, ID: number }[] }
 */
export async function getAllUsers() {
    const response = await fetch(config.apiUrl + "/users")
    return await response.json();
}

/**
 * 
 * @param {number} id 
 * @returns { Promise<{ name: string, email: string, phone: string, CreatedAt: string, UpdatedAt: string, ID: number  }> | false }
 */
export async function getUserById(id) {
    try {
        const response = await fetch(config.apiUrl + `/users/${id}`)
        const user = await response.json();
        return user.ID ? user : false;
    } catch (_) {
        return false;
    }
}

/**
 * 
 * @param { { name: string, email: string, phone: string, CreatedAt: string, UpdatedAt: string, ID: number } } userInformation 
 * @returns { Promise<boolean> }
 */
 export async function createUser(userInformation) {
    try {
        const response = await fetch(config.apiUrl + `/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInformation)
        });
        const user = await response.json();
        return user.ID ? user : false;
    } catch (_) {
        return false;
    }
}

/**
 * 
 * @param {number} id 
 * @returns { Promise<{ name: string, email: string, phone: string, CreatedAt: string, UpdatedAt: string, ID: number }> }
 */
 export async function deleteUserById(id) {
    try {
        const response = await fetch(config.apiUrl + `/user/${id}`, {
            method: "DELETE"
        })
        const user = await response.json();
        return user.ID || false;
    } catch (_) {
        return false;
    }
}

/**
 * 
 * @param {number} id 
 * @param { { name: string, email: string, phone: string, CreatedAt: string, UpdatedAt: string, ID: number } } userInformation 
 * @returns { Promise<boolean> }
 */
export async function updateUserById(userInformation) {
    try {
        const response = await fetch(config.apiUrl + `/user/${userInformation.ID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInformation)
        })
        return await response.json();
    } catch (_) {
        return false;
    }
}