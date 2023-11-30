import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML:({token})=>{
                return `
                    <h1>Verify your email</h1>
                    <p>Click the link below to verify your email</p>
                    <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify your account</a>                
                `
            }
        },
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: 'user',
            type: 'select',
            // admin:{
            //     condition: ()=>false,
            // },
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'User',
                    value: 'user',
                },
            ],

        },     
    ],
}