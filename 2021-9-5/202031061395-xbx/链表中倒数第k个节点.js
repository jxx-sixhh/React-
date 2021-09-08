/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 递归思路
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let Node = function(data) {
    this.data = data // 数据
    this.next = null // 指针
}
// 创建新的节点
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3

var getKthFromEnd = function (head, k) {
    var a=head,len=0;
    while(a)
    {
        a=a.next;
        len++;
    }
    a=head;
    for(var i=0;i<len-k;i++)
    {
        a=a.next;
    }
    return a;
};
var b=getKthFromEnd(node1,3);
console.log(b);//1