cb.define(['common/common_VM.Extend.js'], function (common) {
  var UU_UU_limyt_formula_card_Extend = {
    doAction: function (name, viewmodel) {
        if (this[name])
            this[name](viewmodel);
    },
    init: function (viewmodel) {
      // function getRules(){
      //     let arr = [];

      //     return arr;
      // }

        // 提前赋默认值
      // viewmodel.get('name').setValue(2);
      // viewmodel.get('input1').setValue(3);
      // viewmodel.execute('limingyang', {});
      // viewmodel.get('formula').doPropertyChange('limingyang')

      // viewmodel.getGridModel().getEditRowModel().get('age').doPropertyChange('getContextData', [{
      //     code: '1',
      //     name: 2,
      //     paramType: 3
      // }]);

      // console.log(111, viewmodel.getGridModel().getEditRowModel().get('age').doPropertyChange('limingyang', {
      //     name: 11
      // }));

      // viewmodel.getGridModel().on('afterRowStateChange', function(){
      //     console.log('afterRowStateChange');
      // })

      // viewmodel.getGridModel().getEditRowModel().get('age').on("getContextData", (data)=>{
      //     console.log('data', data);
      //     // viewmodel.getGridModel().getEditRowModel().get('age').on("setContextData", [])
      // })

      // viewmodel.getGridModel().getEditRowModel().get('age').execute('limingyang', {data: 111111})
      console.log(222222);
      viewmodel.get('province').on('afterValueChange', function(){
        console.log('afterRowStateChange11');
        viewmodel.biz.do('aa', viewmodel);
      })


      // viewmodel.execute('updateViewMeta', {code: '0293d255105948ffb7b003e6b3597c52',visible:true})

    }
  }
  try {
    module.exports = UU_UU_limyt_formula_card_Extend;
  } catch (error) { }
  return UU_UU_limyt_formula_card_Extend;
});
