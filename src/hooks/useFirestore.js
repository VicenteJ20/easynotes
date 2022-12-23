import { collection, getDocs, where, query, setDoc, doc, deleteDoc } from 'firebase/firestore/lite'
import { useState, useContext } from 'react'
import { db } from '../../firebase'
import { UserContext } from '../context/UserProvider'
import { nanoid } from 'nanoid'

export const useFirestore = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState({})
  const { user } = useContext(UserContext)

  const getData = async () => {
    try {
      setLoading(prev => ({ ...prev, getData: true }))
      const dataRef = collection(db, 'Notes')
      const q = query(dataRef, where('uid', '==', user.uid))
      const querySnapshot = await getDocs(q)
      const dbData = querySnapshot.docs.map(x => x.data())
      setData(dbData)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    } finally {
      setLoading(prev => ({ ...prev, getData: false }))
    }
  }

  const addNote = async (noteData) => {
    try {
      setLoading(prev => ({ ...prev, addNote: true }))
      const newData = {
        id: nanoid(),
        uid: noteData.uid,
        titleSet: noteData.titleSet,
        description: noteData.description,
        fontSelected: noteData.fontSelected,
        backgroundColor: noteData.backgroundColor,
        alignSelected: noteData.alignSelected,
        letterSpacing: noteData.letterSpacing
      }

      const docRef = doc(db, 'Notes', newData.id)
      await setDoc(docRef, newData)
      setData([...data, newData])
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    } finally {
      setLoading(prev => ({ ...prev, addNote: false }))
    }
  }

  const deleteData = async (userid) => {
    try {
      setLoading((prev) => ({ ...prev, deleteData: true }))
      const docRef = doc(db, 'Notes', userid)
      await deleteDoc(docRef)
      setData(data.filter(x => x.id !== userid))
    } catch (err) {
      console.log(err)
    } finally {
      setLoading((prev) => ({ ...prev, deleteData: false }))
    }
  }

  return { data, error, loading, getData, addNote, deleteData }
}
