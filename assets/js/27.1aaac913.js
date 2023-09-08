(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{357:function(a,s,t){"use strict";t.r(s);var v=t(3),e=Object(v.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"mysql执行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql执行流程"}},[a._v("#")]),a._v(" MySQL执行流程")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230305160110062.png",alt:"image-20230305160110062"}})]),a._v(" "),s("ul",[s("li",[a._v("连接器：管理客户端登录，用户身份验证；")]),a._v(" "),s("li",[a._v("缓存：执行查询语句时候，先查询缓存；")]),a._v(" "),s("li",[a._v("分析器：（解析器）将SQL语句中关键字进行解析，生成一颗对应的“语法树”，来判断语法是否正确；")]),a._v(" "),s("li",[a._v("优化器：将语法树转换成执行计划，并生成MySQL认为最好的执行计划；")]),a._v(" "),s("li",[a._v("执行器：执行过程，调用存储引擎提供的api，来执行执行计划，执行之前进行权限验证，表、数据库、操作是否符合权限；")]),a._v(" "),s("li",[a._v("存储引擎：定义MySQL中数据的存储机制、索引和锁机制等。")])]),a._v(" "),s("h2",{attrs:{id:"存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[a._v("#")]),a._v(" 存储引擎")]),a._v(" "),s("h3",{attrs:{id:"innodb和myisam对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb和myisam对比"}},[a._v("#")]),a._v(" InnoDB和MyISAM对比")]),a._v(" "),s("ol",[s("li",[a._v("InnoDB 支持行级别的锁粒度，MyISAM 不支持，只支持表级别的锁粒度。")]),a._v(" "),s("li",[a._v("MyISAM 不提供事务支持。InnoDB 提供事务支持，实现了 SQL 标准定义了四个隔离级别。")]),a._v(" "),s("li",[a._v("MyISAM 不支持外键，而 InnoDB 支持。")]),a._v(" "),s("li",[a._v("MyISAM 不支持 MVVC，而 InnoDB 支持。")]),a._v(" "),s("li",[a._v("虽然 MyISAM 引擎和 InnoDB 引擎都是使用 B+Tree 作为索引结构，但是两者的实现方式不太一样。")]),a._v(" "),s("li",[a._v("MyISAM 不支持数据库异常崩溃后的安全恢复，而 InnoDB 支持。")]),a._v(" "),s("li",[a._v("InnoDB 的性能比 MyISAM 更强大。")])]),a._v(" "),s("h3",{attrs:{id:"innodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[a._v("#")]),a._v(" InnoDB")]),a._v(" "),s("p",[a._v("存储引擎决定了MySQL会怎样存储引擎，怎样读取和写入数据，也很大程度决定了MySQL的读写性能和数据可靠性。")]),a._v(" "),s("h4",{attrs:{id:"内存架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存架构"}},[a._v("#")]),a._v(" 内存架构")]),a._v(" "),s("ul",[s("li",[a._v("InnoDB In-Memory Structures")]),a._v(" "),s("li",[a._v("InnoDb On-Disk Structures")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230303101308514.png",alt:"image-20230303101308514"}})]),a._v(" "),s("p",[s("strong",[a._v("Buffer Pool")])]),a._v(" "),s("p",[a._v("MySQL不会直接去修改磁盘的数据，因为这样做太慢了，MySQL会先改内存，然后记录redo log，等有空了再刷磁盘，如果内存里没有数据，就去磁盘load。")]),a._v(" "),s("p",[a._v("Buffer Pool采用基于LRU的算法来管理内存：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230303102405018.png",alt:"image-20230303102405018"}})]),a._v(" "),s("p",[s("strong",[a._v("Change Buffer")])]),a._v(" "),s("p",[a._v("如果要修改MySQL的数据，并且包含该数据的页不在内存中，那么先把修改记到一个Change Buffer的地方，同时记录redo log，然后延迟将页面加载到内存中")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("merge：Change Buffer -> Buffer Pool")])]),a._v(" "),s("li",[s("strong",[a._v("purge：Buffer Pool -> Disk")])])]),a._v(" "),s("p",[s("strong",[a._v("Adaptive Hash Index")])]),a._v(" "),s("p",[a._v("MySQL索引，不管是内存的还是磁盘的，都是B+树，B+树的查找次数取决于树的深度。空间换时间的方法，MySQL会自动评估这张表建立这个索引是否值得。")]),a._v(" "),s("p",[s("strong",[a._v("Log Buffer")])]),a._v(" "),s("p",[a._v("Log Buffer 里的redo log，会被刷到磁盘里")]),a._v(" "),s("h4",{attrs:{id:"磁盘架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘架构"}},[a._v("#")]),a._v(" 磁盘架构")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230303101308514.png",alt:"image-20230303101308514"}})]),a._v(" "),s("p",[s("strong",[a._v("表空间")])]),a._v(" "),s("ul",[s("li",[a._v("The System Tablespace")]),a._v(" "),s("li",[a._v("File-Per-Table Tablespaces")]),a._v(" "),s("li",[a._v("General Tablespace")]),a._v(" "),s("li",[a._v("Undo Tablespaces")]),a._v(" "),s("li",[a._v("Temporary Tablespaces")])]),a._v(" "),s("h2",{attrs:{id:"索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),s("h2",{attrs:{id:"查询性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询性能优化"}},[a._v("#")]),a._v(" 查询性能优化")]),a._v(" "),s("h2",{attrs:{id:"事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[a._v("#")]),a._v(" 事务")])])}),[],!1,null,null,null);s.default=e.exports}}]);