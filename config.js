export const api = {
    port: process.env.API_PORT || 3000
};

export const jwt_config ={
    secret: process.env.JWT_SECRET || 'notasecret!'
};