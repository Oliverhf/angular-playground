export interface Pokemon {
    id: number,
    name: string,
    type: string,
    isActive: boolean,
    isStylish: boolean,
    isCool: boolean,
    acceptTerms: boolean
}

export interface PokemonType {
    key: number,
    value: string
}