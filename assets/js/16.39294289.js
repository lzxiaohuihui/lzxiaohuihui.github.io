(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{347:function(s,a,t){"use strict";t.r(a);var i=t(3),v=Object(i.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"雪崩问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪崩问题"}},[s._v("#")]),s._v(" 雪崩问题")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228101604601.png",alt:"image-20230228101604601"}})]),s._v(" "),a("p",[a("strong",[s._v("微服务调用链路中的某个服务故障，引起整个链路中的所有微服务都不可用，这就是雪崩。")])]),s._v(" "),a("p",[s._v("解决雪崩问题的常见方式：")]),s._v(" "),a("ul",[a("li",[s._v("超时处理：设定超时时间，请求超过一定时间没有响应就返回错误消息，不会无休止等待。（缓解作用）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228145132374.png",alt:"image-20230228145132374"}})]),s._v(" "),a("ul",[a("li",[s._v("线程隔离：每一个服务弄一个线程池，固定每一个服务的请求数，这样一个服务挂了，不会导致其它服务的资源也耗尽。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228145145610.png",alt:"image-20230228145145610"}})]),s._v(" "),a("ul",[a("li",[s._v("降级熔断："),a("strong",[s._v("断路器")]),s._v("统计某一个服务中的远程调用异常的比例，如果超过一个阈值，那么就停止它对其它服务进行远程调用。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228145155307.png",alt:"image-20230228145155307"}})]),s._v(" "),a("ul",[a("li",[s._v("流量控制：从源头控制流量到这个服务，预防服务一次性接收的请求过多。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228145202583.png",alt:"image-20230228145202583"}})]),s._v(" "),a("p",[a("code",[s._v("总结")])]),s._v(" "),a("p",[a("strong",[s._v("限流")]),s._v("是对服务的保护，避免因瞬间高并发流量而导致服务故障，进而避免雪崩。是一种"),a("strong",[s._v("预防")]),s._v("措施。")]),s._v(" "),a("p",[a("strong",[s._v("超时处理、线程隔离、降级熔断")]),s._v("是在部分服务故障时，将故障控制在一定范围，避免雪崩。是一种"),a("strong",[s._v("补救")]),s._v("措施。")]),s._v(" "),a("h2",{attrs:{id:"sentinel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sentinel"}},[s._v("#")]),s._v(" Sentinel")]),s._v(" "),a("p",[s._v("隔离策略：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("线程池隔离：对每一个服务创建单独一个线程池")])]),s._v(" "),a("li",[a("p",[s._v("信号量隔离：规定每个服务最大有几个线程，然后再去同一个线程池里拿线程。")])])]),s._v(" "),a("p",[s._v("一些感念")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228151232721.png",alt:"image-20230228151232721"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("单机阈值：设置某个资源请求的QPS最大值，超过部分返回流量控制错误。")])]),s._v(" "),a("li",[a("p",[s._v("流控模式：")]),s._v(" "),a("ul",[a("li",[s._v("直接")]),s._v(" "),a("li",[s._v("关联：当/write资源访问量触发阈值时，就会对/read资源限流，避免影响/write资源。（优先处理/write）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228150103841.png",alt:"image-20230228150103841"}})]),s._v(" "),a("ul",[a("li",[s._v("链路：")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("例如有两条请求链路：")]),s._v(" "),a("p",[s._v("​\t\t/test1 --\x3e /common")]),s._v(" "),a("p",[s._v("​\t\t/test2 --\x3e /common")]),s._v(" "),a("p",[s._v("如果只希望统计从/test2进入到/common的请求，则可以这样配置：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228150454120.png",alt:"image-20230228150454120"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("流控效果：")]),s._v(" "),a("ul",[a("li",[s._v("快速失败：达到阈值后，新的请求会被立即拒绝并抛出FlowException异常。默认的处理方式。")]),s._v(" "),a("li",[s._v("warm up：预热模式，同上，但阈值会动态变化，从一个较小值逐渐增加到最大阈值。")]),s._v(" "),a("li",[s._v("排队等待：让所有的请求按照先后次序排队执行，两个请求的间隔不能小于指定时长。QPS = 5，意味着每200ms处理一个队列中的请求；timeout = 2000，意味着"),a("strong",[s._v("预期等待时长")]),s._v("超过2000ms的请求会被拒绝并抛出异常。")])])]),s._v(" "),a("li",[a("p",[s._v("热点参数限流：可能部分商品是热点商品，例如秒杀商品，我们希望这部分商品的QPS限制与其它商品不一样，高一些。")])])]),s._v(" "),a("h2",{attrs:{id:"隔离和降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离和降级"}},[s._v("#")]),s._v(" 隔离和降级")]),s._v(" "),a("h4",{attrs:{id:"降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降级"}},[s._v("#")]),s._v(" 降级")]),s._v(" "),a("ul",[a("li",[s._v("feignclient远程调用失败降级")]),s._v(" "),a("li",[s._v("编写降级方法，实现"),a("code",[s._v("FallbackFactory")]),s._v("接口，并给spring容器管理")]),s._v(" "),a("li",[s._v("在feign接口中的方法头添加上"),a("code",[s._v("fallbackFactory")])])]),s._v(" "),a("p",[s._v("​")]),s._v(" "),a("h4",{attrs:{id:"隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离"}},[s._v("#")]),s._v(" 隔离")]),s._v(" "),a("p",[a("strong",[s._v("线程池隔离")]),s._v("：给每个服务调用业务分配一个线程池，利用线程池本身实现隔离效果。")]),s._v(" "),a("p",[a("strong",[s._v("信号量隔离")]),s._v("：不创建线程池，而是计数器模式，记录业务使用的线程数量，达到信号量上限时，禁止新的请求。")]),s._v(" "),a("p",[s._v("sentinel中可以配置根据线程数来控制请求。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228153135970.png",alt:"image-20230228153135970"}})]),s._v(" "),a("h4",{attrs:{id:"熔断降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断降级"}},[s._v("#")]),s._v(" 熔断降级")]),s._v(" "),a("ul",[a("li",[s._v("断路器状态")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228155048955.png",alt:"image-20230228155048955"}})]),s._v(" "),a("ul",[a("li",[s._v("慢调用：RT超过500ms的调用是慢调用，统计最近10000ms内的请求，如果请求量超过10次，并且慢调用比例不低于0.5，则触发熔断，熔断时长为5秒。然后进入half-open状态，放行一次请求做测试。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228160302984.png",alt:"image-20230228160302984"}})]),s._v(" "),a("ul",[a("li",[s._v("异常比例：统计最近1000ms内的请求，如果请求量超过10次，并且异常比例不低于0.4，则触发熔断。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228160418479.png",alt:"image-20230228160418479"}})]),s._v(" "),a("ul",[a("li",[s._v("异常数：统计最近1000ms内的请求，如果请求量超过10次，并且异常数不低于2次，则触发熔断。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228160521431.png",alt:"image-20230228160521431"}})]),s._v(" "),a("ul",[a("li",[s._v("授权规则：对调用方的来源做控制，有白名单和黑名单两种方式。我们允许请求从gateway到order-service，不允许浏览器访问order-service，那么白名单中就要填写"),a("strong",[s._v("网关的来源名称（origin）")]),s._v("。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228163624148.png",alt:"image-20230228163624148"}})]),s._v(" "),a("ul",[a("li",[s._v("规则持久化：控制台将配置规则推送到远程配置中心，例如Nacos。Sentinel客户端监听Nacos，获取配置变更的推送消息，完成本地配置更新。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230228163738479.png",alt:"image-20230228163738479"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);