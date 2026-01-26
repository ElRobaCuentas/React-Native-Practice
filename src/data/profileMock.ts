export interface UserProfile {
    id: string;
    names: string;
    lastname: string;
    age: number;
    sex: 'Masculino' | 'Femenino'
    rol: 'ESTUDIANTE' | 'CONDUCTOR' | 'DOCENTE' | 'ADMINISTRATIVO';
}

export const USER_PROFILE_MOCK:UserProfile[] = [

    {
        id: '1',
        names: 'Juan Alberto',
        lastname: 'Perez Lopez',
        age: 21,
        sex: 'Masculino',
        rol: 'ESTUDIANTE'
    },
    {
        id: '2',
        names: 'Maria Fernanda',
        lastname: 'Gomez Sanchez',
        age: 40,
        sex: 'Femenino',
        rol: 'DOCENTE'
    },
    {
        id: '3',
        names: 'Carlos Eduardo',
        lastname: 'Ruiz Diaz',
        age: 35,
        sex: 'Masculino',
        rol: 'CONDUCTOR'
    },
    {
        id: '4',
        names: 'Ana Paula',
        lastname: 'Torres Vega',
        age: 28,
        sex: 'Femenino',
        rol: 'ADMINISTRATIVO'
    },
    {
        id: '5',
        names: 'Luis Miguel',
        lastname: 'Soto Quispe',
        age: 19,
        sex: 'Masculino',
        rol: 'ESTUDIANTE'
    }


]