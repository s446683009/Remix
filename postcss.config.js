module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
          features: {
            'custom-properties': false,
          },
        },
        'postcss-pxtorem':{
            rootValue: 16,
            unitPrecision: 5,
            mediaQuery: false,
            minPixelValue: 0,
          
            propList: [
              '*padding*',
              'padding',
              '*background*',
                '*height',
              '*margin*',
              'letter-spacing',
              '*width',
              'left',
              'font*',
              'right',
              'top',
              'bottom'
            ]
            
        }
      },

    // plugins: [


        
    //   require('postcss-flexbugs-fixes'),
    //   require('postcss-preset-env')({
    //     autoprefixer: {
    //       flexbox: 'no-2009'
    //     },
    //     stage: 3
    //   }),
    //   require('postcss-pxtorem')({
    //     rootValue: 16,
    //     unitPrecision: 5,
    //     mediaQuery: false,
    //     minPixelValue: 0,
    //     propList: [
    //       '*background*',
    //       '*padding*',
    //       '*margin*',
    //       'letter-spacing',
    //       '*width',
    //       'left',
    //       'font*',
    //       'right',
    //       'top',
    //       'bottom'
    //     ]
    //   })
    // ]
  };
  