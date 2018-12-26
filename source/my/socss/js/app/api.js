define(['pinyin'],function () {
    var back  ={
    init : function () {
      var me = this;
      $('#nameChinese').keyup(function () {
        var txt = $(this).val();
        // $('#namePinyin').val(pinyinUtil.getPinyin(txt, '', false, false));
        $('#namePinyin').val(pinyinUtil.getFirstLetter(txt, false));
      });

      var $cardNo = $('#cardNo');
      var $cardType = $('#cardType');
      // if ($cardType.val()!=='1') {$cardNo.validatebox('disableValidation');};
      var idcardRule = 'idCardNo["birthday,sex,age"]';
      if ($cardType.val()=='1') {
        $cardNo.validatebox('addRule',idcardRule);
      };

      $('#cardType').change(function () {
        var cardType =$(this).val();
        if (cardType === '1' ) {
          $cardNo.validatebox('addRule',idcardRule);
          // $cardNo.validatebox('enableValidation');
        }else{
          $cardNo.validatebox('removeRule',idcardRule);
          // $cardNo.validatebox('disableValidation');
        };
      });

    }
  }
  return back;
});
