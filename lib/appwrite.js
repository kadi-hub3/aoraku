import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
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

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async(email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error
        const avatarUrl = avatars.getInitials( username)
        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount,
                email, username,
                avatar: avatarUrl
            }
        )
        return newUser

    } catch (error) {
        console.log(error)
    }

}

export const signIn = async(email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch(error) {
        console.log(error)
    }
}

export const getAccount = async() => {
    try {
        const currentUser = await account.get()
        return currentUser
    } catch(error){
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await getAccount()
        if (!currentAccount) throw Error
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        console.log(currentUser)

        return currentAccount.documents[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const signOut = async () => {
    try {
      const session = await account.deleteSession("current");
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Get all video Posts
export const getAllPosts = async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId
      );
  
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  }

export const getLatestPosts = async () => {
    try { 
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.orderDesc('$createdAt'), Query.limit(7)]

        )
        } catch (error) {
            throw new Error
        }
}
  