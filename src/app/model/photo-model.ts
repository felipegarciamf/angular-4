export interface PhotoModel {
    id: number,
    postDate: Date,
    description: string,
    url: string,
    allowComents: boolean,
    likes: number,
    coments: string,
    userId: number
}