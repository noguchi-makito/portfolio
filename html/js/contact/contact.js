$(function () {
    $(".mandatory").on("blur", function(){
        //必須項目のvalue
        let value = $(this).val();

        //必須項目が入力されてるかの確認
        if(value == "" || !value.match(/[^\s\t]/)){
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });

    //メールアドレス確認
    $(".mail").on("blur", function(){
        let value = $(this).val();
        //メールアドレスの正規確認
        let reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        
        if(!value.match(reg)){
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });
});