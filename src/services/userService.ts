export type userType = {
    id: number;
    name: string;
    age: number;
}

export const getUserData = () => {
    return new Promise<userType[]>(resolve => {
        setTimeout(() => {
            resolve([
                { id: 0, name: 'Ada Lovelace', age: 21 },
                { id: 1, name: 'Barbara Liskov', age: 52 },
                { id: 2, name: 'Richard Hamming', age: 38 },
            ]);
        }, 1000)
    })
}