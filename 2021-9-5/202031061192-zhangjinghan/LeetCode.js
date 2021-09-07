/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    // node指向头结点
    // len用来存储链表的长度
    let node = head, len = 0;
    // 向后遍历获得链表的长度
    while (node) {
        node = node.next;
        len++;
    }
    // 令node指向头结点
    node = head;
    // 重新遍历找到倒数第k个结点
    for (let i = 0; i < len - k; i++) {
        node = node.next;
    }
    // 截取倒数第k个结点到最后一个结点,形成新的链表
    return node; 
};