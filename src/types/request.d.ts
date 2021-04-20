interface PassWord {
    user: {
        domain: {
            name: string
        }
        name: string
        password: string
    }
}

interface Scope {
    project: {
        id: string
        name?: string
    }
}

interface Identify {
    methods: string[]
    password: PassWord
}



export interface Token {
    auth: {
        identity: Identify
        scope: Scope
    }
        
}