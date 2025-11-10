function removeKFromList(l, k) {
  const dummy = { value: null, next: l };
  let prev = dummy;
  let cur = l;

  while (cur) {
    if (cur.value === k) {
      prev.next = cur.next; 
    } else {
      prev = cur;
    }
    cur = cur.next;
  }

  return dummy.next;
}

module.exports = {
  removeKFromList
};
