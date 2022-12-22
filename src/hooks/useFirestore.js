import { collection, getDocs, where, query } from 'firebase/firestore/lite'
import { useState, useEffect, useContext } from 'react'
import { db } from '../../firebase'
import { UserContext } from '../context/UserProvider'

export const useFirestore = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const { user } = useContext(UserContext)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const dataRef = collection(db, 'Notes')
      const q = query(dataRef, where('uid', '==', user.uid))
      const querySnapshot = await getDocs(q)
      const dbData = querySnapshot.docs.map(x => ({ id: x.id, ...x.data() }))
      setData(dbData)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading }
}
