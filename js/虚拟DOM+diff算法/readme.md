1. diff算法
   会将当下 Virtual DOM 树和旧 Virtual DOM 树之间的差别，然后找出两者的不同之处，从而确保每次只做最必要的改动。

   这个“找不同”的过程——调和过程（Reconciliation），是个重点（敲黑板）。

- react 性能优化：key的使用
   作为一个节点的唯一标识，在使用 key 之前，请务必确认 key 的唯一和稳定。