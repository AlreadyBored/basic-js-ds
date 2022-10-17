const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
        this.rootOtTree = null;
    }

  root() {
     if (this.rootOtTree) {
        return this.rootOtTree;
     } else {
         return null;
     }
  }

  add(data) {
    if (this.rootOtTree) {
        let current = this.rootOtTree;
        let previos = null;
        while (current) {
            previos = current;
            if (current.data > data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        if (previos.data > data) {
            previos.left = new Node(data);
        } else {
            previos.right = new Node(data);
        }
    } else {
        this.rootOtTree = new Node(data);
    }
  }

  has(data) {
      if (this.rootOtTree) {
          let link = this.rootOtTree;
          while (link) {
            if (link.data === data) {
                return true
            }
            if (link.data > data) {
                link = link.left
            } else {
                link = link.right
            }
          }
      }
      return false
  }
    // if (this.rootOtTree) {
    //     if (data === this.rootOtTree.data) {
    //         return true
    //     }
    //     let recursiveFind = function (link) {
    //         if (link !== null) {
    //             if (link.data === data) {
    //                 return true
    //             } else {
    //                 if (link.right !== null || link.left !== null) {
    //                     return Boolean(recursiveFind(link.left)) || Boolean(recursiveFind(link.right))
    //                 } else {
    //                     return false
    //                 }
    //             }
    //         } else {
    //             return false
    //         }
    //     }
    //     return Boolean(recursiveFind(this.rootOtTree.left)) || Boolean(recursiveFind(this.rootOtTree.right))
    // } else {
    //     return false
    // }

  find(data) {
    if (this.rootOtTree) {
          let link = this.rootOtTree;
          while (link) {
            if (link.data === data) {
                return link
            }
            if (link.data > data) {
                link = link.left
            } else {
                link = link.right
            }
          }
    }
    return null
  }

  // find(data) {
  //   let recursiveFind = function (link) {
  //       if (link) {
  //           if (link.data === data) {
  //               return link
  //           } else {
  //               if (link.right || link.left) {
  //                   let resultLeft = recursiveFind(link.left)
  //                   let resultRight = recursiveFind(link.right)
  //                   if (resultLeft) {
  //                       return resultLeft
  //                   }
  //                   else if (resultRight) {
  //                       return resultRight
  //                   } else {
  //                       return null
  //                   }
  //               } else {
  //                   return null
  //               }
  //           }
  //       }
  //   }
  //   if (this.rootOtTree) {
  //       return recursiveFind(this.rootOtTree)
  //   } else {
  //       return null
  //   }
  // }

  // remove(data) {
  //   if (this.rootOtTree) {
  //       let previos = this.rootOtTree;
  //       let current = this.rootOtTree;
  //       while (current) {
  //           if (current.data === data) {
  //               // если у узла нет потомков
  //               if (current.left === null && current.right === null) {
  //                  if (previos.left === current) {
  //                      previos.left = null;
  //                  } else {
  //                      previos.right = null
  //                   }
  //                  return "OK"
  //               }
  //               // если есть 1 потомок - левый или правый
  //               else if (current.left === null || current.right === null) {
  //                   if (current.left === null) {
  //                       if (previos.left === current) {
  //                           previos.left = current.right
  //                       } else {
  //                            previos.right = current.right
  //                       }
  //                   } else {
  //                       if (previos.left === current) {
  //                           previos.left = current.left
  //                       } else {
  //                            previos.right = current.left
  //                       }
  //                   }
  //                   return "OK"
  //               }
  //               else {
  //                   return "Other"
  //               }
  //           }
  //           else if (current.data > data) {
  //               previos = current;
  //               current = current.left;
  //           } else {
  //               previos = current;
  //               current = current.right;
  //           }
  //       }
  //   } else {
  //       return 'Tree is empty'
  //   }
  // }
  remove(data) {
    let current = this.rootOtTree
    let previos = this.rootOtTree
    // if (this.has(data)) {
        if (this.rootOtTree) {
            // удаление корня
            if (this.rootOtTree.data === data) {
                current = current.right;
                while (current.left) {
                    previos = current;
                    current = current.left;
                }
                //если у самого левого элемента есть поддерево
                if (current.right) {
                    previos.left = current.right;
                    current.left = this.rootOtTree.left
                    current.right = this.rootOtTree.right
                    this.rootOtTree = current
                } //у самого левого элемента правого поддерева нет потомков
                else {
                    previos.left = null;
                    current.left = this.rootOtTree.left
                    current.right = this.rootOtTree.right
                    this.rootOtTree = current;
                }
            }
            // не корень
            else {
                while (current) {
                    if (current.data === data) {
                        // нет потомков
                        if (current.left === null && current.right === null) {
                            if (current.data > previos.data) {
                                previos.right = null
                            } else {
                                previos.left = null
                            }
                            return this
                        }
                        // один потомок
                        else if (current.left === null || current.right === null) {
                            if (current.data > previos.data) {
                                if (current.left === null) {
                                    previos.right = current.right
                                } else {
                                    previos.right = current.left
                                }
                            } else {
                                if (current.left === null) {
                                    previos.left = current.right
                                } else {
                                    previos.left = current.left
                                }
                            }
                            return this
                        } // если есть оба потомка
                        else {
                            if (current.right.left) {
                                let tempElementprevios = current.right
                                let temElement = tempElementprevios.left
                                while (temElement.left) {
                                    temElement = temElement.left
                                }
                                if (temElement.data > previos.data) {
                                    if (temElement.right === null) {
                                        previos.right = temElement
                                        temElement.right = current.right
                                        temElement.left = current.left
                                        tempElementprevios.left = null
                                    }
                                } else {
                                    if (current.right !== null) {
                                        previos.left = temElement
                                        temElement.right = current.right
                                        temElement.left = current.left
                                        tempElementprevios.left = null
                                    }
                            }
                            return this
                                // let elementForReplace = current.right;
                                // let elementForReplacePrevios = current
                                // while (elementForReplace.left) {
                                //     elementForReplacePrevios = elementForReplace
                                //     elementForReplace = elementForReplace.left
                                // }
                                // if (elementForReplace.right) {
                                //     return this
                                // } else {
                                //     previos.right = elementForReplace
                                //     elementForReplace.left = current.left
                                //     elementForReplace.right = current.right;
                                // }
                            } else {
                                if (previos.data > current.data) {
                                    previos.left = current.right;
                                    previos.left.left = current.left
                                } else {
                                    previos.right = current.right;
                                    previos.right.left = current.left
                                }
                            }


                            // if (elementForReplace.right === null) {
                            //     if (previos.data < data) {
                            //         previos.right = elementForReplace;
                            //         if (elementForReplace !== current.right) {
                            //             elementForReplace.right = current.right
                            //         }
                            //         elementForReplace.left = current.left
                            //     } else {
                            //         previos.left = elementForReplace;
                            //         elementForReplace.right = current.right
                            //         elementForReplace.left = current.left
                            //     }
                            // } else {
                            //     elementForReplacePrevios.left = elementForReplace.right
                            //     previos.right = elementForReplace;
                            //     elementForReplace.right = current.right
                            //     elementForReplace.left = current.left
                            // }
                            return this
                        }
                    }
                    else if (current.data > data) {
                        previos = current
                        current = current.left
                    } else {
                        previos = current
                        current = current.right
                    }
                }
                return this // ничего не нашлось
            }
    } else {
        return this
    }
  }


  min() {
    if (this.rootOtTree) {
        if (this.rootOtTree.left) {
            let current = this.rootOtTree.left;
            while (current) {
                if (current.left) {
                    current = current.left;
                } else {
                    return current.data;
                }
            }
        } else {
            return this.rootOtTree.data
        }
    } else {
        return null
    }
  }

  max() {
    if (this.rootOtTree) {
        if (this.rootOtTree.right) {
            let current = this.rootOtTree.right;
            while (current) {
                if (current.right) {
                    current = current.right;
                } else {
                    return current.data;
                }
            }
        } else {
            return this.rootOtTree.data
        }
    } else {
        return null
    }
  }
}

module.exports = {
  BinarySearchTree
};