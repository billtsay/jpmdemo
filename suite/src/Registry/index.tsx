import React from "react"

export type AppTp = {
    appId: number,
    appName: string,
    imageUrl: string,
    website: string,
    category: string
};

const AppsList: AppTp[] = [
    {
        appId: 0,
        appName: 'Fakebook',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
        website:
            'http://localhost:5555',
        category: 'SOCIAL',
    },
    {
        appId: 2,
        appName: 'WhatsApp',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
        website:
            'https://www.whatsapp.com/',
        category: 'SOCIAL',
    },
    {
        appId: 3,
        appName: 'Instagram',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
        website:
            'https://www.instagram.com/',
        category: 'SOCIAL',
    },
    {
        appId: 4,
        appName: 'Snapchat',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
        website:
            'https://www.snapchat.com/',
        category: 'SOCIAL',
    },
    {
        appId: 5,
        appName: 'Twitter',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
        website:
            'https://twitter.com/',
        category: 'SOCIAL',
    },
    {
        appId: 8,
        appName: 'LinkedIn',
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
        website:
            'https://www.linkedin.com/',
        category: 'SOCIAL',
    }
]
export default AppsList;
