## 涉及方面
***
+ 简单程序的机器指令表示
+ 链表、树等简单数据结构的机器指令表示
+ 利用Windows Subsystem for Liunx在Ubuntu下使用gdb调试程序
+ 通过缓冲区溢出覆盖调用栈ret地址使pc寄存器指向事先设计好的溢出数据段，将溢出数据当作指令执行（数据段不为只读的情况下）
+ 通过源程序指令地址构造恶意代码，然后通过缓冲区溢出攻击执行