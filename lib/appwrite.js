import { Client } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/',
    platform: 'com.kadi.aoraku',
    projectId: '67054a28000c14778908',
    databaseId: '67054be8000a3af5475d',
    userCollectionId: '67054c2900391b16134b',
    videoCollectionId: '67054c43003e7d2dd483',
    storageId: '67054e7f00373de86150'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform)
;