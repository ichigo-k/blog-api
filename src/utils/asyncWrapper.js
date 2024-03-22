
export default async function asyncWrapper(fn) {
  try {
    fn
  } catch (error) {
    console.error(error)
  }
}