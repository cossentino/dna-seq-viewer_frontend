
export default async function getSequence(id = 0) {
  const data = await fetch('http://127.0.0.1:8000/test')
    .then(resp => resp.json())
  return data
}

export async function saveSequence() {

}