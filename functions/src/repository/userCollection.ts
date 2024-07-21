import createHttpError from "http-errors";
import { fireStore } from "../config/firebaseConfig";
import { auth } from "firebase-admin";


const collectionConstant = "USERS";

const usersCollection = async () => {
    try {
        const store = await fireStore.collection(collectionConstant).get();
        const docs = store.docs.map((doc) => doc.data());
        return docs;
    } catch (error) {
        console.error("Error accessing the users collection: ", error);
        return createHttpError(500, "Error accessing the users collection");
    }
}


const updateUserCollection = async (uid: string) => {
    try {
        const user = await fireStore.collection(collectionConstant).doc(uid).get();

        if (user.exists) {
            return await fireStore.collection(collectionConstant).doc(uid).update({
                lastUpdated: new Date()
            });
        }

        const getUserData = (await auth().getUser(uid)).toJSON();

        return await fireStore.collection(collectionConstant).doc(uid).set({
            ...getUserData,
            created: new Date(),
            lastUpdated: new Date()
        })
    } catch (error) {
        console.error("Error updating user collection: ", error);
        return createHttpError(500, "Error updating the users collection");
    }
}

export {
    updateUserCollection,
    usersCollection
};
