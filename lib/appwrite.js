import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.kadi.aoraku',
    projectId: '67054a28000c14778908',
    databaseId: '67054be8000a3af5475d',
    userCollectionId: '67054c2900391b16134b',
    videoCollectionId: '670e8ad80013c174fa8e',
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

export const createUser = async(email, password, user) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            user
        )
        if (!newAccount) throw Error
        const avatarUrl = avatars.getInitials(user)
        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                user: user,
                avatar: avatarUrl,
            }
        )
        // account.deleteSession('current')
        // .then(() => {
        //   console.log('Logged out successfully.');
        //   // Now create a new session
        //   return account.createEmailSession('user@example.com', 'password');
        // })
        console.log(newUser,'new userx')
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
        return currentUser.documents[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const signOut = async () => {
    try {
      const session = await account.deleteSession("current");
      console.log('Logged out successfully.')
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
        return posts.documents
    } catch (error) {
        throw new Error
    }
}
  
export const searchPosts = async (query) => {
    try { 
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.search('title', query)]
        )

        if (!posts) throw new Error('Search posts went wrong')
        return posts.documents
    } catch (error) {
        throw new Error
    }
}

export const getUserPosts = async (userId) => {
    try { 
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.search('creator', userId)]
        )
        console.log(posts,'pooost')

        if (!posts) throw new Error('User posts not found ')
        return posts.documents
    } catch (error) {
        throw new Error
    }
}
  

// Create Video Post
export const createVideoPost = async(form) => {
    try {
  
      const newPost = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
        ID.unique(),
        {
          title: form.title,
          thumbnail: form.thumbnailUrl,
          video: form.videoUrl,
          prompt: form.prompt,
          creator: form.userId,
        }
      );
  
      return newPost;
    } catch (error) {
      throw new Error(error);
    }
  }