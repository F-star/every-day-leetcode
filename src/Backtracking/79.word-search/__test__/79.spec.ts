import exist from ".."

describe('79', () => {
  it('case1', () => {
    expect(
      exist(
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "ABCCED"
      )
    ).toBe(true)
  })

  it('case2', () => {    
    expect(
      exist(
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "SEE"
      )
    ).toBe(true)
  })

  it('case3', () => {    
    expect(
      exist(
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "ABCB"
      )
    ).toBe(false)
  })
})
