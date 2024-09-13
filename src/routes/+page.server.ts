import { db } from "$lib/firebase/firebase";
import type { Score } from "$lib/score";
import { collection, getDocs } from "firebase/firestore";

export async function load() {
    try {
        const querySnapshot = await getDocs(collection(db, 'scores'));
        const docs = querySnapshot.docs.map<Score>(doc => doc.data().score as Score);
        console.log(docs);
        return { scores: docs };
    }
    catch (error) {
        console.error('There was an error fetching the data', error);
    }
}
