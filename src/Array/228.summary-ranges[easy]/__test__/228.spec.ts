import summaryRanges from ".."

describe('228. summary ranges', () => {
  it('[0,1,2,4,5,7] => ["0->2","4->5","7"]', () => {
    expect(summaryRanges([0,1,2,4,5,7])).toEqual(["0->2","4->5","7"])
  })
})