## 手势
- tab 点
- press 长按
- pan 拖
- flick 快速下滑


- 自定义事件 ：
    1. new CustomEvent('click');

tap -> 500ms 

press ->



//fastClick： 移动端的 click 有300ms 的延迟 

        //doubleClick:  移动端的单击 click 300ms 为了判断 双击
        const my = document.querySelector("#my");
        // my.addEventListener('tab', function() {
        //     console.log('tab')
        // })

        document.addEventListener('mousedown', (event) => {
            // const touch = event.changedTouches[0];
            console.log("mousedown", event);
            start(event)

            function mouseMove(e) {
                move(e)
            }

            function mouseEnd(e) {
                end(e)
                document.removeEventListener("mousemove", mouseMove)
                document.removeEventListener("mouseup", mouseEnd)

            }


            document.addEventListener("mousemove", mouseMove)
            document.addEventListener("mouseup", mouseEnd)
        })

        // console.log(my);


        my.addEventListener('touchstart', function(event) {
            const touch = event.changedTouches[0];
            console.log(touch);
            console.log(event)
        })
        my.addEventListener('touchmove', function(event) {
            const touch = event.changedTouches[0];
            console.log(touch);
        })
        my.addEventListener('touchend', function(event) {
            const touch = event.changedTouches[0];
            console.log(touch);
            console.log('tab')
        })


        let isTap = false,
            isPan = false,
            isPress = false,
            timeout;

        function start(point) {
            console.log("start", point);



        }

        function move(point) {
            console.log("move", point);

        }

        function end(point) {
            console.log("end", point);


            if (isTap) {
                console.log("tab发生了");

            }

            if (isPress) console.log("长按发生了");
            clearTimeout(timeout)

        }