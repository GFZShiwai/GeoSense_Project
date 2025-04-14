var data = [
  {
    name: 'Solid\nGeometry',
    itemStyle: {
      color: '#A3D3D2' //柔和的青色
    },
    children: [
      {
        name: 'Calculations',
        value: 17,
        itemStyle: {
          color: '#A3D3D2' //稍淡的青色
        },
        children: [
          {
            name: 'Surface\nArea',
            value: 10,
            itemStyle: {
              color: '#B8DFDE' //更浅的青色
            }
          },
          {
            name: 'Volume',
            value: 7,
            itemStyle: {
              color: '#CCECEA' //这样就不会过于白了
            }
          }
        ]
      },
      {
        name: 'Understanding',
        itemStyle: {
          color: '#9EDAB' //使用淡绿色青色
        },
        children: [
          {
            name: 'Cylinder \nand Cone',
            value: 4,
            itemStyle: {
              color: ' #B2E3C3E' //稍浅的绿青色
            }
          },
          {
            name: 'Cuboid',
            value: 2,
            itemStyle: {
              color: '#C8F0E2E' //更浅的绿青色
            }
          },
          {
            name: 'Prism',
            value: 2,
            itemStyle: {
              color: '#DCFAF4' //没有到接近白色
            }
          }
        ]
      }
    ]
  },
  {
    name: 'Plane Geometry',
    itemStyle: {
      color: '#FAE3D9' //柔和的桃色
    },
    children: [
      {
        name: 'Transformation',
        itemStyle: {
          color: '#FBEBE4' //稍浅的桃色
        },
        children: [
          {
            name: 'Symmetry',
            value: 2,
            itemStyle: {
              color: '#FCF2EA' //更浅但不白的桃色
            }
          },
          {
            name: 'Reflection',
            value: 2,
            itemStyle: {
              color: '#FDF9F1' //不接近白色的桃色
            }
          },
          {
            name: 'Rotation',
            value: 6,
            itemStyle: {
              color: '#FEF0E8' //柔和变化的桃色
            }
          },
          {
            name: 'Scale',
            value: 2,
            itemStyle: {
              color: '#FFF7EF' //浅桃色，避免接近白色
            }
          },
          {
            name: 'Translation',
            value: 2,
            itemStyle: {
              color: '#FFEEE5' //柔和的桃色
            }
          }
        ]
      },
      {
        name: 'Calculation',
        itemStyle: {
          color: '#F4C2C2' //柔粉色
        },
        children: [
          {
            name: 'Interior and\n Exterior\n Angles',
            value: 5,
            itemStyle: {
              color: '#F6CFCF' //稍浅的粉色
            }
          },
          {
            name: 'Areas',
            value: 10,
            itemStyle: {
              color: '#FCF0F0' //更浅但不白的粉色
            }
          },
          {
            name: 'Perimeters',
            value: 6,
            itemStyle: {
              color: '#F8DAD9' //不接近白色的粉色
            }
          }
        ]
      },
      {
        name: 'Base\nElements',
        value: 24,
        itemStyle: {
          color: '#E6E6FA' //柔灰绿色
        },
        children: [
          {
            name: 'Angles',
            value: 8,
            itemStyle: {
              color: '#F5F5FF' //稍浅的灰绿色
            }
          },
          {
            name: 'Lines',
            value: 4,
            itemStyle: {
              color: '#FAFAFF' //更浅的灰绿色但不白
            }
          },
          {
            name: 'Relationships \nof Lines',
            value: 12,
            itemStyle: {
              color: '#F0F0FF' //不接近白色的灰绿色
            }
          }
        ]
      },
      {
        name: 'Polygons',
        itemStyle: {
          color: '#F0C3B0' //柔米黄色
        },
        children: [
          {
            name: 'Parallelogram',
            value: 3,
            itemStyle: {
              color: '#EDCFB4' //稍浅的米黄色
            }
          },
          {
            name: 'Rhombus',
            value: 2,
            itemStyle: {
              color: '#F4E5CC' //更浅的米黄色但不白
            }
          },
          {
            name: 'Triangle',
            value: 27,
            itemStyle: {
              color: '#F2D3BA' //柔和变化的米黄色
            }
          },
          {
            name: 'Trapezoid',
            value: 3,
            itemStyle: {
              color: '#F0DAC0' //浅米黄色但不白
            }
          }
        ]
      },
      
      {
        name: 'Circles',
        value: 22,
        itemStyle: {
          color: '#ACE1AF' //柔和的浅绿色
        },
        children: [
          {
            name: 'Circle \nBasics',
            value: 4,
            itemStyle: {
              color: '#BBE5BEZ' //稍浅的浅绿色
            }
          },
          {
            name: 'Angles \nabout \nCircles',
            value: 8,
            itemStyle: {
              color: '#CBEACD' //更浅但不白的浅绿色
            }
          },
          {
            name: 'Tangents',
            value: 5,
            itemStyle: {
              color: '#DAEFDC' //不接近白色的浅绿色
            }
          },
          {
            name: 'Arc\n and \nSectors',
            value: 5,
            itemStyle: {
              color: '#E9F4EB' //浅绿色但不至于白色
            }
          }
        ]
      }
    ]
  }
];

// 在选项配置中应用新的配色方案，并调整样式以提升清新淡雅的视觉效果
option = {
  title: {
    text: '',
    textStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#2A3547',
      align: 'center'
    },
    subtextStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#666',
      align: 'center'
    },
    sublink: 'https://your-source-link.com'
  },
  series: {
    type: 'sunburst',
    data: data,
    radius: [0, '100%'],
    label: {
      textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333'
      }
    },
    levels: [
      {
        itemStyle: { borderWidth: 4 }
      },
      {
        r0: '10%',
        r: '28%',
        label: { rotate: 'tangential' }
      },
      {
        r0: '30%',
        r: '68%',
        label: { align: 'right' }
      },
      {
        r0: '70%',
        r: '100%',
        label: {
          position: 'inside',
          padding: 5,
          textBorderColor: '#fff',
          textBorderWidth: 2
        }
      }
    ]
  }
};
