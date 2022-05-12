export default function buildMakePlayer() {
  return function makePlayer({ firstName, lastName, number, height, weight }: any = {}) {
    if (!firstName) {
      throw new Error('Player source must contain first name.')
    }

    return Object.freeze({
      getFirstName: () => firstName,
      getLastType: () => lastName,
      getNumber: () => number,
      getHeight: () => height,
      getWeight: () => weight,
    })
  }
}