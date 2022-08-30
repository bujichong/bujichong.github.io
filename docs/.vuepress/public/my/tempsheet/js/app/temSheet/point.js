define({
    t : {//体温
      image : {//图标
        image : 'images/sheet/x.png',
        size : [7,7],
      },
      line : {//线
        "stroke": "#244be0",
        "stroke-width": 1
      },
      circle : {//圆点
        radius : 2,
        stroke: "#244be0",
        "stroke-width": 5,
        fill : '#244be0'
      },
      ring : {//圆环
        radius : 3,
        stroke: "#244be0",
        "stroke-width": 2,
        fill : '#fff'
      }
    },
    p : {//脉搏
      line : {//线
        "stroke": "red",
        "stroke-width": 1
        // 'stroke-dasharray':'- '
      },
      circle : {//圆点
        radius : 2,
        stroke: "red",
        "stroke-width": 5,
        fill : 'red'
      },
      ring : {//圆环
        radius : 5,
        stroke: "red",
        "stroke-width": 2
        // ,fill : '#fff'
      }
    },
    h : {//心率
      line : {//线
        "stroke": "red",
        "stroke-width": 1
        // ,'stroke-dasharray':'- '
      },
      ring : {//圆环
        radius : 3,
        stroke: "red",
        "stroke-width": 2,
        fill : '#fff'
      }
    },
    pc : {//物理降温
      line : {//线
        "stroke": "#244be0",
        "stroke-width": 1
      },
      ring : {//圆环
        radius : 3,
        stroke: "red",
        "stroke-width": 2,
        fill : '#fff'
      }
    },
    pch : {//体温-物理降温集
      line : {//线
        "stroke": "red",
        "stroke-width": 1,
        'stroke-dasharray':'- '
      }
    },
    ph : {//脉搏心率差
      line : {//线
        "stroke": "red",
        "stroke-width": 1,
        'stroke-dasharray':'- '
      }
    },
    pa : {//疼痛
      line : {//线
        "stroke": "red",
        "stroke-width": 1
        // ,'stroke-dasharray':'- '
      },
      ring : {//圆环
        radius : 3,
        stroke: "red",
        "stroke-width": 2,
        fill : '#fff'
      }
    }
});
