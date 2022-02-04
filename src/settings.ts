export type IRoutes = {
    home: string,
    options: string,
    tasks: string
}

export class Settings  {
    static routes : IRoutes =  {
        home: '/',
        options: '/options',
        tasks: '/tasks'
    }
}