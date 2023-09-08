(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{375:function(a,t,s){"use strict";s.r(t);var e=s(3),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"线程和进程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程和进程的区别"}},[a._v("#")]),a._v(" 线程和进程的区别")]),a._v(" "),t("p",[a._v("进程是正在运行程序的实例，包含了线程。")]),a._v(" "),t("p",[a._v("不同进程拥有不同的进程空间，一个进程中的线程共用进程内存空间")]),a._v(" "),t("p",[a._v("线程上下文切换成本低")]),a._v(" "),t("h2",{attrs:{id:"并行和并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并行和并发"}},[a._v("#")]),a._v(" 并行和并发")]),a._v(" "),t("p",[a._v("时间片轮转。")]),a._v(" "),t("p",[a._v("并发，在一段时间内，处理多件事情。")]),a._v(" "),t("p",[a._v("并行，同一时间处理多件事情。")]),a._v(" "),t("h2",{attrs:{id:"创建线程的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建线程的方式"}},[a._v("#")]),a._v(" 创建线程的方式")]),a._v(" "),t("p",[a._v("继承Thread类")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607143846645.png",alt:"image-20230607143846645"}})]),a._v(" "),t("p",[a._v("实现Runable接口")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607143903717.png",alt:"image-20230607143903717"}})]),a._v(" "),t("p",[a._v("实现Callable接口，可以拿到返回值")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607144018045.png",alt:"image-20230607144018045"}})]),a._v(" "),t("p",[a._v("使用线程池")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607144053449.png",alt:"image-20230607144053449"}})]),a._v(" "),t("h2",{attrs:{id:"线程状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程状态"}},[a._v("#")]),a._v(" 线程状态")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607144549088.png",alt:"image-20230607144549088"}})]),a._v(" "),t("h2",{attrs:{id:"notify和notifall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notify和notifall"}},[a._v("#")]),a._v(" notify和notifAll")]),a._v(" "),t("p",[a._v("随机唤醒一个线程，和唤醒所有线程。object.notif();")]),a._v(" "),t("h2",{attrs:{id:"wait和sleep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wait和sleep"}},[a._v("#")]),a._v(" wait和sleep")]),a._v(" "),t("p",[t("strong",[a._v("共同点")])]),a._v(" "),t("p",[a._v("wait() ，wait(long) 和 sleep(long) 的效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态")]),a._v(" "),t("p",[t("strong",[a._v("不同点")])]),a._v(" "),t("ol",[t("li",[a._v("方法归属不同")])]),a._v(" "),t("p",[a._v("sleep(long) 是 Thread 的静态方法而 wait()，wait(long) 都是 Object 的成员方法，每个对象都有")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("醒来时机不同")])]),a._v(" "),t("p",[a._v("执行 sleep(long) 和 wait(long) 的线程都会在等待相应毫秒后醒来wait(long) 和 wait() 还以被 notify 唤醒，wait() 如果不唤醒就一直等下去它们都可以被打断唤醒")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("锁特性不同（重点）")])]),a._v(" "),t("p",[a._v("wait 方法的调用必须先获取 wait 对象的锁，而 sleep 则无此限制wait 方法执行后会释放对象锁，允许其它线程获得该对象锁（我放弃 cpu，但你们还可以用）而 sleep 如果在synchronized 代码块中执行，并不会释放对象锁（我放弃 cpu，你们也用不了）")]),a._v(" "),t("h2",{attrs:{id:"如何停止线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何停止线程"}},[a._v("#")]),a._v(" 如何停止线程")]),a._v(" "),t("p",[a._v("采用退出标记")]),a._v(" "),t("p",[a._v("使用interrupt")]),a._v(" "),t("p",[a._v("打断阻塞的线程（ sleep，wait，join ）的线程，线程会抛出InterruptedException异常\n打断正常的线程，可以根据打断状态来标记是否退出线程")]),a._v(" "),t("h2",{attrs:{id:"synchronized"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized"}},[a._v("#")]),a._v(" synchronized")]),a._v(" "),t("p",[a._v("最多一个线程获得锁，其它线程会阻塞。")]),a._v(" "),t("p",[a._v("Java对象头")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("---------------------------------------------------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\t\t\t\t\tObject Header "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v(" bits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\t\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-------------------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-------------------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\t\tMark Word "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" bits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\t\tKlass Word "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("32bits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\t    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-------------------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-------------------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n")])])]),t("p",[a._v("创建锁记录对象，每个线程的栈帧都会包含一个所记录，内部存储锁定的对象的Mark Work")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607160850940.png",alt:"image-20230607160850940"}})]),a._v(" "),t("p",[a._v("当线程尝试锁定某对象，判断对象头中是否为空闲状态，如果空闲，则将栈帧的锁记录与对象头交换")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607161644606.png",alt:"image-20230607161644606"}})]),a._v(" "),t("p",[a._v("如果此时有其它线程想获取该轻量锁，那么会失败，则进行如下步骤")]),a._v(" "),t("p",[a._v("为该对象申请Monitor锁，将对象头指向Monitor锁地址，自己进入EntryList中等待。")]),a._v(" "),t("p",[a._v("锁结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230607152121587.png",alt:"image-20230607152121587"}})]),a._v(" "),t("p",[a._v("等原来获取到轻量级锁的线程，解锁，按照Monitor解锁的流程，情况Owner，唤醒EntryList。")]),a._v(" "),t("p",[t("strong",[a._v("自旋优化")])]),a._v(" "),t("h2",{attrs:{id:"jmm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmm"}},[a._v("#")]),a._v(" JMM")]),a._v(" "),t("p",[a._v("Java内存模型，划分为工作内存，共享内存。线程之间是相互隔离的，交互需要主内存。")]),a._v(" "),t("h2",{attrs:{id:"cas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cas"}},[a._v("#")]),a._v(" CAS")]),a._v(" "),t("p",[a._v("Compare And Swap")]),a._v(" "),t("p",[a._v("乐观锁，如果旧的值，和原来值不一致，则会自旋（重新进行更新）")]),a._v(" "),t("h2",{attrs:{id:"volatile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volatile"}},[a._v("#")]),a._v(" volatile")]),a._v(" "),t("p",[a._v("不从缓存，从内存中读取数据。禁止指令重排序")]),a._v(" "),t("h2",{attrs:{id:"aqs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aqs"}},[a._v("#")]),a._v(" AQS")]),a._v(" "),t("p",[a._v("抽象队列同步器。内部维护一个state变量，如果线程将state成功修改为1，则表示该线程获得锁，否则线程会被标记到AQS中的队列中。")]),a._v(" "),t("h2",{attrs:{id:"reentrantlock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reentrantlock"}},[a._v("#")]),a._v(" ReentrantLock")]),a._v(" "),t("p",[a._v("可中断，设置超时时间，公平锁，可重入。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230608150856820.png",alt:"image-20230608150856820"}})]),a._v(" "),t("h2",{attrs:{id:"synchronized和lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized和lock"}},[a._v("#")]),a._v(" synchronized和lock")]),a._v(" "),t("p",[a._v("前者，C++实现，自动释放锁。后者java实现，需要lock，unlock。")]),a._v(" "),t("p",[a._v("可打断，在获取锁阻塞时，其它线程可以打断他的打断过程。")]),a._v(" "),t("h2",{attrs:{id:"concurrenthashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap"}},[a._v("#")]),a._v(" ConcurrentHashMap")]),a._v(" "),t("p",[a._v("底层数据结构与HashMap一致，数组+链表/红黑二叉树")]),a._v(" "),t("p",[a._v("加锁：采用CAS添加新节点，锁定链表或者红黑树的首节点")]),a._v(" "),t("h2",{attrs:{id:"线程池使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池使用场景"}},[a._v("#")]),a._v(" 线程池使用场景")]),a._v(" "),t("h3",{attrs:{id:"分批执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分批执行"}},[a._v("#")]),a._v(" 分批执行")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230608201218779.png",alt:"image-20230608201218779"}})]),a._v(" "),t("h3",{attrs:{id:"汇总信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#汇总信息"}},[a._v("#")]),a._v(" 汇总信息")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230608201826666.png",alt:"image-20230608201826666"}})]),a._v(" "),t("h3",{attrs:{id:"异步调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步调用"}},[a._v("#")]),a._v(" 异步调用")]),a._v(" "),t("p",[a._v('@Async("线程池")')]),a._v(" "),t("h2",{attrs:{id:"控制方法的并发量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制方法的并发量"}},[a._v("#")]),a._v(" 控制方法的并发量")]),a._v(" "),t("p",[a._v("信号量，限流。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Semaphore")]),a._v(" semaphore "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Semaphore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取信号量")]),a._v("\nsemaphore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("acquire")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 释放信号量")]),a._v("\nsemaphore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("release")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"threadlocal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal"}},[a._v("#")]),a._v(" ThreadLocal")]),a._v(" "),t("p",[a._v("实现资源对象的线程隔离")]),a._v(" "),t("p",[a._v("每个线程内有一个ThreadLocalMap类型的成员变量，用来存储资源对象。")]),a._v(" "),t("p",[a._v("调用set方法，就是以ThreadLocal作为key，资源对象作为value，放入当前线程的ThreadLocalMap集合中")]),a._v(" "),t("p",[a._v("调用get方法，同理。")]),a._v(" "),t("p",[a._v("调用remove方法，同理。")]),a._v(" "),t("p",[a._v("ThreadLocalMap内存泄露，需要手动调用remove释放一下。")]),a._v(" "),t("h3",{attrs:{id:"底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#底层原理"}},[a._v("#")]),a._v(" 底层原理")]),a._v(" "),t("p",[a._v("每个Thread类都有一个Map，当需要存储一个"),t("code",[a._v("ThreadLocal<T> tl = new ThreadLocal")]),a._v("，值为v时，Thread中的map存储方式为"),t("code",[a._v("map.set(tl, v)")]),a._v("，这样线程取指定ThreadLocal时，只需要在自己线程内map.get(tl)。")]),a._v(" "),t("p",[a._v("使用方式是")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" tl "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ntl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ntl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ntl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("实际上是，Thread中的ThreadLocalMap存了多个ThreadLocal。")])])}),[],!1,null,null,null);t.default=r.exports}}]);