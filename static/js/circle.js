// import * as echarts from 'echarts';

var chartDom = document.getElementById('circle');
var myChart = echarts.init(chartDom, null, {
  renderer: 'svg'
});
var option;

var data = [
  {
    name: 'Understanding',
    itemStyle: {
      color: '#a7b9d6'
    },
    children: [
      {
        name: 'Single-Page',
        itemStyle: {
          color: '#77c0cb'
        },
        children: [
          {
            name: 'SP Text Understanding',
            value: 259,
            itemStyle: {
              color: '#b9db7d'
            }
          },
          {
            name: 'SP Layout Understanding',
            value: 91,
            itemStyle: {
              color: '#eaa6d3'
            }
          },
          {
            name: 'SP Figure Understanding',
            value: 94,
            itemStyle: {
              color: '#a9bad8'
            }
          },
          {
            name: 'SP Table Understanding',
            value: 263,
            itemStyle: {
              color: '#fca88b'
            }
          }
        ]
      },
      {
        name: 'Multi-Page',
        itemStyle: {
          color: '#e9d4b0'
        },
        children: [
          {
            name: 'MP Text Understanding',
            value: 443,
            itemStyle: {
              color: '#fde465'
            }
          },
          {
            name: 'MP Layout Understanding',
            value: 172,
            itemStyle: {
              color: '#ebd4b0'
            }
          },
          {
            name: 'MP Figure Understanding',
            value: 174,
            itemStyle: {
              color: '#c6c7c8'
            }
          },
          {
            name: 'MP Table Understanding',
            value: 115,
            itemStyle: {
              color: '#8fd1ba'
            }
          }
        ]
      }
    ]
  },
  {
    name: 'Reasoning',
    itemStyle: {
      color: '#75bec9'
    },
    children: [
      {
        name: 'Single-Page',
        itemStyle: {
          color: '#e9a6d3'
        },
        children: [
          {
            name: 'SP Text Reasoning',
            value: 80,
            itemStyle: {
              color: '#fde167'
            }
          },
          {
            name: 'SP Layout Reasoning',
            value: 24,
            itemStyle: {
              color: '#eaa6d3'
            }
          },
          {
            name: 'SP Figure Reasoning',
            value: 56,
            itemStyle: {
              color: '#a9bad8'
            }
          },
          {
            name: 'SP Table Reasoning',
            value: 98,
            itemStyle: {
              color: '#9db2b7'
            }
          }
        ]
      },
      {
        name: 'Multi-Page',
        itemStyle: {
          color: '#f7a88b'
        },
        children: [
          {
            name: 'MP Text Reasoning',
            value: 115,
            itemStyle: {
              color: '#76c0cb'
            }
          },
          {
            name: 'MP Layout Reasoning',
            value: 40,
            itemStyle: {
              color: '#b9db7d'
            }
          },
          {
            name: 'MP Figure Reasoning',
            value: 85,
            itemStyle: {
              color: '#fca88b'
            }
          },
          {
            name: 'MP Table Reasoning',
            value: 69,
            itemStyle: {
              color: '#ebd4b0'
            }
          }
        ]
      }
    ]
  },
  {
    name: 'Locating',
    itemStyle: {
      color: '#f7a88b'
    },
    children: [
      {
        name: 'Cross-Element',
        itemStyle: {
          color: '#fbe367'
        },
        children: [
          {
            name: 'Cross-Title Locating',
            value: 201,
            itemStyle: {
              color: '#a9bad8'
            }
          },
          {
            name: 'Cross-Table Locating',
            value: 126,
            itemStyle: {
              color: '#fce367'
            }
          },
          {
            name: 'Para-Title Locating',
            value: 137,
            itemStyle: {
              color: '#ead4b0'
            }
          },
          {
            name: 'Figure-Table Locating',
            value: 231,
            itemStyle: {
              color: '#c6c7c8'
            }
          }
        ]
      }
    ]
  }
];

option = {
  series: {
    type: 'sunburst',

    data: data,
    radius: [60, '90%'],
    sort: undefined,
    startAngle: 180,

    emphasis: {
      focus: 'ancestor'
    },

    levels: [
      {},
      {
        r0: '0%',
        r: '35%',
        itemStyle: {
          borderWidth: 4
        },
        label: {
          // align: 'center',
          // rotate: 0,
          // position: "['50%', '50%']",
          // distance: 10,
        //   offset: [10, 0],
          rotate: 'tangential',
          color: '#000000',
          fontSize: 14
        }
      },
      {
        r0: '35%',
        r: '45%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          align: 'center',
          rotate: 'tangential',
          color: '#000000'
        }
      },
      {
        r0: '45%',
        r: '100%',
        label: {
          align: 'right',
          color: '#000000'
          // position: 'outside',
          // padding: 3,
          // silent: false
        },
        itemStyle: {
          borderWidth: 1
        }
      }
    ]
  },
  textStyle: {
    fontSize: 11,
    fontWeight: 'bolder',
    // fontFamily: "monospace",
    // fontFamily: "Times New Roman"
    // fontFamily: "Arial"
    fontFamily: 'Comic Sans MS'
    // fontFamily: "sans-serif"
  }
};

option && myChart.setOption(option);
