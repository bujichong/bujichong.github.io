define({
    t : {//体温
      image : {//图标
        image : 'images/sheet/x2.png',
        size : [9,9],
      },
      line : {//线
        stroke: "#244be0",
        lineWidth: 1
      },
      circle : {//圆点
        canclick : true,
        radius : 2,
        stroke: "#244be0",
        lineWidth: 5,
        fill : '#244be0'
      },
      ring : {//圆环
        canclick : true,
        radius : 3,
        stroke: "#244be0",
        lineWidth: 2,
        fill : '#fff'
        //transparent
      }
    },
    p : {//脉搏
      line : {//线
        stroke: "red",
        lineWidth: 1
        // 'stroke-dasharray':'- '
      },
      circle : {//圆点
        canclick : true,
        radius : 2,
        stroke: "red",
        lineWidth: 5,
        fill : 'red'
      },
      ring : {//圆环
        canclick : true,
        radius : 5,
        stroke: "red",
        lineWidth: 2,
        fill : 'transparent'
      }
    },
    h : {//心率
      line : {//线
        stroke: "red",
        lineWidth: 1
        // ,'stroke-dasharray':'- '
      },
      ring : {//圆环
        canclick : true,
        radius : 3,
        stroke: "red",
        lineWidth: 2,
        fill : '#fff'
      }
    },
    pc : {//物理降温
      line : {//线
        stroke: "#244be0",
        lineWidth: 1
      },
      ring : {//圆环
        canclick : true,
        radius : 3,
        stroke: "red",
        lineWidth: 2,
        fill : '#fff'
      }
    },
    pch : {//体温-物理降温集
      line : {//线
        stroke: "red",
        lineWidth: 2,
        lineDash:[3,2]
      }
    },
    ph : {//脉搏心率差
      line : {//线
        stroke: "red",
        lineWidth: 2,
        lineDash:[3,2]
      }
    },
    pa : {//疼痛
      line : {//线
        stroke: "red",
        lineWidth: 1
        // ,'stroke-dasharray':'- '
      },
      ring : {//圆环
        canclick : true,
        radius : 3,
        stroke: "red",
        lineWidth: 2,
        fill : '#fff'
      }
    }
});
