import commonChars from ".."

describe('1002. Find Common Characters', () => {
  it('case 1', () => {
    expect(
      commonChars(
        ["bella","label","roller"]
      )
    ).toEqual(
      ["e","l","l"]
    )
  })

  it('case 2', () => {
    expect(
      commonChars(
        ["cool","lock","cook"]
      )
    ).toEqual(
      ["c","o"]
    )
  })
})