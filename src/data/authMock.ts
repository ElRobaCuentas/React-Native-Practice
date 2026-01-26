
export interface AuthData {
    id: string;
    email: string;
    phone: string;
    password: string;
}

export const USER_AUTH_MOCK: AuthData[] = [

   {
        id: '1',
        email: 'juan.perez@unmsm.edu.pe',
        phone: '999111222',
        password: 'jp1234'
    },
    {
        id: '2',
        email: 'maria.gomez@unmsm.edu.pe',
        phone: '999333444',
        password: 'mg4567'
    },
    {
        id: '3',
        email: 'carlos.ruiz@unmsm.edu.pe', // El conductor
        phone: '999555666',
        password: 'cr7897'
    },
    {
        id: '4',
        email: 'ana.torres@unmsm.edu.pe',
        phone: '999777888',
        password: 'at0005'
    },
    {
        id: '5',
        email: 'luis.soto@unmsm.edu.pe',
        phone: '999999000',
        password: 'ls1115'
    }
];