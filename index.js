function produceDrivingRange {
  return class {
    constructor(range){
    this.range = range
  }

  returnRange(blockRange){
    return blockRange if this.range <= 10
  }
  }
}
