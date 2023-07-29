import { useEffect, useState } from "react";
import axios from "./api/axios";

const App = () => {
  const [augments, setAugments] = useState([]);

  useEffect(() => {
    const fetchAugments = async () => {
      try {
        const refresh = await axios.post('/augments');
        const response = await axios.get('/augments');
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    }

    fetchAugments();
  }, [])

  return (
    <div>
      hi
    </div>
  );
}

export default App;
