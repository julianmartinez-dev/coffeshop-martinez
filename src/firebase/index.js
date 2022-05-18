import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  getDoc,
  doc
} from 'firebase/firestore';

const getProducts = async () => {
  const db = getFirestore();
  const itemCollection = collection(db, 'productos');
  const documents = await getDocs(itemCollection);
  const products = documents.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products;
};

const getItemByID = async (id) => {
  const docRef = doc(getFirestore(), 'productos', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()}
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};

const getProductsByCategory = async (category) => {
    const db = getFirestore()
    const q = query(collection(db, 'productos'), where('category', '==', category))
    const documents = await getDocs(q)
    const products = documents.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products
}

export { getProducts, getItemByID, getProductsByCategory };
